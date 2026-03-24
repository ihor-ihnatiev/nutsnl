import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Link, useParams } from "react-router";
import heroImage from "@/assets/nuts-tips.png";

interface BlogPostData {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content: {
    introduction: string;
    sections: {
      title: string;
      content: string;
      tips?: string[];
    }[];
    conclusion: string;
  };
}

const blogPostsData: { [key: number]: BlogPostData } = {
  2: {
    id: 2,
    title: "The Ultimate Guide to Storing Nuts for Maximum Freshness",
    excerpt:
      "Learn the best practices for storing different types of nuts to maintain their freshness, flavor, and nutritional value for longer periods.",
    image: heroImage,
    author: "Michael Chen",
    date: "March 18, 2026",
    readTime: "4 min read",
    category: "Tips",
    content: {
      introduction:
        "Proper storage is crucial for maintaining the quality, taste, and nutritional benefits of nuts. Whether you buy in bulk or keep a small stash at home, understanding how to store nuts correctly can extend their shelf life significantly and prevent them from going rancid. In this comprehensive guide, we'll explore the best practices for storing different types of nuts.",
      sections: [
        {
          title: "Why Proper Storage Matters",
          content:
            "Nuts contain high levels of healthy fats, which makes them susceptible to oxidation and rancidity when exposed to air, light, heat, and moisture. Rancid nuts not only taste bad but can also lose their nutritional value and may even be harmful to your health. Proper storage helps preserve the nuts' natural oils, flavor, texture, and nutritional benefits including vitamins, minerals, and antioxidants.",
        },
        {
          title: "General Storage Guidelines",
          content:
            "To keep your nuts fresh for as long as possible, follow these essential storage principles:",
          tips: [
            "Keep nuts in airtight containers to prevent exposure to air and moisture",
            "Store in a cool, dark place away from direct sunlight and heat sources",
            "Avoid storing near strong-smelling foods as nuts can absorb odors",
            "Label containers with purchase dates to track freshness",
            "Buy whole nuts when possible - they last longer than chopped or sliced varieties",
          ],
        },
        {
          title: "Storage by Temperature",
          content:
            "The temperature at which you store nuts significantly affects their longevity. Here's a breakdown of storage times based on different conditions:",
          tips: [
            "Room Temperature (Pantry): Shelled nuts last 1-3 months, unshelled nuts last 3-6 months",
            "Refrigerator: Extends shelf life to 6-9 months for most nuts",
            "Freezer: Can preserve nuts for up to 1-2 years while maintaining quality",
            "For daily use, keep a small amount at room temperature and store the rest in the fridge or freezer",
          ],
        },
        {
          title: "Storing Different Types of Nuts",
          content:
            "Different nuts have varying oil contents and therefore different storage requirements. Almonds and hazelnuts have lower oil content and can last longer at room temperature. Walnuts, pecans, and pine nuts have higher oil content and are more prone to rancidity - store these in the refrigerator or freezer. Cashews and macadamias fall in the middle but benefit from refrigeration for extended storage.",
        },
        {
          title: "Container Options",
          content:
            "Choosing the right container is essential for optimal nut storage:",
          tips: [
            "Glass jars with tight-fitting lids - excellent for refrigerator storage",
            "Food-grade plastic containers with airtight seals - good for pantry and freezer",
            "Vacuum-sealed bags - ideal for long-term freezer storage",
            "Original packaging - if unopened and airtight, can be adequate for short-term storage",
            "Mason jars - versatile and reusable, perfect for all storage locations",
          ],
        },
        {
          title: "Signs of Rancid Nuts",
          content:
            "Knowing when nuts have gone bad is important for your health. Look out for these warning signs:",
          tips: [
            "Bitter or sour taste instead of the natural sweet, nutty flavor",
            "Unpleasant, paint-like smell or musty odor",
            "Discoloration or dark spots on the nut surface",
            "Shriveled or dried-out appearance",
            "Soft or rubbery texture instead of crisp and crunchy",
          ],
        },
      ],
      conclusion:
        "By following these storage guidelines, you can ensure your nuts remain fresh, flavorful, and nutritious for months to come. Remember that proper storage not only preserves taste but also protects the valuable nutrients that make nuts such a healthy addition to your diet. Invest in good storage containers, monitor your nuts regularly, and enjoy them at their peak quality. Your body and taste buds will thank you!",
    },
  },
};

export function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const postId = id ? parseInt(id) : 2;
  const post = blogPostsData[postId];

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <NutsHeader />
        <div className="container mx-auto px-4 py-20 text-center flex-1">
          <h1 className="text-3xl font-bold text-black mb-4">
            Article Not Found
          </h1>
          <Link
            to="/blog"
            className="text-accent hover:text-accent/80 font-semibold"
          >
            ← Back to Blog
          </Link>
        </div>
        <NutsFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NutsHeader />

      <article className="flex-1">
        {/* Hero Image */}
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-secondary hover:text-secondary/80 font-semibold mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </Link>

            {/* Article Header */}
            <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 shadow-xl border border-secondary/20 mb-8">
              <div className="mb-4">
                <span className="bg-secondary/20 text-accent px-4 py-2 rounded-full text-sm font-bold">
                  {post.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-lg sm:text-xl text-card-foreground/70 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-card-foreground/60 pb-6 border-b border-secondary/20">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span className="font-semibold">{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
                <button className="ml-auto flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Article Body */}
            <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 shadow-xl border border-secondary/20">
              {/* Introduction */}
              <p className="text-base sm:text-lg text-card-foreground/80 leading-relaxed mb-8">
                {post.content.introduction}
              </p>

              {/* Sections */}
              {post.content.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-4">
                    {section.title}
                  </h2>
                  <p className="text-base sm:text-lg text-card-foreground/80 leading-relaxed mb-4">
                    {section.content}
                  </p>
                  {section.tips && (
                    <ul className="space-y-3 ml-4">
                      {section.tips.map((tip, tipIndex) => (
                        <li
                          key={tipIndex}
                          className="flex items-start space-x-3"
                        >
                          <span className="text-accent font-bold text-xl mt-0.5">
                            •
                          </span>
                          <span className="text-base sm:text-lg text-card-foreground/80 leading-relaxed">
                            {tip}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Conclusion */}
              <div className="bg-secondary/10 rounded-lg p-6 sm:p-8 border-l-4 border-accent mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-4">
                  Conclusion
                </h2>
                <p className="text-base sm:text-lg text-card-foreground/80 leading-relaxed">
                  {post.content.conclusion}
                </p>
              </div>

              {/* Author Bio */}
              <div className="mt-10 pt-8 border-t border-secondary/20">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      About {post.author}
                    </h3>
                    <p className="text-card-foreground/70 leading-relaxed">
                      {post.author} is a nutrition expert and food storage specialist
                      with over 10 years of experience helping people make the most
                      of their healthy food choices. Passionate about sustainable
                      living and reducing food waste.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Articles CTA */}
            <div className="mt-10 text-center">
              <Link
                to="/blog"
                className="inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                <span>Read More Articles</span>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <NutsFooter />
    </div>
  );
}
