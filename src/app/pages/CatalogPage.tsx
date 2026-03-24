import { useState, useEffect } from "react";
import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { FilterSidebar } from "../components/FilterSidebar";
import { NutCard } from "../components/NutCard";
import { Nut } from "../data/nuts";
import { Filter } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";
import { useSearchParams } from "react-router";
import { useProducts } from "../context/ProductsContext";
import { useTranslation } from "react-i18next";

export function CatalogPage() {
  const { products } = useProducts();
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const { t } = useTranslation();

  const maxProductPrice = Math.ceil(Math.max(...products.map(p => p.price)));

  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || "All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(maxProductPrice);
  const [showOnlyOnSale, setShowOnlyOnSale] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  useEffect(() => {
    setMaxPrice(maxProductPrice);
  }, [maxProductPrice]);

  const handlePriceChange = (min: number, max: number) => {
    if (min > max) {
      setMinPrice(max);
      setMaxPrice(max);
    } else if (max < min) {
      setMinPrice(min);
      setMaxPrice(min);
    } else {
      setMinPrice(min);
      setMaxPrice(max);
    }
  };

  const handleAddToCart = (nut: Nut) => {
    addToCart(nut);
    toast.success(t('product.addedToCart', { name: nut.name }));
  };

  const handleClearFilters = () => {
    setSelectedCategory("All");
    setMinPrice(0);
    setMaxPrice(maxProductPrice);
    setShowOnlyOnSale(false);
  };

  const filteredNuts = products.filter((nut) => {
    const categoryMatch =
      selectedCategory === "All" || nut.category === selectedCategory;
    const priceMatch = nut.price >= minPrice && nut.price <= maxPrice;
    const saleMatch = !showOnlyOnSale || (nut.oldPrice && nut.oldPrice > nut.price);
    return categoryMatch && priceMatch && saleMatch;
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NutsHeader />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
          <FilterSidebar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            minPrice={minPrice}
            maxPrice={maxPrice}
            onPriceChange={handlePriceChange}
            showOnlyOnSale={showOnlyOnSale}
            onShowOnlyOnSaleChange={setShowOnlyOnSale}
            onClearFilters={handleClearFilters}
          />

          {mobileFilterOpen && (
            <FilterSidebar
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              minPrice={minPrice}
              maxPrice={maxPrice}
              onPriceChange={handlePriceChange}
              showOnlyOnSale={showOnlyOnSale}
              onShowOnlyOnSaleChange={setShowOnlyOnSale}
              isMobileOpen={mobileFilterOpen}
              onClose={() => setMobileFilterOpen(false)}
              onClearFilters={handleClearFilters}
            />
          )}

          <div>
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
                {t('catalog.title')}
              </h1>
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden bg-primary text-primary-foreground p-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2"
              >
                <Filter className="w-5 h-5" />
                <span>{t('catalog.filter')}</span>
              </button>
            </div>

            <p className="mb-6" style={{ color: '#2C2C18' }}>
              {t('catalog.productFound', { count: filteredNuts.length })}
            </p>

            {filteredNuts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filteredNuts.map((nut) => (
                  <NutCard key={nut.id} nut={nut} onAddToCart={handleAddToCart} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-foreground/60">
                  {t('catalog.noProducts')}
                </p>
                <p className="text-foreground/50 mt-2">
                  {t('catalog.tryAdjusting')}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <NutsFooter />
    </div>
  );
}
