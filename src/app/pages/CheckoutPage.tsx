import { useCart } from "../context/CartContext";
import { useNavigate, Link } from "react-router";
import { useState } from "react";
import { toast } from "sonner";
import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Truck, 
  CheckCircle,
  ArrowLeft
} from "lucide-react";

export function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    shippingMethod: "standard",
    paymentMethod: "card",
  });

  const shippingCost = formData.shippingMethod === "express" ? 15 : totalPrice > 50 ? 0 : 7.99;
  const finalTotal = totalPrice + shippingCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors: Record<string, string> = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.postalCode) newErrors.postalCode = "Postal code is required";
    if (!formData.country) newErrors.country = "Country is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill in all required fields");
      return;
    }

    setIsProcessing(true);

    // Simulate processing
    setTimeout(() => {
      clearCart();
      setIsProcessing(false);
      toast.success("Order placed successfully! 🎉");
      navigate("/thank-you", { 
        state: { 
          orderNumber: Math.floor(100000 + Math.random() * 900000),
          email: formData.email,
          customerName: `${formData.firstName} ${formData.lastName}`,
          totalAmount: finalTotal
        } 
      });
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <NutsHeader />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex-1">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-lg p-8 sm:p-12 shadow-lg border border-secondary/20">
              <h1 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-lg text-card-foreground/70 mb-8">
                Add some items to your cart before checking out.
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
            to="/cart"
            className="inline-flex items-center space-x-2 hover:opacity-80 font-semibold mb-4 transition-colors"
            style={{ color: '#2C2C18' }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Cart</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: '#2C2C18' }}>
            Checkout
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="bg-card rounded-lg p-6 shadow-md border border-secondary/20">
                <div className="flex items-center space-x-3 mb-6">
                  <User className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold text-card-foreground">
                    Contact Information
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-card-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-[#F5F1E8] border rounded-lg text-[#2C2C18] placeholder:text-[#2C2C18]/50 focus:outline-none transition-colors ${
                        errors.firstName 
                          ? "border-accent focus:border-accent" 
                          : "border-[#E5DCC8] focus:border-accent"
                      }`}
                      placeholder="John"
                    />
                    {errors.firstName && <p className="text-sm mt-1" style={{ color: '#2C2C18' }}>{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-card-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-[#F5F1E8] border rounded-lg text-[#2C2C18] placeholder:text-[#2C2C18]/50 focus:outline-none transition-colors ${
                        errors.lastName 
                          ? "border-accent focus:border-accent" 
                          : "border-[#E5DCC8] focus:border-accent"
                      }`}
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="text-sm mt-1" style={{ color: '#2C2C18' }}>{errors.lastName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-card-foreground mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2C2C18]/40" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-11 pr-4 py-3 bg-[#F5F1E8] border rounded-lg text-[#2C2C18] placeholder:text-[#2C2C18]/50 focus:outline-none transition-colors ${
                          errors.email 
                            ? "border-accent focus:border-accent" 
                            : "border-[#E5DCC8] focus:border-accent"
                        }`}
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && <p className="text-sm mt-1" style={{ color: '#2C2C18' }}>{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-card-foreground mb-2">
                      Phone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2C2C18]/40" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full pl-11 pr-4 py-3 bg-[#F5F1E8] border rounded-lg text-[#2C2C18] placeholder:text-[#2C2C18]/50 focus:outline-none transition-colors ${
                          errors.phone 
                            ? "border-accent focus:border-accent" 
                            : "border-[#E5DCC8] focus:border-accent"
                        }`}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    {errors.phone && <p className="text-sm mt-1" style={{ color: '#2C2C18' }}>{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-card rounded-lg p-6 shadow-md border border-secondary/20">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold text-card-foreground">
                    Shipping Address
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-card-foreground mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-[#F5F1E8] border rounded-lg text-[#2C2C18] placeholder:text-[#2C2C18]/50 focus:outline-none transition-colors ${
                        errors.address 
                          ? "border-accent focus:border-accent" 
                          : "border-[#E5DCC8] focus:border-accent"
                      }`}
                      placeholder="123 Main Street, Apt 4B"
                    />
                    {errors.address && <p className="text-sm mt-1" style={{ color: '#2C2C18' }}>{errors.address}</p>}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-card-foreground mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-[#F5F1E8] border rounded-lg text-[#2C2C18] placeholder:text-[#2C2C18]/50 focus:outline-none transition-colors ${
                          errors.city 
                            ? "border-accent focus:border-accent" 
                            : "border-[#E5DCC8] focus:border-accent"
                        }`}
                        placeholder="New York"
                      />
                      {errors.city && <p className="text-sm mt-1" style={{ color: '#2C2C18' }}>{errors.city}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-card-foreground mb-2">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-[#F5F1E8] border rounded-lg text-[#2C2C18] placeholder:text-[#2C2C18]/50 focus:outline-none transition-colors ${
                          errors.postalCode 
                            ? "border-accent focus:border-accent" 
                            : "border-[#E5DCC8] focus:border-accent"
                        }`}
                        placeholder="10001"
                      />
                      {errors.postalCode && <p className="text-sm mt-1" style={{ color: '#2C2C18' }}>{errors.postalCode}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-card-foreground mb-2">
                        Country *
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none transition-colors ${
                          errors.country 
                            ? "border-accent focus:border-accent text-[#2C2C18]" 
                            : "border-[#E5DCC8] focus:border-accent text-[#2C2C18]"
                        }`}
                        style={{ color: '#2C2C18' }}
                      >
                        <option value="" style={{ color: '#2C2C18' }}>Select</option>
                        <option value="US" style={{ color: '#2C2C18' }}>United States</option>
                        <option value="CA" style={{ color: '#2C2C18' }}>Canada</option>
                        <option value="UK" style={{ color: '#2C2C18' }}>United Kingdom</option>
                        <option value="AU" style={{ color: '#2C2C18' }}>Australia</option>
                        <option value="NL" style={{ color: '#2C2C18' }}>Netherlands</option>
                        <option value="DE" style={{ color: '#2C2C18' }}>Germany</option>
                        <option value="FR" style={{ color: '#2C2C18' }}>France</option>
                      </select>
                      {errors.country && <p className="text-sm mt-1" style={{ color: '#2C2C18' }}>{errors.country}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping Method */}
              <div className="bg-card rounded-lg p-6 shadow-md border border-secondary/20">
                <div className="flex items-center space-x-3 mb-6">
                  <Truck className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold text-card-foreground">
                    Shipping Method
                  </h2>
                </div>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-4 border-2 border-secondary/30 rounded-lg cursor-pointer hover:border-accent transition-colors">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="shippingMethod"
                        value="standard"
                        checked={formData.shippingMethod === "standard"}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-accent"
                      />
                      <div>
                        <p className="font-semibold text-card-foreground">Standard Shipping</p>
                        <p className="text-sm text-card-foreground/60">5-7 business days</p>
                      </div>
                    </div>
                    <p className="font-bold text-accent">
                      {totalPrice > 50 ? "FREE" : "€7.99"}
                    </p>
                  </label>
                  <label className="flex items-center justify-between p-4 border-2 border-secondary/30 rounded-lg cursor-pointer hover:border-accent transition-colors">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="shippingMethod"
                        value="express"
                        checked={formData.shippingMethod === "express"}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-accent"
                      />
                      <div>
                        <p className="font-semibold text-card-foreground">Express Shipping</p>
                        <p className="text-sm text-card-foreground/60">2-3 business days</p>
                      </div>
                    </div>
                    <p className="font-bold text-accent">€15.00</p>
                  </label>
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 shadow-lg border border-secondary/20 sticky top-24">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">
                Order Summary
              </h2>

              {/* Items */}
              <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
                {items.map((item) => {
                  const isOnSale = item.oldPrice && item.oldPrice > item.price;
                  
                  return (
                    <div key={item.id} className="flex items-center space-x-3">
                      <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 relative">
                        {isOnSale && (
                          <div className="absolute top-1 right-1 text-white px-1.5 py-0.5 rounded text-[10px] font-bold z-10" style={{ backgroundColor: '#EFB752' }}>
                            SALE
                          </div>
                        )}
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-card-foreground text-sm truncate">
                          {item.name}
                        </p>
                        <p className="text-sm text-card-foreground/60">
                          Qty: {item.quantity}
                        </p>
                        {isOnSale && (
                          <p className="text-xs text-gray-400 line-through">
                            €{item.oldPrice!.toFixed(2)} each
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        {isOnSale ? (
                          <>
                            <p className="font-bold text-sm" style={{ color: '#2C2C18' }}>
                              €{(item.price * item.quantity).toFixed(2)}
                            </p>
                            <p className="text-xs text-gray-400 line-through">
                              €{(item.oldPrice! * item.quantity).toFixed(2)}
                            </p>
                          </>
                        ) : (
                          <p className="font-bold text-accent text-sm">
                            €{(item.price * item.quantity).toFixed(2)}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Totals */}
              <div className="space-y-3 pt-4 border-t border-secondary/20">
                <div className="flex justify-between text-card-foreground/70">
                  <span>Subtotal</span>
                  <span className="font-semibold">€{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-card-foreground/70">
                  <span>Shipping</span>
                  <span className="font-semibold">
                    {shippingCost === 0 ? "FREE" : `€${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t border-secondary/20 pt-3">
                  <div className="flex justify-between text-xl font-bold text-card-foreground">
                    <span>Total</span>
                    <span className="text-accent">€{finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handleSubmit}
                disabled={isProcessing}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-4 rounded-lg font-bold text-lg transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Place Order</span>
                  </>
                )}
              </button>

              {/* Security Note */}
              <div className="mt-6 pt-6 border-t border-secondary/20">
                <p className="text-xs text-card-foreground/60 text-center">
                  🔒 Your payment information is encrypted and secure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NutsFooter />
    </div>
  );
}