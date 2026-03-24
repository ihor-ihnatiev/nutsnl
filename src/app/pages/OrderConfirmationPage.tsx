import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { Link, useLocation } from "react-router";
import { CheckCircle, Mail, Package, Home } from "lucide-react";

export function OrderConfirmationPage() {
  const location = useLocation();
  const { orderNumber, email } = location.state || { 
    orderNumber: "N/A", 
    email: "your email" 
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NutsHeader />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex-1">
        <div className="max-w-3xl mx-auto">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 sm:w-14 sm:h-14 text-green-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              Order Confirmed!
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70">
              Thank you for your purchase
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-card rounded-lg p-6 sm:p-8 shadow-lg border border-secondary/20 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm text-card-foreground/60 mb-1">Order Number</p>
                <p className="text-xl font-bold text-accent">#{orderNumber}</p>
              </div>
              <div>
                <p className="text-sm text-card-foreground/60 mb-1">Confirmation Email</p>
                <p className="text-lg font-semibold text-card-foreground break-all">{email}</p>
              </div>
            </div>

            <div className="border-t border-secondary/20 pt-6">
              <div className="flex items-start space-x-4 mb-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-card-foreground mb-2">
                    Confirmation Email Sent
                  </h3>
                  <p className="text-card-foreground/70 text-sm">
                    We've sent a confirmation email to <strong>{email}</strong> with your order details and tracking information.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Package className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-card-foreground mb-2">
                    What's Next?
                  </h3>
                  <p className="text-card-foreground/70 text-sm">
                    Your order is being prepared and will be shipped soon. You'll receive a tracking number once your package is on its way.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Estimated Delivery */}
          <div className="bg-gradient-to-r from-[#D97706] to-[#B45309] rounded-lg p-6 sm:p-8 shadow-lg mb-6 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Estimated Delivery
            </h3>
            <p className="text-lg mb-2">
              Your order will arrive in <strong>5-7 business days</strong>
            </p>
            <p className="text-white/80 text-sm">
              You'll receive updates at every step of the delivery process
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/shop"
              className="flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              <span>Continue Shopping</span>
            </Link>
            <Link
              to="/"
              className="flex items-center justify-center space-x-2 bg-card hover:bg-card/90 text-card-foreground border-2 border-secondary/20 px-6 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Need Help */}
          <div className="mt-8 text-center">
            <p className="text-card-foreground/60 mb-2">
              Need help with your order?
            </p>
            <Link
              to="/contact"
              className="text-accent hover:text-accent/80 font-semibold transition-colors"
            >
              Contact our support team
            </Link>
          </div>
        </div>
      </div>

      <NutsFooter />
    </div>
  );
}
