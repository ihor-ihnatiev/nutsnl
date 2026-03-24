import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { Package, Truck, Clock, MapPin, Gift } from "lucide-react";

export function ShippingInfoPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NutsHeader />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex-1">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/20 rounded-full mb-6">
            <Truck className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black">
            Shipping Information
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#2C2C18', opacity: 0.7 }}>
            Fast, reliable delivery to bring farm-fresh nuts right to your doorstep
          </p>
        </div>

        {/* Shipping Options */}
        <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 mb-8 border border-secondary/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-6">
            Shipping Options
          </h2>
          
          <div className="space-y-6">
            {/* Standard Shipping */}
            <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  Standard Shipping
                </h3>
                <p className="text-card-foreground/70 mb-2">
                  Delivery within 5-7 business days
                </p>
                <p className="text-secondary font-bold">€4.99 (FREE on orders over €50)</p>
              </div>
            </div>

            {/* Express Shipping */}
            <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  Express Shipping
                </h3>
                <p className="text-card-foreground/70 mb-2">
                  Delivery within 2-3 business days
                </p>
                <p className="text-secondary font-bold">€12.99</p>
              </div>
            </div>

            {/* Next Day Delivery */}
            <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  Next Day Delivery
                </h3>
                <p className="text-card-foreground/70 mb-2">
                  Order before 2 PM for next business day delivery
                </p>
                <p className="text-secondary font-bold">€19.99</p>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Zones */}
        <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 mb-8 border border-secondary/20">
          <div className="flex items-center space-x-3 mb-6">
            <MapPin className="w-8 h-8 text-accent" />
            <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground">
              Delivery Areas
            </h2>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-background/50 rounded-lg">
                <h3 className="font-bold text-card-foreground mb-2">Domestic Shipping</h3>
                <p className="text-card-foreground/70 text-sm">
                  We ship to all 50 states in the USA. Hawaii and Alaska may have extended delivery times.
                </p>
              </div>
              <div className="p-4 bg-background/50 rounded-lg">
                <h3 className="font-bold text-card-foreground mb-2">International Shipping</h3>
                <p className="text-card-foreground/70 text-sm">
                  Currently shipping to Canada, UK, and select European countries. International orders may take 10-15 business days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Free Shipping */}
        <div className="bg-gradient-to-r from-accent to-accent/80 rounded-lg p-6 sm:p-8 lg:p-10 mb-8 text-center">
          <Gift className="w-16 h-16 text-accent-foreground mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-accent-foreground mb-4">
            Free Shipping on Orders Over €50
          </h2>
          <p className="text-accent-foreground/90 text-lg">
            Enjoy complimentary standard shipping on all orders above €50. No coupon code needed!
          </p>
        </div>

        {/* Order Processing */}
        <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 mb-8 border border-secondary/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-6">
            Order Processing
          </h2>
          
          <div className="space-y-4 text-card-foreground/70">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
              <p>
                <strong className="text-card-foreground">Processing Time:</strong> All orders are processed within 1-2 business days.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
              <p>
                <strong className="text-card-foreground">Order Confirmation:</strong> You will receive an email confirmation as soon as your order is placed.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
              <p>
                <strong className="text-card-foreground">Tracking Information:</strong> Once your order ships, you'll receive a tracking number via email.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
              <p>
                <strong className="text-card-foreground">Weekend Orders:</strong> Orders placed on weekends will be processed on the following Monday.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 border border-secondary/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-6">
            Important Notes
          </h2>
          
          <div className="space-y-4 text-card-foreground/70">
            <p>
              📦 <strong className="text-card-foreground">Packaging:</strong> All products are carefully packaged to ensure freshness and prevent damage during transit.
            </p>
            <p>
              🌡️ <strong className="text-card-foreground">Temperature Control:</strong> Nuts are shipped in climate-controlled packaging to maintain optimal quality.
            </p>
            <p>
              📍 <strong className="text-card-foreground">P.O. Boxes:</strong> We can ship to P.O. boxes, but express shipping options may not be available.
            </p>
            <p>
              ❄️ <strong className="text-card-foreground">Holidays:</strong> During peak holiday seasons, delivery times may be extended by 1-2 days.
            </p>
            <p>
              ✉️ <strong className="text-card-foreground">Contact Us:</strong> For any shipping questions, please contact our customer service team.
            </p>
          </div>
        </div>
      </div>

      <NutsFooter />
    </div>
  );
}