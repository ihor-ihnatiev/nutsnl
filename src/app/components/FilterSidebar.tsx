import { X } from "lucide-react";
import { useProducts } from "../context/ProductsContext";
import { useTranslation } from "react-i18next";

interface FilterSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
  showOnlyOnSale: boolean;
  onShowOnlyOnSaleChange: (value: boolean) => void;
  isMobileOpen?: boolean;
  onClose?: () => void;
  onClearFilters?: () => void;
}

export function FilterSidebar({
  selectedCategory,
  onCategoryChange,
  minPrice,
  maxPrice,
  onPriceChange,
  showOnlyOnSale,
  onShowOnlyOnSaleChange,
  isMobileOpen = false,
  onClose,
  onClearFilters
}: FilterSidebarProps) {
  const { products } = useProducts();
  const { t } = useTranslation();

  // Generate categories dynamically from products
  const categories = [t('common.all'), ...Array.from(new Set(products.map(p => p.category))).sort()];

  // Calculate max possible price from products
  const maxPossiblePrice = Math.ceil(Math.max(...products.map(p => p.price), 25));

  const content = (
    <div className="p-6 rounded-lg" style={{ backgroundColor: '#3E3E1F' }}>
      {/* Mobile close button */}
      {isMobileOpen && (
        <div className="flex justify-between items-center mb-6 lg:hidden">
          <h2 className="text-xl font-semibold text-primary-foreground">{t('filter.filters')}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
      )}

      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-primary-foreground mb-4">
          {t('filter.categories')}
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                onCategoryChange(category === t('common.all') ? "All" : category);
                if (isMobileOpen && onClose) {
                  onClose();
                }
              }}
              className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors ${
                (selectedCategory === "All" && category === t('common.all')) || selectedCategory === category
                  ? "bg-secondary text-secondary-foreground font-medium"
                  : "text-primary-foreground hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-primary-foreground mb-4">
          {t('filter.priceRange')}
        </h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-primary-foreground mb-2 block">
              {t('filter.minPrice', { price: minPrice })}
            </label>
            <input
              type="range"
              min="0"
              max={maxPossiblePrice}
              step="1"
              value={minPrice}
              onChange={(e) => onPriceChange(Number(e.target.value), maxPrice)}
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-secondary"
              style={{
                background: `linear-gradient(to right, #EFB752 0%, #EFB752 ${(minPrice / maxPossiblePrice) * 100}%, rgba(255,255,255,0.2) ${(minPrice / maxPossiblePrice) * 100}%, rgba(255,255,255,0.2) 100%)`
              }}
            />
          </div>
          <div>
            <label className="text-sm text-primary-foreground mb-2 block">
              {t('filter.maxPrice', { price: maxPrice })}
            </label>
            <input
              type="range"
              min="0"
              max={maxPossiblePrice}
              step="1"
              value={maxPrice}
              onChange={(e) => onPriceChange(minPrice, Number(e.target.value))}
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-secondary"
              style={{
                background: `linear-gradient(to right, #EFB752 0%, #EFB752 ${(maxPrice / maxPossiblePrice) * 100}%, rgba(255,255,255,0.2) ${(maxPrice / maxPossiblePrice) * 100}%, rgba(255,255,255,0.2) 100%)`
              }}
            />
          </div>
        </div>
      </div>

      {/* Sale Filter */}
      <div>
        <label className="flex items-center space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={showOnlyOnSale}
            onChange={(e) => onShowOnlyOnSaleChange(e.target.checked)}
            className="w-5 h-5 rounded border-2 border-secondary text-secondary focus:ring-2 focus:ring-secondary cursor-pointer"
          />
          <span className="text-primary-foreground font-medium group-hover:text-secondary transition-colors">
            {t('filter.showOnlySale')}
          </span>
        </label>
      </div>

      {/* Clear Filters */}
      {onClearFilters && (selectedCategory !== "All" || minPrice !== 0 || maxPrice !== maxPossiblePrice || showOnlyOnSale) && (
        <button
          onClick={() => {
            onClearFilters();
            if (isMobileOpen && onClose) {
              onClose();
            }
          }}
          className="mt-6 w-full py-2.5 px-4 rounded-lg border border-secondary text-secondary font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors"
        >
          {t('filter.clearAll')}
        </button>
      )}
    </div>
  );

  // Mobile overlay
  if (isMobileOpen) {
    return (
      <>
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
        {/* Sidebar */}
        <div className="fixed left-0 top-0 bottom-0 w-80 bg-background z-50 overflow-y-auto lg:hidden">
          {content}
        </div>
      </>
    );
  }

  // Desktop sidebar
  return <div className="hidden lg:block sticky top-24">{content}</div>;
}
