import { useState } from "react";
import { useRef, useEffect } from "react";
import {
  ProductCard,
  Product,
} from "../components/ProductCard";
import { products } from "../data/products";

const categories = [
  "All",
  "Vegetables",
  "Supplements",
  "Nuts",
  "Dairy",
  "Seafood",
  "Grains",
];

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

export function Products({ onAddToCart }: ProductsProps) {
  const [filter, setFilter] = useState<string>("All");
  const categoryRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  // Auto-scroll selected category to center
  useEffect(() => {
    const selectedButton = categoryRefs.current[filter];
    if (selectedButton) {
      selectedButton.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [filter]);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl mb-6 sm:mb-8 text-black">
          Our Products
        </h1>

        {/* Categories Filter - Horizontal Scroll on Mobile */}
        <div className="mb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
            {categories.map((category) => (
              <button
                key={category}
                ref={(el) => { categoryRefs.current[category] = el; }}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors flex-shrink-0 snap-start ${
                  filter === category
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </main>
  );
}