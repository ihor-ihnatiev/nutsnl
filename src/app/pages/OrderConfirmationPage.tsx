import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { Link, useLocation } from "react-router";
import { CheckCircle, Mail, Package, Home } from "lucide-react";
import { useTranslation } from "react-i18next";

export function OrderConfirmationPage() {
  const location = useLocation();
  const { t } = useTranslation();
  const { orderNumber, email } = location.state || {
    orderNumber: "N/A",
    email: "your email"
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NutsHeader />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex-1">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 sm:w-14 sm:h-14 text-green-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              {t('thankYou.title')}
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70">
              {t('thankYou.appreciate')}
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 sm:p-8 shadow-lg border border-secondary/20 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm text-card-foreground/60 mb-1">{t('thankYou.orderNumber')}</p>
                <p className="text-xl font-bold text-accent">#{orderNumber}</p>
              </div>
              <div>
                <p className="text-sm text-card-foreground/60 mb-1">{t('thankYou.emailConfirmation')}</p>
                <p className="text-lg font-semibold text-card-foreground break-all">{email}</p>
              </div>
            </div>

            <div className="border-t border-secondary/20 pt-6">
              <div className="flex items-start space-x-4 mb-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-card-foreground mb-2">{t('thankYou.emailConfirmation')}</h3>
                  <p className="text-card-foreground/70 text-sm">
                    {t('thankYou.emailSent', { email }).replace('<1>', '').replace('</1>', '')}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Package className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-card-foreground mb-2">{t('thankYou.whatsNext')}</h3>
                  <ul className="text-card-foreground/70 text-sm space-y-1">
                    <li>✓ {t('thankYou.step1')}</li>
                    <li>✓ {t('thankYou.step2')}</li>
                    <li>✓ {t('thankYou.step3')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#D97706] to-[#B45309] rounded-lg p-6 sm:p-8 shadow-lg mb-6 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">{t('thankYou.estimatedDelivery')}</h3>
            <p className="text-lg mb-2">{t('thankYou.deliveryTime').replace('<1>', '').replace('</1>', '')}</p>
            <p className="text-white/80 text-sm">{t('thankYou.trackOrder')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/shop"
              className="flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              <span>{t('thankYou.continueShopping')}</span>
            </Link>
            <Link
              to="/"
              className="flex items-center justify-center space-x-2 bg-card hover:bg-card/90 text-card-foreground border-2 border-secondary/20 px-6 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>{t('thankYou.backToHome')}</span>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <p className="text-card-foreground/60 mb-2">{t('thankYou.questionsAboutOrder')}</p>
            <Link to="/contact" className="text-accent hover:text-accent/80 font-semibold transition-colors">
              {t('thankYou.contactSupport')}
            </Link>
          </div>
        </div>
      </div>

      <NutsFooter />
    </div>
  );
}
