import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { Package, Truck, Clock, MapPin, Gift } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ShippingInfoPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NutsHeader />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex-1">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/20 rounded-full mb-6">
            <Truck className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black">
            {t('shipping.title')}
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#2C2C18', opacity: 0.7 }}>
            {t('shipping.subtitle')}
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 mb-8 border border-secondary/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-6">
            {t('shipping.shippingOptions')}
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-card-foreground mb-2">{t('shipping.standardShipping')}</h3>
                <p className="text-card-foreground/70 mb-2">{t('shipping.standardDesc')}</p>
                <p className="text-secondary font-bold">{t('shipping.standardPrice')}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-card-foreground mb-2">{t('shipping.expressShipping')}</h3>
                <p className="text-card-foreground/70 mb-2">{t('shipping.expressDesc')}</p>
                <p className="text-secondary font-bold">€12.99</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-card-foreground mb-2">{t('shipping.nextDay')}</h3>
                <p className="text-card-foreground/70 mb-2">{t('shipping.nextDayDesc')}</p>
                <p className="text-secondary font-bold">€19.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 mb-8 border border-secondary/20">
          <div className="flex items-center space-x-3 mb-6">
            <MapPin className="w-8 h-8 text-accent" />
            <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground">{t('shipping.deliveryAreas')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-background/50 rounded-lg">
              <h3 className="font-bold text-card-foreground mb-2">{t('shipping.domestic')}</h3>
              <p className="text-card-foreground/70 text-sm">{t('shipping.domesticDesc')}</p>
            </div>
            <div className="p-4 bg-background/50 rounded-lg">
              <h3 className="font-bold text-card-foreground mb-2">{t('shipping.international')}</h3>
              <p className="text-card-foreground/70 text-sm">{t('shipping.internationalDesc')}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-accent to-accent/80 rounded-lg p-6 sm:p-8 lg:p-10 mb-8 text-center">
          <Gift className="w-16 h-16 text-accent-foreground mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-accent-foreground mb-4">{t('shipping.freeShipping')}</h2>
          <p className="text-accent-foreground/90 text-lg">{t('shipping.freeShippingDesc')}</p>
        </div>

        <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 mb-8 border border-secondary/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-6">{t('shipping.orderProcessing')}</h2>
          <div className="space-y-4 text-card-foreground/70">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
              <p><strong className="text-card-foreground">{t('shipping.processingTime')}</strong> {t('shipping.processingTimeDesc')}</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
              <p><strong className="text-card-foreground">{t('shipping.orderConfirmation')}</strong> {t('shipping.orderConfirmationDesc')}</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
              <p><strong className="text-card-foreground">{t('shipping.trackingInfo')}</strong> {t('shipping.trackingInfoDesc')}</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
              <p><strong className="text-card-foreground">{t('shipping.weekendOrders')}</strong> {t('shipping.weekendOrdersDesc')}</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 border border-secondary/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-6">{t('shipping.importantNotes')}</h2>
          <div className="space-y-4 text-card-foreground/70">
            <p><strong className="text-card-foreground">{t('shipping.packaging')}</strong> {t('shipping.packagingDesc')}</p>
            <p><strong className="text-card-foreground">{t('shipping.tempControl')}</strong> {t('shipping.tempControlDesc')}</p>
            <p><strong className="text-card-foreground">{t('shipping.poBoxes')}</strong> {t('shipping.poBoxesDesc')}</p>
            <p><strong className="text-card-foreground">{t('shipping.holidays')}</strong> {t('shipping.holidaysDesc')}</p>
            <p><strong className="text-card-foreground">{t('shipping.contactUs')}</strong> {t('shipping.contactUsDesc')}</p>
          </div>
        </div>
      </div>

      <NutsFooter />
    </div>
  );
}
