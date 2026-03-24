import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Link } from "react-router";
import { useProducts } from "../context/ProductsContext";
import { useTranslation } from "react-i18next";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const { products } = useProducts();
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      setSearchQuery("");
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredNuts = products.filter((nut) => {
    const query = searchQuery.toLowerCase();
    return (
      nut.name.toLowerCase().includes(query) ||
      nut.category.toLowerCase().includes(query) ||
      nut.type.toLowerCase().includes(query) ||
      nut.description.toLowerCase().includes(query) ||
      nut.origin.toLowerCase().includes(query) ||
      nut.article.toLowerCase().includes(query)
    );
  });

  const handleLinkClick = () => {
    onClose();
  };

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;

    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-accent/30 text-accent font-semibold">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl mx-4 bg-card rounded-lg shadow-2xl max-h-[80vh] flex flex-col animate-in slide-in-from-top-4 duration-300">
        {/* Search Input */}
        <div className="p-4 sm:p-6 border-b border-secondary/20">
          <div className="flex items-center space-x-3">
            <Search className="w-6 h-6 text-card-foreground/60 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder={t('search.placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-lg text-card-foreground placeholder:text-card-foreground/50 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary/20 rounded-lg transition-colors flex-shrink-0"
            >
              <X className="w-6 h-6 text-card-foreground/60" />
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {searchQuery.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-card-foreground/30 mx-auto mb-4" />
              <p className="text-card-foreground/60 text-lg">
                {t('search.startTyping')}
              </p>
              <p className="text-card-foreground/40 text-sm mt-2">
                {t('search.trySearching')}
              </p>
            </div>
          ) : filteredNuts.length > 0 ? (
            <div>
              <p className="text-sm text-card-foreground/60 mb-4">
                {t('search.found', { count: filteredNuts.length })}
              </p>
              <div className="space-y-3">
                {filteredNuts.map((nut) => (
                  <Link
                    key={nut.id}
                    to={`/product/${nut.id}`}
                    onClick={handleLinkClick}
                    className="flex items-center space-x-4 p-3 sm:p-4 rounded-lg hover:bg-secondary/10 transition-colors border border-transparent hover:border-secondary/20"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={nut.image}
                        alt={nut.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-card-foreground text-base sm:text-lg mb-1 truncate">
                        {highlightText(nut.name, searchQuery)}
                      </h3>
                      <p className="text-sm text-card-foreground/60 mb-1">
                        {highlightText(nut.category, searchQuery)} • {highlightText(nut.origin, searchQuery)}
                      </p>
                      <p className="text-xs text-card-foreground/40 mb-1">
                        {t('product.article', { article: '' })}{highlightText(nut.article, searchQuery)}
                      </p>
                      <p className="text-sm text-card-foreground/50 line-clamp-1">
                        {nut.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <p className="text-xl font-bold text-accent">
                        €{nut.price.toFixed(2)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-card-foreground/60 text-lg mb-2">
                {t('search.noResults', { query: searchQuery })}
              </p>
              <p className="text-card-foreground/40 text-sm">
                {t('search.tryDifferent')}
              </p>
            </div>
          )}
        </div>

        {/* Quick Links */}
        {searchQuery.length === 0 && (
          <div className="p-4 sm:p-6 border-t border-secondary/20">
            <p className="text-sm text-card-foreground/60 mb-3">{t('search.popularCategories')}</p>
            <div className="flex flex-wrap gap-2">
              {["Almonds", "Walnuts", "Cashews", "Pistachios", "Hazelnuts"].map((category) => (
                <Link
                  key={category}
                  to={`/shop?category=${category}`}
                  onClick={handleLinkClick}
                  className="px-4 py-2 bg-secondary/20 hover:bg-secondary/30 text-accent rounded-full text-sm font-semibold transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
