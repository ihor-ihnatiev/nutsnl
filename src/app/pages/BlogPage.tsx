import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Health Benefits of Almonds: Why They Should Be in Your Diet",
    excerpt:
      "Discover the amazing health benefits of almonds, from heart health to weight management. Learn why nutritionists recommend eating almonds daily.",
    image:
      "https://images.unsplash.com/photo-1641430470762-13c3489762e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbG1vbmRzJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NzQyNjMyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Dr. Sarah Johnson",
    date: "March 20, 2026",
    readTime: "5 min read",
    category: "Health",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Storing Nuts for Maximum Freshness",
    excerpt:
      "Learn the best practices for storing different types of nuts to maintain their freshness, flavor, and nutritional value for longer periods.",
    image:
      "https://images.unsplash.com/photo-1772986796274-4a89aef0c822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cyUyMG51dHJpdGlvbnxlbnwxfHx8fDE3NzQyNjYwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Michael Chen",
    date: "March 18, 2026",
    readTime: "4 min read",
    category: "Tips",
  },
  {
    id: 3,
    title: "Walnut vs Almond: Which Nut is Better for Your Brain?",
    excerpt:
      "A comprehensive comparison of walnuts and almonds, focusing on their brain-boosting properties and cognitive health benefits.",
    image:
      "https://images.unsplash.com/photo-1584542979166-bd34924d7b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxudXRzJTIwd29vZGVuJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzQyNjMyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Dr. Emily Rodriguez",
    date: "March 15, 2026",
    readTime: "6 min read",
    category: "Nutrition",
  },
  {
    id: 4,
    title: "5 Delicious Nut-Based Recipes for Healthy Snacking",
    excerpt:
      "Transform your snack time with these creative and nutritious recipes featuring various nuts. Perfect for both kids and adults.",
    image:
      "https://images.unsplash.com/photo-1726771517475-e7acdd34cd8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNoZXclMjBudXRzfGVufDF8fHx8MTc3NDI2MDc1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Chef Amanda Lee",
    date: "March 12, 2026",
    readTime: "7 min read",
    category: "Recipes",
  },
  {
    id: 5,
    title: "Sustainable Nut Farming: Our Commitment to the Environment",
    excerpt:
      "Learn about our sustainable farming practices and how we ensure that every nut we sell is produced with minimal environmental impact.",
    image:
      "https://images.unsplash.com/photo-1444483911532-30de7b1b0aaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXpleGxudHMlMjBicm93bnxlbnwxfHx8fDE3NzQyNjMyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Green Team",
    date: "March 10, 2026",
    readTime: "5 min read",
    category: "Sustainability",
  },
  {
    id: 6,
    title: "Pistachios: The Green Gold of the Nut World",
    excerpt:
      "Explore the rich history and health benefits of pistachios. From ancient Persia to modern kitchens, discover why they're so special.",
    image:
      "https://images.unsplash.com/photo-1598110996285-54523b72be93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXN0YWNoaW9zJTIwZ3JlZW58ZW58MXx8fHwxNzc0MjYzMjQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Historical Society",
    date: "March 8, 2026",
    readTime: "6 min read",
    category: "Culture",
  },
];

export function BlogPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NutsHeader />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 flex-1">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Nuts & Nutrition Blog
          </h1>
          <p className="text-lg sm:text-xl text-black/70 max-w-3xl mx-auto">
            Explore articles about health benefits, recipes, storage tips, and
            everything you need to know about premium nuts.
          </p>
        </div>

        {/* Featured Post */}
        <div className="bg-card rounded-lg overflow-hidden shadow-lg mb-8 sm:mb-12 border border-secondary/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="aspect-video lg:aspect-auto overflow-hidden">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 mb-4">
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                  Featured
                </span>
                <span className="bg-secondary/20 text-accent px-3 py-1 rounded-full text-sm">
                  {blogPosts[0].category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-card-foreground/70 mb-6">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center space-x-4 text-sm text-card-foreground/60 mb-6">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
              <Link
                to={`/blog/post/${blogPosts[0].id}`}
                className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 font-semibold transition-colors"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col border border-secondary/20"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <div className="mb-3">
                  <span className="bg-secondary/20 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-3 hover:text-accent transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-sm text-card-foreground/70 mb-4 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-card-foreground/60 mb-4 pt-4 border-t border-secondary/10">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Link
                  to={`/blog/post/${post.id}`}
                  className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 font-semibold transition-colors text-sm"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-gradient-to-r from-accent to-accent/80 rounded-lg p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-accent-foreground mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-accent-foreground/90 mb-6 max-w-2xl mx-auto">
            Get the latest articles, recipes, and health tips delivered straight
            to your inbox. Join our community of nut enthusiasts!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <NutsFooter />
    </div>
  );
}