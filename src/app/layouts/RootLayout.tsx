import { Outlet } from 'react-router';
import { Toaster } from 'sonner';
import { CartProvider } from '../context/CartContext';
import { ProductsProvider } from '../context/ProductsContext';

export function RootLayout() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Outlet />
        <Toaster position="bottom-right" />
      </CartProvider>
    </ProductsProvider>
  );
}
