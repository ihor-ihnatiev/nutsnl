import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Orders & Shipping",
    question: "How long does shipping take?",
    answer: "Standard shipping takes 5-7 business days, express shipping takes 2-3 business days, and next-day delivery is available for orders placed before 2 PM. Free standard shipping is available on orders over €50."
  },
  {
    category: "Orders & Shipping",
    question: "Do you ship internationally?",
    answer: "Yes! We currently ship to Canada, UK, and select European countries. International orders typically take 10-15 business days. Shipping costs vary by destination."
  },
  {
    category: "Orders & Shipping",
    question: "Can I track my order?",
    answer: "Absolutely! Once your order ships, you'll receive a tracking number via email. You can use this to monitor your package's journey to your doorstep."
  },
  {
    category: "Orders & Shipping",
    question: "What if my package is damaged during shipping?",
    answer: "If your package arrives damaged, please contact us immediately with photos. We'll send you a replacement at no charge or issue a full refund."
  },
  {
    category: "Product Information",
    question: "Are your nuts organic?",
    answer: "Yes! All our nuts are sourced from certified organic farms. We never use pesticides or chemicals. Each product page specifies the origin and certifications."
  },
  {
    category: "Product Information",
    question: "How should I store the nuts?",
    answer: "Store nuts in an airtight container in a cool, dry place. For extended freshness, you can refrigerate them for up to 6 months or freeze for up to a year."
  },
  {
    category: "Product Information",
    question: "Are the nuts raw or roasted?",
    answer: "We offer both! Each product is clearly labeled as either raw, roasted, or available in both options. Check the product description for specific details."
  },
  {
    category: "Product Information",
    question: "Do you offer salted or unsalted varieties?",
    answer: "Most of our nuts are available in both salted and unsalted varieties. The product description will specify which version you're ordering."
  },
  {
    category: "Product Information",
    question: "What is the shelf life of your nuts?",
    answer: "When properly stored, our nuts stay fresh for 3-6 months. We recommend checking the 'best by' date on the package and storing them in a cool, dry place."
  },
  {
    category: "Allergies & Nutrition",
    question: "Are there any allergen concerns?",
    answer: "Our facility processes tree nuts and peanuts. If you have severe allergies, please note that cross-contamination is possible. All products are clearly labeled with allergen information."
  },
  {
    category: "Allergies & Nutrition",
    question: "Do you provide nutritional information?",
    answer: "Yes! Each product page includes detailed nutritional information including calories, protein, fats, and carbohydrates per serving."
  },
  {
    category: "Allergies & Nutrition",
    question: "Are your products gluten-free?",
    answer: "All our pure nut products are naturally gluten-free. However, some flavored varieties may contain gluten. Please check individual product labels."
  },
  {
    category: "Returns & Refunds",
    question: "What is your return policy?",
    answer: "We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, you can return unopened packages for a full refund. Damaged or defective products can be returned even if opened."
  },
  {
    category: "Returns & Refunds",
    question: "How do I initiate a return?",
    answer: "Email us at returns@nutsnl.com with your order number and reason for return. We'll provide you with return instructions and, if applicable, a prepaid shipping label."
  },
  {
    category: "Returns & Refunds",
    question: "How long does it take to process a refund?",
    answer: "Once we receive your return, we'll inspect it within 2-3 business days. Approved refunds are processed within 5-10 business days back to your original payment method."
  },
  {
    category: "Payment & Pricing",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay."
  },
  {
    category: "Payment & Pricing",
    question: "Do you offer bulk discounts?",
    answer: "Yes! Contact our wholesale team at wholesale@nutsnl.com for bulk pricing on orders over 50 lbs. We offer special pricing for businesses and regular buyers."
  },
  {
    category: "Payment & Pricing",
    question: "Are there any hidden fees?",
    answer: "No hidden fees! The price you see at checkout is the final price. Shipping costs are clearly displayed before you complete your purchase."
  },
  {
    category: "Account & Support",
    question: "Do I need an account to place an order?",
    answer: "No, you can checkout as a guest. However, creating an account allows you to track orders, save addresses, and receive exclusive offers."
  },
  {
    category: "Account & Support",
    question: "How can I contact customer service?",
    answer: "You can reach us at support@nutsnl.com, call 1-800-NUTS-NL (1-800-688-7665), or use the contact form on our website. We're available Monday-Friday, 9 AM - 6 PM EST."
  }
];

const categories = [
  "All",
  "Orders & Shipping",
  "Product Information",
  "Allergies & Nutrition",
  "Returns & Refunds",
  "Payment & Pricing",
  "Account & Support"
];

export function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFAQs = selectedCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NutsHeader />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex-1">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/20 rounded-full mb-6">
            <HelpCircle className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Find answers to common questions about our products, shipping, and policies
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-card text-card-foreground hover:bg-card/80 border border-secondary/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-secondary/20 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-card/80 transition-colors"
              >
                <div className="flex-1 pr-4">
                  <span className="text-xs font-semibold text-secondary mb-1 block">
                    {faq.category}
                  </span>
                  <h3 className="text-lg font-bold text-card-foreground">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-accent flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 pt-2">
                  <p className="text-card-foreground/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-accent to-accent/80 rounded-lg p-6 sm:p-8 lg:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-accent-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-accent-foreground/90 text-lg mb-6">
            Our customer support team is here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:support@nutsnl.com"
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-bold hover:bg-secondary/90 transition-colors"
            >
              Email Support
            </a>
            <a
              href="tel:1-800-688-7665"
              className="bg-white text-accent px-8 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>

      <NutsFooter />
    </div>
  );
}