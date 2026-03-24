import { Router, Request, Response } from "express";

const router = Router();

const TIKTOK_USERNAME = "fruitynuts.eu";

interface OEmbedResult {
  title: string;
  thumbnail_url: string;
  thumbnail_width: number;
  thumbnail_height: number;
  author_name: string;
}

interface TikTokVideo {
  id: string;
  desc: string;
  cover: string;
  url: string;
}

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
let cache: { data: TikTokVideo[]; timestamp: number } | null = null;

// Store video URLs here. Update when new videos are posted.
// To add new videos: POST /api/tiktok/videos with { urls: ["https://www.tiktok.com/@fruitynuts.eu/video/123..."] }
let videoUrls: string[] = (process.env.TIKTOK_VIDEO_URLS || "").split(",").filter(Boolean);

async function fetchOEmbed(videoUrl: string): Promise<TikTokVideo | null> {
  try {
    const res = await fetch(
      `https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`
    );
    if (!res.ok) return null;
    const data: OEmbedResult = await res.json();
    const idMatch = videoUrl.match(/\/video\/(\d+)/);
    return {
      id: idMatch?.[1] || videoUrl,
      desc: data.title || "",
      cover: data.thumbnail_url || "",
      url: videoUrl,
    };
  } catch {
    return null;
  }
}

async function fetchVideos(): Promise<TikTokVideo[]> {
  if (cache && Date.now() - cache.timestamp < CACHE_TTL_MS) {
    return cache.data;
  }

  if (videoUrls.length === 0) return [];

  const results = await Promise.all(videoUrls.slice(0, 6).map(fetchOEmbed));
  const videos = results.filter((v): v is TikTokVideo => v !== null);

  if (videos.length > 0) {
    cache = { data: videos, timestamp: Date.now() };
  }

  return videos;
}

router.get("/feed", async (_req: Request, res: Response) => {
  try {
    const videos = await fetchVideos();
    res.json({
      videos,
      profileUrl: `https://www.tiktok.com/@${TIKTOK_USERNAME}`,
      username: TIKTOK_USERNAME,
    });
  } catch (err) {
    console.error("TikTok feed error:", err);
    res.status(502).json({ error: "Failed to fetch TikTok feed", videos: [] });
  }
});

// Admin endpoint to update video URLs
router.post("/videos", (req: Request, res: Response) => {
  const { urls } = req.body;
  if (!Array.isArray(urls)) {
    res.status(400).json({ error: "urls must be an array" });
    return;
  }
  videoUrls = urls.filter(
    (u: string) => typeof u === "string" && u.includes("tiktok.com")
  );
  cache = null; // invalidate cache
  res.json({ ok: true, count: videoUrls.length });
});

export default router;
