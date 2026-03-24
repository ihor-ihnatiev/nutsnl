import { Products } from './Products';
import { useCart } from '../AppLayout';

export function ProductsPage() {
  const { addToCart } = useCart();
  
  return <Products onAddToCart={addToCart} />;
}