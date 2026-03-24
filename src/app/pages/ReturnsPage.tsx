import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { RotateCcw, CheckCircle, XCircle, Clock, Mail, Package } from "lucide-react";

export function ReturnsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NutsHeader />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex-1">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/20 rounded-full mb-6">
            <RotateCcw className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Returns & Refunds
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Your satisfaction is our priority. We offer a hassle-free 30-day return policy.
          </p>
        </div>

        {/* 30-Day Guarantee */}
        <div className="bg-gradient-to-r from-accent to-accent/80 rounded-lg p-6 sm:p-8 lg:p-10 mb-8 text-center">
          <CheckCircle className="w-16 h-16 text-accent-foreground mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-accent-foreground mb-4">
            30-Day Money-Back Guarantee
          </h2>
          <p className="text-accent-foreground/90 text-lg max-w-3xl mx-auto">
            Not completely satisfied with your purchase? Return it within 30 days for a full refund. No questions asked!
          </p>
        </div>

        {/* How to Return */}
        <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 mb-8 border border-secondary/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-6">
            How to Return an Item
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="text-center p-6 bg-background/50 rounded-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-secondary-foreground">
                1
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                Contact Us
              </h3>
              <p className="text-card-foreground/70 text-sm">
                Email us at returns@nutsnl.com with your order number and reason for return.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center p-6 bg-background/50 rounded-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-secondary-foreground">
                2
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                Pack the Item
              </h3>
              <p className="text-card-foreground/70 text-sm">
                Pack the item securely in its original packaging. Include all accessories and documentation.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center p-6 bg-background/50 rounded-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-secondary-foreground">
                3
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                Ship It Back
              </h3>
              <p className="text-card-foreground/70 text-sm">
                Ship to our return address. We'll provide a prepaid shipping label for defective items.
              </p>
            </div>
          </div>
        </div>

        {/* Return Policy Details */}
        <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 mb-8 border border-secondary/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-6">
            Return Policy Details
          </h2>
          
          <div className="space-y-6">
            {/* Eligible for Returns */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-card-foreground">
                  Eligible for Returns
                </h3>
              </div>
              <ul className="space-y-2 text-card-foreground/70 ml-9">
                <li>• Unopened packages in original condition</li>
                <li>• Damaged or defective products (even if opened)</li>
                <li>• Wrong item received</li>
                <li>• Products that don't match description</li>
                <li>• Returns initiated within 30 days of delivery</li>
              </ul>
            </div>

            {/* Not Eligible for Returns */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <XCircle className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-bold text-card-foreground">
                  Not Eligible for Returns
                </h3>
              </div>
              <ul className="space-y-2 text-card-foreground/70 ml-9">
                <li>• Opened packages (unless defective or damaged)</li>
                <li>• Products returned after 30 days</li>
                <li>• Sale or clearance items (marked as final sale)</li>
                <li>• Gift cards or promotional items</li>
                <li>• Products damaged due to misuse</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Refund Processing */}
        <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 mb-8 border border-secondary/20">
          <div className="flex items-center space-x-3 mb-6">
            <Clock className="w-8 h-8 text-accent" />
            <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground">
              Refund Processing
            </h2>
          </div>
          
          <div className="space-y-4 text-card-foreground/70">
            <p>
              <strong className="text-card-foreground">Processing Time:</strong> Once we receive your return, we'll inspect it within 2-3 business days.
            </p>
            <p>
              <strong className="text-card-foreground">Refund Method:</strong> Refunds will be issued to your original payment method.
            </p>
            <p>
              <strong className="text-card-foreground">Refund Timeline:</strong> Please allow 5-10 business days for the refund to appear in your account after approval.
            </p>
            <p>
              <strong className="text-card-foreground">Partial Refunds:</strong> In some cases (e.g., items not in original condition), a partial refund may be issued.
            </p>
            <p>
              <strong className="text-card-foreground">Notification:</strong> You'll receive an email confirmation once your refund has been processed.
            </p>
          </div>
        </div>

        {/* Exchanges */}
        <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 mb-8 border border-secondary/20">
          <div className="flex items-center space-x-3 mb-6">
            <Package className="w-8 h-8 text-accent" />
            <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground">
              Exchanges
            </h2>
          </div>
          
          <p className="text-card-foreground/70 mb-4">
            We currently don't offer direct exchanges. If you'd like a different product:
          </p>
          <ol className="space-y-2 text-card-foreground/70 list-decimal list-inside">
            <li>Return your original item following the return process above</li>
            <li>Place a new order for the item you want</li>
            <li>Once your return is processed, you'll receive a full refund</li>
          </ol>
          <p className="text-card-foreground/70 mt-4">
            This ensures you get the product you want as quickly as possible!
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 border border-secondary/20">
          <div className="flex items-center space-x-3 mb-6">
            <Mail className="w-8 h-8 text-accent" />
            <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground">
              Need Help?
            </h2>
          </div>
          
          <div className="space-y-4 text-card-foreground/70">
            <p>
              If you have any questions about our return policy, please don't hesitate to contact us:
            </p>
            <div className="bg-background/50 rounded-lg p-4">
              <p><strong className="text-card-foreground">Email:</strong> returns@nutsnl.com</p>
              <p><strong className="text-card-foreground">Phone:</strong> 1-800-NUTS-NL (1-800-688-7665)</p>
              <p><strong className="text-card-foreground">Hours:</strong> Monday - Friday, 9 AM - 6 PM EST</p>
            </div>
            <p className="text-sm">
              Our customer service team is here to help make your return process as smooth as possible.
            </p>
          </div>
        </div>
      </div>

      <NutsFooter />
    </div>
  );
}
