import { Outlet } from 'react-router';
import { Toaster } from 'sonner';
import { CartProvider } from '../context/CartContext';
import { ProductsProvider } from '../context/ProductsContext';
import { AuthProvider } from '../context/AuthContext';

export function RootLayout() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <Outlet />
          <Toaster position="bottom-right" />
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}
