import { useParams, useNavigate, useOutletContext } from 'react-router';
import { ArrowLeft, ShoppingCart, Heart, Star, Package, Leaf } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../components/ProductCard';
import { useState } from 'react';

interface OutletContext {
  addToCart: (product: Product) => void;
}

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useOutletContext<OutletContext>();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/products')}
            className="text-green-600 hover:text-green-700"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate('/products')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 sm:mb-6"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Back to Products</span>
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-6 lg:p-8">
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 sm:p-3 shadow-md hover:bg-gray-50 cursor-pointer">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs sm:text-sm rounded-full mb-2">
                  {product.category}
                </span>
                <h1 className="text-2xl sm:text-3xl mb-2">{product.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(245 reviews)</span>
                </div>
                <p className="text-3xl sm:text-4xl text-green-600 mb-4 sm:mb-6">${product.price}</p>
              </div>

              {/* Description */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg mb-2">Description</h3>
                <p className="text-sm sm:text-base text-gray-700">{product.description}</p>
              </div>

              {/* Nutrition Facts */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg mb-3">Nutrition Facts (per serving)</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <p className="text-xs sm:text-sm text-gray-600">Calories</p>
                    <p className="text-lg sm:text-xl">{product.calories} kcal</p>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <p className="text-xs sm:text-sm text-gray-600">Protein</p>
                    <p className="text-lg sm:text-xl">{product.protein}g</p>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <p className="text-xs sm:text-sm text-gray-600">Carbs</p>
                    <p className="text-lg sm:text-xl">{product.carbs}g</p>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <p className="text-xs sm:text-sm text-gray-600">Fat</p>
                    <p className="text-lg sm:text-xl">{product.fat}g</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              {product.benefits && (
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg mb-3">Key Benefits</h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Ingredients */}
              {product.ingredients && (
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg mb-3">Ingredients</h3>
                  <p className="text-sm sm:text-base text-gray-700">{product.ingredients.join(', ')}</p>
                </div>
              )}

              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-6 border-t">
                <div className="flex items-center justify-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-colors text-sm sm:text-base ${
                    addedToCart
                      ? 'bg-green-700 text-white'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                  {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-4 sm:mt-6 flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-blue-50 rounded-lg">
                <Package className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm text-blue-900">
                    <strong>Free shipping</strong> on orders over €50
                  </p>
                  <p className="text-xs sm:text-sm text-blue-800 mt-1">
                    Usually ships within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-8 sm:mt-12">
          <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  onClick={() => navigate(`/products/${relatedProduct.id}`)}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="p-3 sm:p-4">
                    <h3 className="text-base sm:text-lg mb-2">{relatedProduct.name}</h3>
                    <p className="text-xl sm:text-2xl text-green-600">${relatedProduct.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}