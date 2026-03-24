import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Product } from './ProductCard';
import { Checkout } from './Checkout';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface ShoppingCartProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
  onClearCart: () => void;
}

export function ShoppingCart({ items, isOpen, onClose, onUpdateQuantity, onRemove, onClearCart }: ShoppingCartProps) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = () => {
    onClearCart();
    setIsCheckoutOpen(false);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Cart Panel */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b">
            <h2 className="text-xl sm:text-2xl">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <button
                  onClick={onClose}
                  className="text-green-600 hover:text-green-700"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3 sm:gap-4 pb-4 border-b">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base mb-1 truncate">{item.product.name}</h3>
                      <p className="text-base sm:text-lg text-green-600 mb-2">€{item.product.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                        >
                          <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        <span className="w-6 sm:w-8 text-center text-sm sm:text-base">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                        >
                          <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemove(item.product.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors"
                    >
                      <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <span className="text-base sm:text-lg">Total:</span>
                <span className="text-xl sm:text-2xl text-green-600">€{total.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-green-600 text-white py-3 sm:py-4 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <Checkout
          isOpen={isCheckoutOpen}
          items={items}
          total={total}
          onClose={() => setIsCheckoutOpen(false)}
          onOrderComplete={handleOrderComplete}
        />
      )}
    </>
  );
}