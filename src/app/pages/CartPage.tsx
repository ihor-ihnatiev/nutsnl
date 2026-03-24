import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { useCart } from "../context/CartContext";
import { Link } from "react-router";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();

  const handleRemoveItem = (id: number, name: string) => {
    removeFromCart(id);
    toast.success(`${name} removed from cart`);
  };

  const handleClearCart = () => {
    clearCart();
    toast.success("Cart cleared");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <NutsHeader />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex-1">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-lg p-8 sm:p-12 lg:p-16 shadow-lg border border-secondary/20">
              <ShoppingBag className="w-20 h-20 text-card-foreground/30 mx-auto mb-6" />
              <h1 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-lg text-card-foreground/70 mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
        </div>
        <NutsFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NutsHeader />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex-1">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/shop"
            className="inline-flex items-center space-x-2 hover:opacity-80 font-semibold mb-4 transition-colors"
            style={{ color: '#2C2C18' }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Continue Shopping</span>
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: '#2C2C18' }}>
              Shopping Cart
            </h1>
            <button
              onClick={handleClearCart}
              className="font-semibold transition-colors text-sm sm:text-base"
              style={{ color: '#2C2C18' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Clear Cart
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-lg p-4 sm:p-6 shadow-md border border-secondary/20 flex flex-col sm:flex-row gap-4"
              >
                {/* Image */}
                <div className="w-full sm:w-32 h-40 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <Link
                      to={`/product/${item.id}`}
                      className="text-xl font-bold text-card-foreground hover:text-accent transition-colors mb-2 block"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-card-foreground/60 mb-2">
                      {item.weight} • {item.origin}
                    </p>
                    
                    {/* Price Display */}
                    {item.oldPrice && item.oldPrice > item.price ? (
                      <div className="flex items-center gap-2">
                        <p className="text-lg font-bold" style={{ color: '#2C2C18' }}>
                          €{item.price.toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-400 line-through">
                          €{item.oldPrice.toFixed(2)}
                        </p>
                        <span className="text-white px-2 py-0.5 rounded text-xs font-bold" style={{ backgroundColor: '#EFB752' }}>
                          SALE
                        </span>
                      </div>
                    ) : (
                      <p className="text-lg font-bold text-accent">
                        €{item.price.toFixed(2)}
                      </p>
                    )}
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-secondary/20 hover:bg-secondary/30 flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-4 h-4 text-accent" />
                      </button>
                      <span className="text-lg font-bold text-card-foreground min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-secondary/20 hover:bg-secondary/30 flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-4 h-4 text-accent" />
                      </button>
                    </div>

                    <button
                      onClick={() => handleRemoveItem(item.id, item.name)}
                      className="flex items-center space-x-2 transition-colors"
                      style={{ color: '#2C2C18' }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                      <Trash2 className="w-5 h-5" />
                      <span className="hidden sm:inline">Remove</span>
                    </button>
                  </div>
                </div>

                {/* Subtotal (desktop) */}
                <div className="hidden sm:flex flex-col items-end justify-between">
                  <div className="text-right">
                    <p className="text-sm text-card-foreground/60 mb-1">Subtotal</p>
                    <p className="text-xl font-bold text-accent">
                      €{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Subtotal (mobile) */}
                <div className="sm:hidden flex items-center justify-between pt-4 border-t border-secondary/20">
                  <p className="text-sm text-card-foreground/60">Subtotal</p>
                  <p className="text-xl font-bold text-accent">
                    €{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 shadow-lg border border-secondary/20 sticky top-24">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-card-foreground/70">
                  <span>Subtotal</span>
                  <span className="font-semibold">€{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-card-foreground/70">
                  <span>Shipping</span>
                  <span className="font-semibold">Calculated at checkout</span>
                </div>
                <div className="border-t border-secondary/20 pt-4">
                  <div className="flex justify-between text-xl font-bold text-card-foreground">
                    <span>Total</span>
                    <span className="text-accent">€{totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-4 rounded-lg font-bold text-lg transition-colors mb-4 block text-center"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/shop"
                className="block text-center text-secondary hover:text-secondary/80 font-semibold transition-colors"
              >
                Continue Shopping
              </Link>

              {/* Benefits */}
              <div className="mt-6 pt-6 border-t border-secondary/20 space-y-3">
                <div className="flex items-start space-x-3 text-sm text-card-foreground/70">
                  <span className="text-accent font-bold">✓</span>
                  <span>Free shipping on orders over €50</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-card-foreground/70">
                  <span className="text-accent font-bold">✓</span>
                  <span>100% money-back guarantee</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-card-foreground/70">
                  <span className="text-accent font-bold">✓</span>
                  <span>Secure checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NutsFooter />
    </div>
  );
}