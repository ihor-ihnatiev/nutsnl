import express from "express";
import cors from "cors";
import helmet from "helmet";
import { env } from "./config/env.js";
import authRoutes from "./routes/auth.js";
import tiktokRoutes from "./routes/tiktok.js";

const app = express();

// Security headers
app.use(helmet());

const allowedOrigins = env.CLIENT_URL.split(",").map((s) => s.trim());
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));
app.use(express.json({ limit: "10kb" }));

app.use("/api/auth", authRoutes);
app.use("/api/tiktok", tiktokRoutes);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

export default app;
