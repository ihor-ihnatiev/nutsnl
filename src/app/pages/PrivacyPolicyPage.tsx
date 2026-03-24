import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { Shield, Lock, Eye, UserCheck, Database, AlertCircle } from "lucide-react";

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NutsHeader />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex-1">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/20 rounded-full mb-6">
            <Shield className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-foreground/60 mt-4">
            Last Updated: March 23, 2026
          </p>
        </div>

        {/* Quick Overview */}
        <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 mb-8 border border-secondary/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-6">
            Privacy at a Glance
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <Lock className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-bold text-card-foreground mb-1">Secure Data</h3>
                <p className="text-sm text-card-foreground/70">
                  We use industry-standard encryption to protect your information
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Eye className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-bold text-card-foreground mb-1">No Selling</h3>
                <p className="text-sm text-card-foreground/70">
                  We never sell your personal data to third parties
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <UserCheck className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-bold text-card-foreground mb-1">Your Control</h3>
                <p className="text-sm text-card-foreground/70">
                  You can request, modify, or delete your data anytime
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <section className="bg-card rounded-lg p-6 sm:p-8 border border-secondary/20">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">
              Introduction
            </h2>
            <div className="space-y-4 text-card-foreground/70">
              <p>
                Welcome to Nutsnl ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
              </p>
              <p>
                This privacy policy applies to information we collect when you use our website, mobile application, or interact with us through customer service, social media, or other channels.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="bg-card rounded-lg p-6 sm:p-8 border border-secondary/20">
            <div className="flex items-center space-x-3 mb-4">
              <Database className="w-8 h-8 text-accent" />
              <h2 className="text-2xl font-bold text-card-foreground">
                Information We Collect
              </h2>
            </div>
            
            <div className="space-y-6 text-card-foreground/70">
              <div>
                <h3 className="font-bold text-card-foreground mb-2 text-lg">
                  Personal Information You Provide
                </h3>
                <ul className="space-y-2 ml-4">
                  <li>• <strong className="text-card-foreground">Account Information:</strong> Name, email address, password</li>
                  <li>• <strong className="text-card-foreground">Contact Information:</strong> Shipping address, billing address, phone number</li>
                  <li>• <strong className="text-card-foreground">Payment Information:</strong> Credit card details (processed securely through our payment processor)</li>
                  <li>• <strong className="text-card-foreground">Communication Data:</strong> Emails, chat messages, customer service inquiries</li>
                  <li>• <strong className="text-card-foreground">Profile Information:</strong> Preferences, purchase history, saved items</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-card-foreground mb-2 text-lg">
                  Information Automatically Collected
                </h3>
                <ul className="space-y-2 ml-4">
                  <li>• <strong className="text-card-foreground">Device Information:</strong> IP address, browser type, operating system</li>
                  <li>• <strong className="text-card-foreground">Usage Data:</strong> Pages viewed, time spent on site, click patterns</li>
                  <li>• <strong className="text-card-foreground">Cookies:</strong> Small files stored on your device to enhance user experience</li>
                  <li>• <strong className="text-card-foreground">Location Data:</strong> General geographic location based on IP address</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-card rounded-lg p-6 sm:p-8 border border-secondary/20">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">
              How We Use Your Information
            </h2>
            
            <div className="space-y-3 text-card-foreground/70">
              <p>We use the information we collect to:</p>
              <ul className="space-y-2 ml-4">
                <li>• Process and fulfill your orders</li>
                <li>• Communicate with you about your orders, account, and customer service</li>
                <li>• Send you marketing emails (with your consent) about new products, sales, and promotions</li>
                <li>• Improve our website, products, and services</li>
                <li>• Prevent fraud and enhance security</li>
                <li>• Analyze usage patterns to optimize user experience</li>
                <li>• Comply with legal obligations</li>
                <li>• Resolve disputes and enforce our terms</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="bg-card rounded-lg p-6 sm:p-8 border border-secondary/20">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">
              How We Share Your Information
            </h2>
            
            <div className="space-y-4 text-card-foreground/70">
              <p>
                We do not sell your personal information to third parties. We may share your information with:
              </p>
              
              <div className="space-y-3 ml-4">
                <div>
                  <p className="font-bold text-card-foreground">Service Providers</p>
                  <p className="text-sm">Payment processors, shipping companies, email service providers who help us operate our business</p>
                </div>
                
                <div>
                  <p className="font-bold text-card-foreground">Legal Requirements</p>
                  <p className="text-sm">When required by law, court order, or to protect our rights and safety</p>
                </div>
                
                <div>
                  <p className="font-bold text-card-foreground">Business Transfers</p>
                  <p className="text-sm">In connection with a merger, acquisition, or sale of assets</p>
                </div>
                
                <div>
                  <p className="font-bold text-card-foreground">With Your Consent</p>
                  <p className="text-sm">When you explicitly agree to share your information</p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="bg-card rounded-lg p-6 sm:p-8 border border-secondary/20">
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-8 h-8 text-accent" />
              <h2 className="text-2xl font-bold text-card-foreground">
                Data Security
              </h2>
            </div>
            
            <div className="space-y-4 text-card-foreground/70">
              <p>
                We implement appropriate technical and organizational security measures to protect your personal data, including:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• SSL/TLS encryption for data transmission</li>
                <li>• Secure payment processing through PCI-DSS compliant providers</li>
                <li>• Regular security audits and vulnerability assessments</li>
                <li>• Access controls and authentication requirements</li>
                <li>• Employee training on data protection</li>
              </ul>
              <p className="text-sm">
                However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-card rounded-lg p-6 sm:p-8 border border-secondary/20">
            <div className="flex items-center space-x-3 mb-4">
              <UserCheck className="w-8 h-8 text-accent" />
              <h2 className="text-2xl font-bold text-card-foreground">
                Your Privacy Rights
              </h2>
            </div>
            
            <div className="space-y-3 text-card-foreground/70">
              <p>You have the right to:</p>
              <ul className="space-y-2 ml-4">
                <li>• <strong className="text-card-foreground">Access:</strong> Request a copy of your personal data</li>
                <li>• <strong className="text-card-foreground">Correction:</strong> Request correction of inaccurate data</li>
                <li>• <strong className="text-card-foreground">Deletion:</strong> Request deletion of your personal data</li>
                <li>• <strong className="text-card-foreground">Portability:</strong> Request transfer of your data to another service</li>
                <li>• <strong className="text-card-foreground">Opt-Out:</strong> Unsubscribe from marketing communications</li>
                <li>• <strong className="text-card-foreground">Object:</strong> Object to processing of your data</li>
                <li>• <strong className="text-card-foreground">Withdraw Consent:</strong> Withdraw previously given consent</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at privacy@nutsnl.com
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="bg-card rounded-lg p-6 sm:p-8 border border-secondary/20">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">
              Cookies and Tracking
            </h2>
            
            <div className="space-y-4 text-card-foreground/70">
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience. Cookies help us:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Remember your preferences and settings</li>
                <li>• Keep you signed in</li>
                <li>• Understand how you use our website</li>
                <li>• Show you relevant advertisements</li>
              </ul>
              <p>
                You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="bg-card rounded-lg p-6 sm:p-8 border border-secondary/20">
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle className="w-8 h-8 text-accent" />
              <h2 className="text-2xl font-bold text-card-foreground">
                Children's Privacy
              </h2>
            </div>
            
            <p className="text-card-foreground/70">
              Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          {/* International Transfers */}
          <section className="bg-card rounded-lg p-6 sm:p-8 border border-secondary/20">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">
              International Data Transfers
            </h2>
            
            <p className="text-card-foreground/70">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place to protect your data in compliance with this privacy policy.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="bg-card rounded-lg p-6 sm:p-8 border border-secondary/20">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">
              Changes to This Policy
            </h2>
            
            <p className="text-card-foreground/70">
              We may update this privacy policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-gradient-to-r from-accent to-accent/80 rounded-lg p-6 sm:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-accent-foreground mb-4">
              Questions About Privacy?
            </h2>
            <p className="text-accent-foreground/90 mb-6">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
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
