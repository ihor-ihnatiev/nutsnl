import { Link, useLocation } from "react-router";
import { Search, ShoppingCart } from "lucide-react";
import logo from "figma:asset/35e2bd39eec43a960bc5cfbcd59d5693f9a462fb.png";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { SearchModal } from "./SearchModal";

export function NutsHeader() {
  const location = useLocation();
  const { totalItems } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-primary border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <img
              src={logo}
              alt="Nutsnl"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <span className="text-xl sm:text-2xl font-bold text-primary-foreground hidden sm:inline">
              Nutsnl
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-primary-foreground hover:text-secondary transition-colors pb-1 ${
                isActive("/") ? "border-b-2 border-secondary" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`text-primary-foreground hover:text-secondary transition-colors pb-1 ${
                isActive("/shop") ? "border-b-2 border-secondary" : ""
              }`}
            >
              Shop
            </Link>
            <Link
              to="/sale"
              className={`text-primary-foreground hover:text-secondary transition-colors pb-1 ${
                isActive("/sale") ? "border-b-2 border-secondary" : ""
              }`}
            >
              Sale
            </Link>
            <Link
              to="/blog"
              className={`text-primary-foreground hover:text-secondary transition-colors pb-1 ${
                isActive("/blog") ? "border-b-2 border-secondary" : ""
              }`}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className={`text-primary-foreground hover:text-secondary transition-colors pb-1 ${
                isActive("/about") ? "border-b-2 border-secondary" : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-primary-foreground hover:text-secondary transition-colors pb-1 ${
                isActive("/contact") ? "border-b-2 border-secondary" : ""
              }`}
            >
              Contacts
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-2">
            {/* Search Icon */}
            <button
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
            </button>

            {/* Cart Icon */}
            <Link to="/cart" className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[1.25rem] text-center" style={{ backgroundColor: '#EFB752' }}>
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}