import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { Link, useLocation } from "react-router";
import { CheckCircle, Mail, Package, Heart, ShoppingBag, Truck } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ThankYouPage() {
  const location = useLocation();
  const { t } = useTranslation();
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
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 bg-green-100 rounded-full mb-6 animate-in zoom-in duration-500">
              <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4">{t('thankYou.title')}</h1>
            <p className="text-xl sm:text-2xl text-foreground/80 mb-2">{t('thankYou.orderPlaced', { name: customerName })}</p>
            <p className="text-lg text-foreground/60">{t('thankYou.appreciate')}</p>
          </div>

          <div className="bg-card rounded-lg p-6 sm:p-8 shadow-xl border-2 border-accent/20 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center md:text-left">
                <p className="text-sm text-card-foreground/60 mb-2">{t('thankYou.orderNumber')}</p>
                <p className="text-2xl font-bold text-accent">#{orderNumber}</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm text-card-foreground/60 mb-2">{t('thankYou.totalAmount')}</p>
                <p className="text-2xl font-bold text-card-foreground">€{totalAmount.toFixed(2)}</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm text-card-foreground/60 mb-2">{t('thankYou.emailConfirmation')}</p>
                <p className="text-lg font-semibold text-card-foreground truncate">{email}</p>
              </div>
            </div>

            <div className="border-t-2 border-secondary/20 pt-6 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-card-foreground text-lg mb-2">{t('thankYou.emailConfirmation')}</h3>
                  <p className="text-card-foreground/70">
                    {t('thankYou.emailSent', { email }).replace('<1>', '').replace('</1>', '')}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-card-foreground text-lg mb-2">{t('thankYou.whatsNext')}</h3>
                  <ul className="text-card-foreground/70 space-y-2">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>{t('thankYou.step1')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>{t('thankYou.step2')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>{t('thankYou.step3')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#D97706] to-[#B45309] rounded-lg p-6 sm:p-8 shadow-lg mb-8 text-white">
            <div className="flex items-center space-x-4 mb-4">
              <Package className="w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-1">{t('thankYou.estimatedDelivery')}</h3>
                <p className="text-lg">{t('thankYou.deliveryTime').replace('<1>', '').replace('</1>', '')}</p>
              </div>
            </div>
            <p className="text-white/90">{t('thankYou.trackOrder')}</p>
          </div>

          <div className="bg-card rounded-lg p-6 sm:p-8 shadow-md border border-secondary/20 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold text-card-foreground">{t('thankYou.whyCustomersLove')}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🌱</div>
                <h4 className="font-bold text-card-foreground mb-2">{t('thankYou.natural')}</h4>
                <p className="text-sm text-card-foreground/60">{t('thankYou.naturalDesc')}</p>
              </div>
              <div className="text-center p-6 border-b border-gray-200">
                <Truck className="w-12 h-12 text-accent mx-auto mb-3" />
                <h4 className="font-bold text-card-foreground mb-2">{t('thankYou.fastShipping')}</h4>
                <p className="text-sm text-card-foreground/60">{t('thankYou.fastShippingDesc')}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💯</div>
                <h4 className="font-bold text-card-foreground mb-2">{t('thankYou.qualityGuarantee')}</h4>
                <p className="text-sm text-card-foreground/60">{t('thankYou.qualityGuaranteeDesc')}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/shop"
              className="flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-4 rounded-lg font-bold text-lg transition-colors shadow-md"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>{t('thankYou.continueShopping')}</span>
            </Link>
            <Link
              to="/"
              className="flex items-center justify-center space-x-2 bg-card hover:bg-card/90 text-card-foreground border-2 border-accent px-6 py-4 rounded-lg font-bold text-lg transition-colors shadow-md"
            >
              <span>{t('thankYou.backToHome')}</span>
            </Link>
          </div>

          <div className="mt-12 text-center pb-8">
            <p className="text-card-foreground/70 mb-3">{t('thankYou.questionsAboutOrder')}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="text-accent hover:text-accent/80 font-semibold transition-colors underline">
                {t('thankYou.contactSupport')}
              </Link>
              <span className="hidden sm:block text-card-foreground/40">•</span>
              <a href="mailto:info@nutsnl.com" className="text-accent hover:text-accent/80 font-semibold transition-colors underline">
                info@nutsnl.com
              </a>
            </div>
          </div>

          <div className="text-center py-8 border-t-2 border-secondary/20">
            <p className="text-2xl font-bold text-foreground mb-2">{t('thankYou.thankYouMessage')}</p>
            <p className="text-lg text-foreground/70">{t('thankYou.enjoyNuts')}</p>
          </div>
        </div>
      </div>

      <NutsFooter />
    </div>
  );
}
