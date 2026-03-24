import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { Shield, Lock, Eye, UserCheck, Database, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export function PrivacyPolicyPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NutsHeader />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex-1">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/20 rounded-full mb-6">
            <Shield className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">{t('privacy.title')}</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{t('privacy.subtitle')}</p>
          <p className="text-sm text-foreground/60 mt-4">{t('privacy.lastUpdated')}</p>
        </div>

        <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 mb-8 border border-secondary/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-6">{t('privacy.atAGlance')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <Lock className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-bold text-card-foreground mb-1">{t('privacy.secureData')}</h3>
                <p className="text-sm text-card-foreground/70">{t('privacy.secureDataDesc')}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Eye className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-bold text-card-foreground mb-1">{t('privacy.noSelling')}</h3>
                <p className="text-sm text-card-foreground/70">{t('privacy.noSellingDesc')}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <UserCheck className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-bold text-card-foreground mb-1">{t('privacy.yourControl')}</h3>
                <p className="text-sm text-card-foreground/70">{t('privacy.yourControlDesc')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <section className="bg-card rounded-lg p-6 sm:p-8 border border-secondary/20">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">{t('privacy.introduction')}</h2>
            <div className="space-y-4 text-card-foreground/70">
              <p>{t('privacy.introText1')}</p>
              <p>{t('privacy.introText2')}</p>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 sm:p-8 border border-secondary/20">
            <div className="flex items-center space-x-3 mb-4">
              <Database className="w-8 h-8 text-accent" />
              <h2 className="text-2xl font-bold text-card-foreground">{t('privacy.infoWeCollect')}</h2>
            </div>
            <div className="space-y-6 text-card-foreground/70">
              <div>
                <h3 className="font-bold text-card-foreground mb-2 text-lg">{t('privacy.personalInfo')}</h3>
                <ul className="space-y-2 ml-4">
                  <li>• <strong className="text-card-foreground">Account Information:</strong> Name, email address, password</li>
                  <li>• <strong className="text-card-foreground">Contact Information:</strong> Shipping address, billing address, phone number</li>
                  <li>• <strong className="text-card-foreground">Payment Information:</strong> Credit card details (processed securely through our payment processor)</li>
                  <li>• <strong className="text-card-foreground">Communication Data:</strong> Emails, chat messages, customer service inquiries</li>
                  <li>• <strong className="text-card-foreground">Profile Information:</strong> Preferences, purchase history, saved items</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-card-foreground mb-2 text-lg">{t('privacy.autoCollected')}</h3>
                <ul className="space-y-2 ml-4">
                  <li>• <strong className="text-card-foreground">Device Information:</strong> IP address, browser type, operating system</li>
                  <li>• <strong className="text-card-foreground">Usage Data:</strong> Pages viewed, time spent on site, click patterns</li>
                  <li>• <strong className="text-card-foreground">Cookies:</strong> Small files stored on your device to enhance user experience</li>
                  <li>• <strong className="text-card-foreground">Location Data:</strong> General geographic location based on IP address</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 sm:p-8 border border-secondary/20">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">{t('privacy.howWeUse')}</h2>
            <div className="space-y-3 text-card-foreground/70">
              <ul className="space-y-2 ml-4">
                <li>• Process and fulfill your orders</li>
                <li>• Communicate with you about your orders, account, and customer service</li>
                <li>• Send you marketing emails (with your consent)</li>
                <li>• Improve our website, products, and services</li>
                <li>• Prevent fraud and enhance security</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 sm:p-8 border border-secondary/20">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">{t('privacy.howWeShare')}</h2>
            <div className="space-y-4 text-card-foreground/70">
              <p>We do not sell your personal information to third parties.</p>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 sm:p-8 border border-secondary/20">
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-8 h-8 text-accent" />
              <h2 className="text-2xl font-bold text-card-foreground">{t('privacy.dataSecurity')}</h2>
            </div>
            <div className="space-y-4 text-card-foreground/70">
              <ul className="space-y-2 ml-4">
                <li>• SSL/TLS encryption for data transmission</li>
                <li>• Secure payment processing through PCI-DSS compliant providers</li>
                <li>• Regular security audits and vulnerability assessments</li>
                <li>• Access controls and authentication requirements</li>
              </ul>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 sm:p-8 border border-secondary/20">
            <div className="flex items-center space-x-3 mb-4">
              <UserCheck className="w-8 h-8 text-accent" />
              <h2 className="text-2xl font-bold text-card-foreground">{t('privacy.yourRights')}</h2>
            </div>
            <div className="space-y-3 text-card-foreground/70">
              <ul className="space-y-2 ml-4">
                <li>• <strong className="text-card-foreground">Access:</strong> Request a copy of your personal data</li>
                <li>• <strong className="text-card-foreground">Correction:</strong> Request correction of inaccurate data</li>
                <li>• <strong className="text-card-foreground">Deletion:</strong> Request deletion of your personal data</li>
                <li>• <strong className="text-card-foreground">Portability:</strong> Request transfer of your data</li>
                <li>• <strong className="text-card-foreground">Opt-Out:</strong> Unsubscribe from marketing communications</li>
              </ul>
              <p className="mt-4">To exercise these rights, contact us at privacy@nutsnl.com</p>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 sm:p-8 border border-secondary/20">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">{t('privacy.cookiesTracking')}</h2>
            <div className="space-y-4 text-card-foreground/70">
              <p>We use cookies and similar tracking technologies to enhance your browsing experience.</p>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 sm:p-8 border border-secondary/20">
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle className="w-8 h-8 text-accent" />
              <h2 className="text-2xl font-bold text-card-foreground">{t('privacy.childrensPrivacy')}</h2>
            </div>
            <p className="text-card-foreground/70">
              Our services are not directed to children under 13 years of age.
            </p>
          </section>

          <section className="bg-card rounded-lg p-6 sm:p-8 border border-secondary/20">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">{t('privacy.internationalTransfers')}</h2>
            <p className="text-card-foreground/70">
              Your information may be transferred to and processed in countries other than your country of residence.
            </p>
          </section>

          <section className="bg-card rounded-lg p-6 sm:p-8 border border-secondary/20">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">{t('privacy.changesToPolicy')}</h2>
            <p className="text-card-foreground/70">
              We may update this privacy policy from time to time.
            </p>
          </section>

          <section className="bg-gradient-to-r from-accent to-accent/80 rounded-lg p-6 sm:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-accent-foreground mb-4">{t('privacy.questionsAboutPrivacy')}</h2>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-accent-foreground">
              <p className="mb-2"><strong>Email:</strong> privacy@nutsnl.com</p>
              <p className="mb-2"><strong>Phone:</strong> 1-800-NUTS-NL (1-800-688-7665)</p>
              <p><strong>Address:</strong> Nutsnl Privacy Team, 123 Organic Lane, Fresh Valley, CA 90210</p>
            </div>
          </section>
        </div>
      </div>

      <NutsFooter />
    </div>
  );
}
