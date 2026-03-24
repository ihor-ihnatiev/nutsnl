import { Link } from 'react-router';
import { Apple, Heart, Leaf, Star } from 'lucide-react';

export function Home() {
  const featuredProducts = [
    {
      name: 'Whey Protein Powder',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwcG93ZGVyJTIwc3VwcGxlbWVudHxlbnwxfHx8fDE3NzQwMDg1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Organic Almonds',
      price: 15.99,
      image: 'https://images.unsplash.com/photo-1772986800094-376489769860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbG1vbmRzJTIwbnV0cyUyMGhlYWx0aHl8ZW58MXx8fHwxNzc0MDYzNjk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Wild Salmon Fillet',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1614627293113-e7e68163d958?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBmaXNoJTIwaGVhbHRoeXxlbnwxfHx8fDE3NzM5Nzg1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Fresh Avocado',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1677555024309-19edb4a1d40e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwaGVhbHRoeSUyMGZvb2R8ZW58MXx8fHwxNzczOTc4NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fitness Enthusiast',
      comment: 'NutriShop has transformed my nutrition journey. The quality of their products is unmatched!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Professional Athlete',
      comment: 'I trust NutriShop for all my nutrition needs. Fast delivery and excellent customer service.',
      rating: 5,
    },
    {
      name: 'Emma Williams',
      role: 'Yoga Instructor',
      comment: 'The organic selection is incredible. Finally found a store that cares about quality.',
      rating: 5,
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 text-gray-900">Welcome to NutriShop</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Your one-stop destination for premium nutrition products. 
            Fuel your body with the best quality supplements and healthy foods.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link
              to="/products"
              className="inline-block bg-green-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 text-green-600">500+</div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">Premium Products</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 text-green-600">50K+</div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 text-green-600">100%</div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">Organic Certified</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 text-green-600">4.9★</div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl text-center mb-8 sm:mb-12 text-gray-900">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={product.image} alt={product.name} className="w-full h-40 sm:h-48 object-cover" />
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg mb-2">{product.name}</h3>
                  <p className="text-xl sm:text-2xl text-green-600">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Link
              to="/products"
              className="inline-block bg-green-600 text-white px-5 sm:px-6 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl text-center mb-8 sm:mb-12 text-gray-900">Why Choose NutriShop?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <h3 className="text-base sm:text-lg mb-2">Organic Products</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                100% natural and organic ingredients for optimal health
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Apple className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <h3 className="text-base sm:text-lg mb-2">Fresh & Healthy</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Freshly sourced products delivered to your door
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <h3 className="text-base sm:text-lg mb-2">Premium Quality</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Top-rated brands and products you can trust
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <h3 className="text-base sm:text-lg mb-2">Health First</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Nutrition-focused products for a healthier lifestyle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl text-center mb-8 sm:mb-12 text-gray-900">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-5 sm:p-6">
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="text-sm sm:text-base text-gray-900">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl mb-3 sm:mb-4 text-gray-900">Stay Updated</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6">
            Subscribe to our newsletter for exclusive deals, nutrition tips, and new product launches.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl mb-3 sm:mb-4">Start Your Health Journey Today</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
            Browse our extensive collection of nutrition products
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-green-600 px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
          >
            View Products
          </Link>
        </div>
      </section>
    </div>
  );
}