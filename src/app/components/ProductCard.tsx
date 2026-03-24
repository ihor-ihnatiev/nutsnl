import { Plus } from "lucide-react";
import { useNavigate } from "react-router";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  category: string;
  description?: string;
  benefits?: string[];
  ingredients?: string[];
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer flex flex-col h-full"
    >
      <div className="relative h-40 sm:h-48 overflow-hidden flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
          {product.category}
        </span>
      </div>

      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg mb-2">{product.name}</h3>
        <div className="text-xl sm:text-2xl text-green-600 mb-3">
          ${product.price.toFixed(2)}
        </div>

        <div className="bg-gray-50 rounded-lg p-2 sm:p-3 mb-3">
          <div className="text-xs text-gray-600 mb-2">
            Nutrition per serving
          </div>
          <div className="grid grid-cols-4 gap-1 sm:gap-2 text-center">
            <div>
              <div className="text-xs text-gray-500">Cal</div>
              <div className="text-sm">{product.calories}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">
                Protein
              </div>
              <div className="text-sm">{product.protein}g</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Carbs</div>
              <div className="text-sm">{product.carbs}g</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Fat</div>
              <div className="text-sm">{product.fat}g</div>
            </div>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 mt-auto text-sm sm:text-base"
        >
          <Plus className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}