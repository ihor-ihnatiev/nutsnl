import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { RotateCcw, CheckCircle, XCircle, Clock, Mail, Package } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ReturnsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NutsHeader />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex-1">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/20 rounded-full mb-6">
            <RotateCcw className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">{t('returns.title')}</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{t('returns.subtitle')}</p>
        </div>

        <div className="bg-gradient-to-r from-accent to-accent/80 rounded-lg p-6 sm:p-8 lg:p-10 mb-8 text-center">
          <CheckCircle className="w-16 h-16 text-accent-foreground mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-accent-foreground mb-4">{t('returns.guarantee')}</h2>
          <p className="text-accent-foreground/90 text-lg max-w-3xl mx-auto">{t('returns.guaranteeDesc')}</p>
        </div>

        <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 mb-8 border border-secondary/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-6">{t('returns.howToReturn')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-background/50 rounded-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-secondary-foreground">1</div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">{t('returns.step1Title')}</h3>
              <p className="text-card-foreground/70 text-sm">{t('returns.step1Desc')}</p>
            </div>
            <div className="text-center p-6 bg-background/50 rounded-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-secondary-foreground">2</div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">{t('returns.step2Title')}</h3>
              <p className="text-card-foreground/70 text-sm">{t('returns.step2Desc')}</p>
            </div>
            <div className="text-center p-6 bg-background/50 rounded-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-secondary-foreground">3</div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">{t('returns.step3Title')}</h3>
              <p className="text-card-foreground/70 text-sm">{t('returns.step3Desc')}</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 mb-8 border border-secondary/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-6">{t('returns.policyDetails')}</h2>
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-card-foreground">{t('returns.eligible')}</h3>
              </div>
              <ul className="space-y-2 text-card-foreground/70 ml-9">
                <li>• {t('returns.eligible1')}</li>
                <li>• {t('returns.eligible2')}</li>
                <li>• {t('returns.eligible3')}</li>
                <li>• {t('returns.eligible4')}</li>
                <li>• {t('returns.eligible5')}</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <XCircle className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-bold text-card-foreground">{t('returns.notEligible')}</h3>
              </div>
              <ul className="space-y-2 text-card-foreground/70 ml-9">
                <li>• {t('returns.notEligible1')}</li>
                <li>• {t('returns.notEligible2')}</li>
                <li>• {t('returns.notEligible3')}</li>
                <li>• {t('returns.notEligible4')}</li>
                <li>• {t('returns.notEligible5')}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 mb-8 border border-secondary/20">
          <div className="flex items-center space-x-3 mb-6">
            <Clock className="w-8 h-8 text-accent" />
            <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground">{t('returns.refundProcessing')}</h2>
          </div>
          <div className="space-y-4 text-card-foreground/70">
            <p><strong className="text-card-foreground">{t('returns.processingTime')}</strong> {t('returns.processingTimeDesc')}</p>
            <p><strong className="text-card-foreground">{t('returns.refundMethod')}</strong> {t('returns.refundMethodDesc')}</p>
            <p><strong className="text-card-foreground">{t('returns.refundTimeline')}</strong> {t('returns.refundTimelineDesc')}</p>
            <p><strong className="text-card-foreground">{t('returns.partialRefunds')}</strong> {t('returns.partialRefundsDesc')}</p>
            <p><strong className="text-card-foreground">{t('returns.notification')}</strong> {t('returns.notificationDesc')}</p>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 mb-8 border border-secondary/20">
          <div className="flex items-center space-x-3 mb-6">
            <Package className="w-8 h-8 text-accent" />
            <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground">{t('returns.exchanges')}</h2>
          </div>
          <p className="text-card-foreground/70 mb-4">{t('returns.exchangesDesc')}</p>
          <ol className="space-y-2 text-card-foreground/70 list-decimal list-inside">
            <li>{t('returns.exchange1')}</li>
            <li>{t('returns.exchange2')}</li>
            <li>{t('returns.exchange3')}</li>
          </ol>
          <p className="text-card-foreground/70 mt-4">{t('returns.exchangeNote')}</p>
        </div>

        <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 border border-secondary/20">
          <div className="flex items-center space-x-3 mb-6">
            <Mail className="w-8 h-8 text-accent" />
            <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground">{t('returns.needHelp')}</h2>
          </div>
          <div className="space-y-4 text-card-foreground/70">
            <p>{t('returns.needHelpDesc')}</p>
            <div className="bg-background/50 rounded-lg p-4">
              <p><strong className="text-card-foreground">Email:</strong> returns@nutsnl.com</p>
              <p><strong className="text-card-foreground">Phone:</strong> 1-800-NUTS-NL (1-800-688-7665)</p>
              <p><strong className="text-card-foreground">Hours:</strong> {t('returns.hours')}</p>
            </div>
            <p className="text-sm">{t('returns.serviceNote')}</p>
          </div>
        </div>
      </div>

      <NutsFooter />
    </div>
  );
}
