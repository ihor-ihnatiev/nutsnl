import { Link } from "react-router";
import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { NutCard } from "../components/NutCard";
import { ShoppingBag, Leaf, Award, TrendingUp, Shield, Star } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductsContext";
import { Nut } from "../data/nuts";

export function HomePage() {
  const { addToCart } = useCart();
  const { products } = useProducts();

  const handleAddToCart = (nut: Nut) => {
    addToCart(nut);
    toast.success(`${nut.name} added to cart!`);
  };

  const bestSellers = products.slice(0, 4);
  const hotDeal = products[1];
  const hotDealOriginalPrice = hotDeal.price;
  const hotDealDiscount = 25;
  const hotDealPrice = hotDeal.price * (1 - hotDealDiscount / 100);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NutsHeader />

      {/* Hero Banner */}
      <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1670941949362-4cd2b509158f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRzJTIwd29vZGVuJTIwYmFja2dyb3VuZCUyMGhlcm98ZW58MXx8fHwxNzc0MjY2MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Premium Nuts"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent/60"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-foreground mb-6 leading-tight">
              Premium Organic Nuts
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-accent-foreground/90 mb-8 leading-relaxed">
              Discover the finest selection of organic nuts, sourced directly from the world's best farms. Pure. Natural. Delicious.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center space-x-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <ShoppingBag className="w-6 h-6" />
              <span>Shop Now</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Best Sellers Section */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-8 h-8 text-secondary fill-secondary" />
              <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#2C2C18' }}>
                Best Sellers
              </h2>
              <Star className="w-8 h-8 text-secondary fill-secondary" />
            </div>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#2C2C18' }}>
              Our customers' favorite picks. Premium quality nuts that keep selling out!
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {bestSellers.map((nut, index) => (
              <div key={nut.id} className="relative">
                {/* Best Seller Badge */}
                <div className="absolute top-3 left-3 z-10 bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-bold text-sm shadow-lg flex items-center space-x-1">
                  <span>#{index + 1} Bestseller</span>
                </div>
                <NutCard nut={nut} onAddToCart={handleAddToCart} />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/shop"
              className="inline-block font-semibold text-lg border-b-2 transition-colors"
              style={{ color: '#2C2C18', borderColor: '#2C2C18' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#2C2C18';
                e.currentTarget.style.opacity = '0.7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              View All Products →
            </Link>
          </div>
        </section>

        {/* Why Choose Farm Fresh Nuts Section */}
        <section className="mb-16 sm:mb-20 bg-card rounded-lg p-8 sm:p-12 lg:p-16 border border-secondary/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-4">
              Why Choose Farm Fresh Nuts?
            </h2>
            <p className="text-lg text-card-foreground/70 max-w-3xl mx-auto">
              We're committed to bringing you the highest quality nuts with unmatched freshness and taste.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                100% Organic
              </h3>
              <p className="text-card-foreground/70 text-sm leading-relaxed">
                Sourced from certified organic farms with no pesticides or chemicals. Pure and natural.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                Premium Quality
              </h3>
              <p className="text-card-foreground/70 text-sm leading-relaxed">
                Hand-selected premium grade nuts. Only the finest make it to your table.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                Fast Delivery
              </h3>
              <p className="text-card-foreground/70 text-sm leading-relaxed">
                Free shipping on orders over €50. Get your nuts delivered fresh to your doorstep.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                Quality Guarantee
              </h3>
              <p className="text-card-foreground/70 text-sm leading-relaxed">
                Not satisfied? 30-day money-back guarantee. Your satisfaction is our priority.
              </p>
            </div>
          </div>
        </section>

        {/* Hot Deal Section */}
        <section className="bg-gradient-to-br from-[#D97706] to-[#B45309] rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 mb-6">
                <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold text-sm">
                  HOT DEAL
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Organic<br />Walnuts
              </h2>
              
              <p className="text-white/90 text-base mb-8 leading-relaxed">
                Premium organic walnuts packed with omega-3 fatty acids. Excellent for heart health and brain function. Harvested from certified organic farms.
              </p>

              <div className="flex items-baseline space-x-4 mb-8">
                <span className="text-5xl sm:text-6xl font-bold text-white">
                  €11.62
                </span>
                <span className="text-2xl text-white/60 line-through">
                  €15.49
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={`/product/${hotDeal.id}`}
                  className="w-full sm:flex-1 inline-flex items-center justify-center bg-white hover:bg-white/90 text-[#2C2C18] px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <span>View Product</span>
                </Link>
                <button
                  onClick={() => handleAddToCart(hotDeal)}
                  className="w-full sm:flex-1 inline-flex items-center justify-center space-x-2 bg-[#EFB752] hover:bg-[#EFB752]/90 text-[#2C2C18] px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
            
            <div className="aspect-square lg:aspect-auto overflow-hidden order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1771189957022-8bfa5ad7276d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwd2FsbnV0cyUyMGphcnxlbnwxfHx8fDE3NzQyODIyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Organic Walnuts"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <section className="mt-16 sm:mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#2C2C18' }}>
              Follow Us @Nutsnl
            </h2>
            <p className="text-lg" style={{ color: '#2C2C18' }}>
              Join our community and share your nut recipes!
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
            {products.slice(0, 6).map((nut) => (
              <div
                key={nut.id}
                className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={nut.image}
                  alt={nut.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      <NutsFooter />
    </div>
  );
}