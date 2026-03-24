import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { NutCard } from "../components/NutCard";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductsContext";
import { Nut } from "../data/nuts";
import { Tag, Clock, TrendingDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export function SalePage() {
  const { addToCart } = useCart();
  const { products } = useProducts();
  const { t } = useTranslation();

  const handleAddToCart = (nut: Nut) => {
    addToCart(nut);
    toast.success(t('product.addedToCart', { name: nut.name }));
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
              <span className="text-secondary font-bold text-lg">{t('sale.specialOffer')}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-foreground mb-4">
              {t('sale.title')}
            </h1>
            <p className="text-lg sm:text-xl text-accent-foreground/90 mb-6 max-w-2xl">
              {t('sale.subtitle')}
            </p>
            <div className="flex items-center space-x-2 text-accent-foreground/80">
              <Clock className="w-5 h-5" />
              <span>{t('sale.endsIn')}</span>
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
            <p className="text-card-foreground/70">{t('sale.maxDiscount')}</p>
          </div>
          <div className="bg-card rounded-lg p-6 text-center border border-secondary/20">
            <Tag className="w-12 h-12 text-accent mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-accent mb-2">{saleProducts.length}</h3>
            <p className="text-card-foreground/70">{t('sale.productsOnSale')}</p>
          </div>
          <div className="bg-card rounded-lg p-6 text-center border border-secondary/20">
            <Clock className="w-12 h-12 text-accent mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-accent mb-2">{t('sale.days')}</h3>
            <p className="text-card-foreground/70">{t('sale.timeRemaining')}</p>
          </div>
        </div>

        {/* Sale Products */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#2C2C18' }}>
          {t('sale.discountedProducts')}
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
              {t('sale.noProducts')}
            </p>
          </div>
        )}

        {/* Terms Section */}
        <div className="mt-12 bg-card rounded-lg p-6 sm:p-8 border border-secondary/20">
          <h3 className="text-xl font-bold text-card-foreground mb-4">{t('sale.termsTitle')}</h3>
          <ul className="space-y-2 text-card-foreground/70">
            <li>• {t('sale.term1')}</li>
            <li>• {t('sale.term2')}</li>
            <li>• {t('sale.term3')}</li>
            <li>• {t('sale.term4')}</li>
            <li>• {t('sale.term5')}</li>
          </ul>
        </div>
      </div>

      <NutsFooter />
    </div>
  );
}
