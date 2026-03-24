import { useParams, Link } from "react-router";
import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { ArrowLeft, ShoppingCart, Package, Globe } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductsContext";
import { useTranslation } from "react-i18next";

export function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { products } = useProducts();
  const { t } = useTranslation();
  const product = products.find((n) => n.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <NutsHeader />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-black mb-4">
            {t('product.notFound')}
          </h1>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t('product.backToCatalog')}</span>
          </Link>
        </div>
      </div>
    );
  }

  const isOnSale = product.oldPrice && product.oldPrice > product.price;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(t('product.addedToCart', { name: product.name }));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NutsHeader />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 flex-1">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors mb-6 sm:mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{t('product.backToCatalog')}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-card rounded-lg overflow-hidden shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover aspect-square"
            />
          </div>

          <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 shadow-lg relative">
            {isOnSale && (
              <div className="absolute top-6 right-6 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg" style={{ backgroundColor: '#D98C2A' }}>
                {t('common.sale')}
              </div>
            )}

            <p className="text-lg text-card-foreground/60 mb-2">
              {product.category}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              {product.category} {product.type}
            </h1>

            <p className="text-sm text-accent/70 mb-4">{t('product.article', { article: product.article })}</p>

            {isOnSale ? (
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <p className="text-4xl sm:text-5xl font-bold" style={{ color: '#2C2C18' }}>
                    €{product.price.toFixed(2)}
                  </p>
                  <p className="text-2xl sm:text-3xl text-gray-400 line-through">
                    €{product.oldPrice!.toFixed(2)}
                  </p>
                </div>
                <p className="text-sm text-green-600 font-semibold">
                  {t('product.save', {
                    amount: (product.oldPrice! - product.price).toFixed(2),
                    percent: Math.round(((product.oldPrice! - product.price) / product.oldPrice!) * 100)
                  })}
                </p>
              </div>
            ) : (
              <p className="text-4xl sm:text-5xl font-bold text-accent mb-6">
                €{product.price.toFixed(2)}
              </p>
            )}

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-card-foreground">
                <Package className="w-5 h-5 text-accent" />
                <span>
                  <strong>{t('product.weight')}</strong> {product.weight}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-card-foreground">
                <Globe className="w-5 h-5 text-accent" />
                <span>
                  <strong>{t('product.origin')}</strong> {product.origin}
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-card-foreground mb-3">
                {t('product.description')}
              </h2>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-4 px-6 rounded-lg flex items-center justify-center space-x-3 text-lg font-semibold transition-colors shadow-md hover:shadow-lg"
            >
              <ShoppingCart className="w-6 h-6" />
              <span>{t('product.addToCart')}</span>
            </button>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#2C2C18' }}>
            {t('product.youMayAlsoLike')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((n) => n.id !== product.id && n.category === product.category)
              .slice(0, 4)
              .map((relatedProduct) => {
                const relatedIsOnSale = relatedProduct.oldPrice && relatedProduct.oldPrice > relatedProduct.price;

                return (
                  <Link
                    key={relatedProduct.id}
                    to={`/product/${relatedProduct.id}`}
                    className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 relative"
                  >
                    {relatedIsOnSale && (
                      <div className="absolute top-2 right-2 z-10 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg" style={{ backgroundColor: '#D98C2A' }}>
                        {t('common.sale')}
                      </div>
                    )}

                    <div className="aspect-square overflow-hidden bg-gray-100">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-card-foreground mb-2">
                        {relatedProduct.name}
                      </h3>
                      {relatedIsOnSale ? (
                        <div className="flex items-center gap-2">
                          <p className="text-xl font-bold" style={{ color: '#2C2C18' }}>
                            €{relatedProduct.price.toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-400 line-through">
                            €{relatedProduct.oldPrice!.toFixed(2)}
                          </p>
                        </div>
                      ) : (
                        <p className="text-xl font-bold text-accent">
                          €{relatedProduct.price.toFixed(2)}
                        </p>
                      )}
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>

      <NutsFooter />
    </div>
  );
}
