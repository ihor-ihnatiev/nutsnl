import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { SuccessToast } from '../components/SuccessToast';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    // Auto-close toast after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl mb-6 sm:mb-8 text-black text-center">Contact Us</h1>
        <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 text-gray-900">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm mb-2 text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2.5 sm:py-3 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-lg shadow-md p-5 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg mb-1">Email</h3>
                  <p className="text-sm sm:text-base text-gray-600">support@nutrishop.com</p>
                  <p className="text-sm sm:text-base text-gray-600">info@nutrishop.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-5 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg mb-1">Phone</h3>
                  <p className="text-sm sm:text-base text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm sm:text-base text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-5 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg mb-1">Address</h3>
                  <p className="text-sm sm:text-base text-gray-600">123 Health Street</p>
                  <p className="text-sm sm:text-base text-gray-600">Wellness City, WC 12345</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-5 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg mb-1">Business Hours</h3>
                  <p className="text-sm sm:text-base text-gray-600">Monday - Friday: 9AM - 6PM</p>
                  <p className="text-sm sm:text-base text-gray-600">Saturday: 10AM - 4PM</p>
                  <p className="text-sm sm:text-base text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SuccessToast 
          isOpen={showSuccess}
          onClose={() => setShowSuccess(false)}
          message="Thank you for your message! We will get back to you soon."
        />
      </div>
    </div>
  );
}