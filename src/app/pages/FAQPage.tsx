import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const categories = [
    { key: "All", label: t('faq.all') },
    { key: "Orders & Shipping", label: t('faq.ordersShipping') },
    { key: "Product Information", label: t('faq.productInfo') },
    { key: "Allergies & Nutrition", label: t('faq.allergiesNutrition') },
    { key: "Returns & Refunds", label: t('faq.returnsRefunds') },
    { key: "Payment & Pricing", label: t('faq.paymentPricing') },
    { key: "Account & Support", label: t('faq.accountSupport') },
  ];

  const faqs = [
    { category: "Orders & Shipping", question: t('faq.questions.shippingTime'), answer: t('faq.questions.shippingTimeAnswer') },
    { category: "Orders & Shipping", question: t('faq.questions.international'), answer: t('faq.questions.internationalAnswer') },
    { category: "Orders & Shipping", question: t('faq.questions.trackOrder'), answer: t('faq.questions.trackOrderAnswer') },
    { category: "Orders & Shipping", question: t('faq.questions.damagedPackage'), answer: t('faq.questions.damagedPackageAnswer') },
    { category: "Product Information", question: t('faq.questions.organic'), answer: t('faq.questions.organicAnswer') },
    { category: "Product Information", question: t('faq.questions.storage'), answer: t('faq.questions.storageAnswer') },
    { category: "Product Information", question: t('faq.questions.rawRoasted'), answer: t('faq.questions.rawRoastedAnswer') },
    { category: "Product Information", question: t('faq.questions.saltedUnsalted'), answer: t('faq.questions.saltedUnsaltedAnswer') },
    { category: "Product Information", question: t('faq.questions.shelfLife'), answer: t('faq.questions.shelfLifeAnswer') },
    { category: "Allergies & Nutrition", question: t('faq.questions.allergen'), answer: t('faq.questions.allergenAnswer') },
    { category: "Allergies & Nutrition", question: t('faq.questions.nutritional'), answer: t('faq.questions.nutritionalAnswer') },
    { category: "Allergies & Nutrition", question: t('faq.questions.glutenFree'), answer: t('faq.questions.glutenFreeAnswer') },
    { category: "Returns & Refunds", question: t('faq.questions.returnPolicy'), answer: t('faq.questions.returnPolicyAnswer') },
    { category: "Returns & Refunds", question: t('faq.questions.initiateReturn'), answer: t('faq.questions.initiateReturnAnswer') },
    { category: "Returns & Refunds", question: t('faq.questions.refundTime'), answer: t('faq.questions.refundTimeAnswer') },
    { category: "Payment & Pricing", question: t('faq.questions.paymentMethods'), answer: t('faq.questions.paymentMethodsAnswer') },
    { category: "Payment & Pricing", question: t('faq.questions.bulkDiscount'), answer: t('faq.questions.bulkDiscountAnswer') },
    { category: "Payment & Pricing", question: t('faq.questions.hiddenFees'), answer: t('faq.questions.hiddenFeesAnswer') },
    { category: "Account & Support", question: t('faq.questions.needAccount'), answer: t('faq.questions.needAccountAnswer') },
    { category: "Account & Support", question: t('faq.questions.contactService'), answer: t('faq.questions.contactServiceAnswer') },
  ];

  const filteredFAQs = selectedCategory === "All"
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory);

  const getCategoryLabel = (key: string) => {
    const cat = categories.find(c => c.key === key);
    return cat ? cat.label : key;
  };

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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            {t('faq.title')}
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category.key
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-card text-card-foreground hover:bg-card/80 border border-secondary/20"
                }`}
              >
                {category.label}
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
                    {getCategoryLabel(faq.category)}
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
            {t('faq.stillHaveQuestions')}
          </h2>
          <p className="text-accent-foreground/90 text-lg mb-6">
            {t('faq.supportTeamHelp')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:support@nutsnl.com"
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-bold hover:bg-secondary/90 transition-colors"
            >
              {t('faq.emailSupport')}
            </a>
            <a
              href="tel:1-800-688-7665"
              className="bg-white text-accent px-8 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors"
            >
              {t('faq.callUs')}
            </a>
          </div>
        </div>
      </div>

      <NutsFooter />
    </div>
  );
}
