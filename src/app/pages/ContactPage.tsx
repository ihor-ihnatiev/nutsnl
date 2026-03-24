import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export function ContactPage() {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success(t('contact.thankYou'));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NutsHeader />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex-1">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center text-black">
            {t('contact.title')}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-card-foreground mb-6">
                  {t('contact.getInTouch')}
                </h2>

                <div className="space-y-5">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">{t('contact.email')}</p>
                      <p className="text-gray-600">info@nutsnl.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">{t('contact.phone')}</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">{t('contact.address')}</p>
                      <p className="text-gray-600">
                        123 Nut Street, Organic Valley
                        <br />
                        CA 94102, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  {t('contact.businessHours')}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>{t('contact.monFri')}</p>
                  <p>{t('contact.sat')}</p>
                  <p>{t('contact.sun')}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-lg p-6 sm:p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-card-foreground mb-6">
                {t('contact.sendMessage')}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-card-foreground mb-2"
                  >
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-card-foreground"
                    placeholder={t('contact.yourName')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-card-foreground mb-2"
                  >
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-card-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-card-foreground mb-2"
                  >
                    {t('contact.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-card-foreground"
                    placeholder={t('contact.subjectPlaceholder')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-card-foreground mb-2"
                  >
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-card-foreground resize-none"
                    placeholder={t('contact.messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors shadow-md hover:shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>{t('contact.send')}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <NutsFooter />
    </div>
  );
}
