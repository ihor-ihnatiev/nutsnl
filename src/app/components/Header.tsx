import { ShoppingCart as CartIcon, User, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  onMenuClick?: () => void;
}

export function Header({ cartItemCount, onCartClick, onMenuClick }: HeaderProps) {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const isDashboard = location.pathname.startsWith('/dashboard');
  const isAdminLogin = location.pathname === '/admin/login';
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-8">
            {!isDashboard && !isAdminLogin && onMenuClick && (
              <button
                onClick={onMenuClick}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            )}
            
            <Link to="/" className="flex flex-col">
              <h1 className="text-xl sm:text-2xl text-green-600">NutriShop</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Your healthy nutrition store</p>
            </Link>
            
            {!isDashboard && !isAdminLogin && (
              <nav className="hidden md:flex gap-4 lg:gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm transition-colors hover:text-green-600 ${
                      location.pathname === item.path
                        ? 'text-green-600'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            )}
          </div>
          
          {!isDashboard && !isAdminLogin && (
            <div className="flex items-center gap-3">
              <button
                onClick={onCartClick}
                className="relative p-2 sm:p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
              >
                <CartIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
              
              <Link
                to="/admin/login"
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline text-sm">Admin</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}