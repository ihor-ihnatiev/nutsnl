import { Link } from "react-router";
import { Facebook, Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo-nuts-nl.svg";
import { useTranslation } from "react-i18next";

// TikTok Icon SVG component
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export function NutsFooter() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="Nuts.nl"
                className="h-10 object-contain"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {t('footer.brandDesc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  {t('footer.shop')}
                </Link>
              </li>
              <li>
                <Link
                  to="/sale"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  {t('footer.sale')}
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  {t('footer.blog')}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  {t('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-4">
              {t('footer.customerService')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/shipping"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  {t('footer.shippingInfo')}
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  {t('footer.returns')}
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  {t('footer.faq')}
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-4">
              {t('footer.stayConnected')}
            </h3>
            <div className="space-y-3 mb-4">
              <a
                href="mailto:info@nutsnl.com"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>info@nutsnl.com</span>
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 pt-6">
          <p className="text-center text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} {t('footer.allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}
