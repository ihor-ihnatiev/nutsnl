import { Target, Users, Award, Zap } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl mb-6 sm:mb-8 text-gray-900 text-center">About NutriShop</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-6 sm:mb-8">
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            NutriShop is your trusted partner in achieving optimal health through nutrition. 
            Founded with a passion for wellness, we curate the finest selection of organic, 
            natural, and high-quality nutrition products to support your healthy lifestyle.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            We believe that proper nutrition is the foundation of a vibrant life. That's why 
            we carefully select every product in our store, ensuring it meets our strict 
            standards for quality, purity, and effectiveness.
          </p>
        </div>

        <h2 className="text-2xl sm:text-3xl mb-4 sm:mb-6 text-gray-900">Our Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-white rounded-lg shadow-md p-5 sm:p-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            </div>
            <h3 className="text-lg sm:text-xl mb-2 sm:mb-3">Quality First</h3>
            <p className="text-sm sm:text-base text-gray-600">
              We source only the highest quality products from trusted brands and suppliers.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-5 sm:p-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            </div>
            <h3 className="text-lg sm:text-xl mb-2 sm:mb-3">Customer Focus</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Your health goals are our priority. We're here to support your wellness journey.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-5 sm:p-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            </div>
            <h3 className="text-lg sm:text-xl mb-2 sm:mb-3">Excellence</h3>
            <p className="text-sm sm:text-base text-gray-600">
              We strive for excellence in everything we do, from product selection to service.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-5 sm:p-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            </div>
            <h3 className="text-lg sm:text-xl mb-2 sm:mb-3">Innovation</h3>
            <p className="text-sm sm:text-base text-gray-600">
              We stay ahead of nutrition trends to bring you the latest and most effective products.
            </p>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-6 sm:p-8 text-center">
          <h2 className="text-2xl sm:text-3xl mb-3 sm:mb-4 text-gray-900">Our Mission</h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            To empower individuals to live healthier, more vibrant lives by providing 
            access to premium nutrition products and expert guidance on their wellness journey.
          </p>
        </div>
      </div>
    </div>
  );
}