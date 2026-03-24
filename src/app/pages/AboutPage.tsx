import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { Heart, Leaf, Award } from "lucide-react";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NutsHeader />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center text-black">
            About Nutsnl
          </h1>

          <div className="bg-card rounded-lg p-6 sm:p-8 lg:p-10 shadow-lg mb-8">
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              Welcome to Nutsnl, your premier destination for the finest selection
              of premium nuts from around the world. Since our establishment, we've
              been committed to bringing you the highest quality nuts, carefully
              sourced from trusted farms and suppliers globally.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed">
              We believe that quality nuts are not just a snack – they're a lifestyle
              choice that promotes health, wellness, and sustainability. Every nut in
              our collection is handpicked, ensuring only the best reaches your table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-card rounded-lg p-6 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                Passion
              </h3>
              <p className="text-gray-600">
                We're passionate about providing the finest nuts with exceptional
                taste and nutritional value.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Leaf className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600">
                Our commitment to sustainable sourcing ensures a better future for
                our planet.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                Quality
              </h3>
              <p className="text-gray-600">
                Every nut is carefully selected and quality-checked to meet our high
                standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <NutsFooter />
    </div>
  );
}