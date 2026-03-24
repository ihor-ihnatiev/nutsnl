import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { NutCard } from "../components/NutCard";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductsContext";
import { Nut } from "../data/nuts";
import { Tag, Clock, TrendingDown } from "lucide-react";

export function SalePage() {
  const { addToCart } = useCart();
  const { products } = useProducts();

  const handleAddToCart = (nut: Nut) => {
    addToCart(nut);
    toast.success(`${nut.name} added to cart!`);
  };

  // Get products on sale (products with oldPrice)
  const saleProducts = products.filter((nut) => nut.oldPrice && nut.oldPrice > nut.price);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NutsHeader />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 flex-1">
        {/* Hero Banner */}
        <div className="relative bg-gradient-to-r from-accent to-accent/80 rounded-lg overflow-hidden mb-8 sm:mb-12">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1744997676749-6c628f787a62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxlJTIwZGlzY291bnQlMjBudXRzJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzc0MjY2MDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Sale"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 px-6 sm:px-12 py-12 sm:py-16 lg:py-20">
            <div className="flex items-center space-x-2 mb-4">
              <Tag className="w-8 h-8 text-secondary" />
              <span className="text-secondary font-bold text-lg">Special Offer</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-foreground mb-4">
              Premium Nuts Sale
            </h1>
            <p className="text-lg sm:text-xl text-accent-foreground/90 mb-6 max-w-2xl">
              Save big on our finest selection of premium nuts. Limited time offer!
            </p>
            <div className="flex items-center space-x-2 text-accent-foreground/80">
              <Clock className="w-5 h-5" />
              <span>Sale ends in 7 days</span>
            </div>
          </div>
        </div>

        {/* Sale Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-card rounded-lg p-6 text-center border border-secondary/20">
            <TrendingDown className="w-12 h-12 text-accent mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-accent mb-2">
              {saleProducts.length > 0
                ? `Up to ${Math.max(
                    ...saleProducts.map((p) =>
                      Math.round(((p.oldPrice! - p.price) / p.oldPrice!) * 100)
                    )
                  )}%`
                : "0%"}
            </h3>
            <p className="text-card-foreground/70">Maximum Discount</p>
          </div>
          <div className="bg-card rounded-lg p-6 text-center border border-secondary/20">
            <Tag className="w-12 h-12 text-accent mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-accent mb-2">{saleProducts.length}</h3>
            <p className="text-card-foreground/70">Products on Sale</p>
          </div>
          <div className="bg-card rounded-lg p-6 text-center border border-secondary/20">
            <Clock className="w-12 h-12 text-accent mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-accent mb-2">7 Days</h3>
            <p className="text-card-foreground/70">Time Remaining</p>
          </div>
        </div>

        {/* Sale Products */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#2C2C18' }}>
          Discounted Products
        </h2>
        
        {saleProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {saleProducts.map((nut) => (
              <div key={nut.id} className="min-h-[572px]">
                <NutCard nut={nut} onAddToCart={handleAddToCart} />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-card rounded-lg p-12 text-center border border-secondary/20">
            <p className="text-xl text-card-foreground/70">
              No products on sale at the moment. Check back soon!
            </p>
          </div>
        )}

        {/* Terms Section */}
        <div className="mt-12 bg-card rounded-lg p-6 sm:p-8 border border-secondary/20">
          <h3 className="text-xl font-bold text-card-foreground mb-4">Sale Terms & Conditions</h3>
          <ul className="space-y-2 text-card-foreground/70">
            <li>• Offer valid for 7 days from the start date</li>
            <li>• Discounts apply automatically at checkout</li>
            <li>• Cannot be combined with other promotions</li>
            <li>• Limited stock available on sale items</li>
            <li>• All sale items are final sale - no returns or exchanges</li>
          </ul>
        </div>
      </div>

      <NutsFooter />
    </div>
  );
}