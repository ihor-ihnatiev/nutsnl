import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { Link, useLocation } from "react-router";
import { CheckCircle, Mail, Package, Heart, ShoppingBag, Truck } from "lucide-react";

export function ThankYouPage() {
  const location = useLocation();
  const { orderNumber, email, customerName, totalAmount } = location.state || { 
    orderNumber: 123456, 
    email: "your email",
    customerName: "Customer",
    totalAmount: 0
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NutsHeader />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex-1">
        <div className="max-w-4xl mx-auto">
          {/* Success Animation */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 bg-green-100 rounded-full mb-6 animate-in zoom-in duration-500">
              <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-600" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Thank You!
            </h1>
            
            <p className="text-xl sm:text-2xl text-foreground/80 mb-2">
              {customerName}, your order has been placed successfully
            </p>
            
            <p className="text-lg text-foreground/60">
              We appreciate your business and look forward to serving you again
            </p>
          </div>

          {/* Order Details Card */}
          <div className="bg-card rounded-lg p-6 sm:p-8 shadow-xl border-2 border-accent/20 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center md:text-left">
                <p className="text-sm text-card-foreground/60 mb-2">Order Number</p>
                <p className="text-2xl font-bold text-accent">#{orderNumber}</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm text-card-foreground/60 mb-2">Total Amount</p>
                <p className="text-2xl font-bold text-card-foreground">${totalAmount.toFixed(2)}</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm text-card-foreground/60 mb-2">Email Confirmation</p>
                <p className="text-lg font-semibold text-card-foreground truncate">{email}</p>
              </div>
            </div>

            <div className="border-t-2 border-secondary/20 pt-6 space-y-6">
              {/* Email Confirmation */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-card-foreground text-lg mb-2">
                    Email Confirmation
                  </h3>
                  <p className="text-card-foreground/70">
                    A confirmation email has been sent to <strong className="text-accent">{email}</strong> with your order details and invoice. Please check your inbox.
                  </p>
                </div>
              </div>

              {/* What's Next */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-card-foreground text-lg mb-2">
                    What Happens Next?
                  </h3>
                  <ul className="text-card-foreground/70 space-y-2">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>We will prepare an invoice for your order</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Our team will contact you to arrange payment using your preferred method</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>After payment confirmation, your order will be shipped within 1-2 business days</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Estimated Delivery Banner */}
          <div className="bg-gradient-to-r from-[#D97706] to-[#B45309] rounded-lg p-6 sm:p-8 shadow-lg mb-8 text-white">
            <div className="flex items-center space-x-4 mb-4">
              <Package className="w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-1">
                  Estimated Delivery
                </h3>
                <p className="text-lg">
                  Your order will arrive in <strong>5-7 business days</strong>
                </p>
              </div>
            </div>
            <p className="text-white/90">
              Track your order status and get real-time updates via email
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-card rounded-lg p-6 sm:p-8 shadow-md border border-secondary/20 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold text-card-foreground">
                Why Customers Love Nutsnl
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🌱</div>
                <h4 className="font-bold text-card-foreground mb-2">100% Natural</h4>
                <p className="text-sm text-card-foreground/60">
                  Farm-fresh nuts with no additives or preservatives
                </p>
              </div>
              <div className="text-center p-6 border-b border-gray-200">
                <Truck className="w-12 h-12 text-accent mx-auto mb-3" />
                <h4 className="font-bold text-card-foreground mb-2">Fast Shipping</h4>
                <p className="text-sm text-card-foreground/60">
                  Free shipping on orders over €50
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💯</div>
                <h4 className="font-bold text-card-foreground mb-2">Quality Guarantee</h4>
                <p className="text-sm text-card-foreground/60">
                  100% satisfaction or your money back
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/shop"
              className="flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-4 rounded-lg font-bold text-lg transition-colors shadow-md"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Continue Shopping</span>
            </Link>
            <Link
              to="/"
              className="flex items-center justify-center space-x-2 bg-card hover:bg-card/90 text-card-foreground border-2 border-accent px-6 py-4 rounded-lg font-bold text-lg transition-colors shadow-md"
            >
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Contact Section */}
          <div className="mt-12 text-center pb-8">
            <p className="text-card-foreground/70 mb-3">
              Questions about your order?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="text-accent hover:text-accent/80 font-semibold transition-colors underline"
              >
                Contact our support team
              </Link>
              <span className="hidden sm:block text-card-foreground/40">•</span>
              <a
                href="mailto:info@nutsnl.com"
                className="text-accent hover:text-accent/80 font-semibold transition-colors underline"
              >
                info@nutsnl.com
              </a>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="text-center py-8 border-t-2 border-secondary/20">
            <p className="text-2xl font-bold text-foreground mb-2">
              Thank you for choosing Nutsnl! 🌰
            </p>
            <p className="text-lg text-foreground/70">
              We hope you enjoy your premium quality nuts
            </p>
          </div>
        </div>
      </div>

      <NutsFooter />
    </div>
  );
}