import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Save, ArrowLeft } from 'lucide-react';
import { SuccessToast } from '../components/SuccessToast';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  stock: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  description: string;
  imageUrl: string;
}

export function AddProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Vegetables',
    price: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
    stock: '',
    description: '',
    imageUrl: '',
  });

  const categories = ['Vegetables', 'Supplements', 'Nuts', 'Dairy', 'Seafood', 'Grains'];

  // Load product data if in edit mode
  useEffect(() => {
    if (isEditMode) {
      const storedProducts = localStorage.getItem('products');
      if (storedProducts) {
        const products: Product[] = JSON.parse(storedProducts);
        const product = products.find(p => p.id === parseInt(id));
        if (product) {
          setFormData({
            name: product.name,
            category: product.category,
            price: product.price.toString(),
            calories: product.calories.toString(),
            protein: product.protein.toString(),
            carbs: product.carbs.toString(),
            fat: product.fat.toString(),
            stock: product.stock.toString(),
            description: product.description || '',
            imageUrl: product.imageUrl || '',
          });
        }
      }
    }
  }, [id, isEditMode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const storedProducts = localStorage.getItem('products');
    let products: Product[] = storedProducts ? JSON.parse(storedProducts) : [];
    
    if (isEditMode) {
      // Update existing product
      products = products.map(p => 
        p.id === parseInt(id) 
          ? {
              ...p,
              name: formData.name,
              category: formData.category,
              price: parseFloat(formData.price),
              calories: parseInt(formData.calories),
              protein: parseFloat(formData.protein),
              carbs: parseFloat(formData.carbs),
              fat: parseFloat(formData.fat),
              stock: parseInt(formData.stock),
              description: formData.description,
              imageUrl: formData.imageUrl,
              status: getStatusFromStock(parseInt(formData.stock)),
            }
          : p
      );
    } else {
      // Add new product
      const newProduct: Product = {
        id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
        name: formData.name,
        category: formData.category,
        price: parseFloat(formData.price),
        calories: parseInt(formData.calories),
        protein: parseFloat(formData.protein),
        carbs: parseFloat(formData.carbs),
        fat: parseFloat(formData.fat),
        stock: parseInt(formData.stock),
        status: getStatusFromStock(parseInt(formData.stock)),
        description: formData.description,
        imageUrl: formData.imageUrl,
      };
      products.push(newProduct);
    }
    
    localStorage.setItem('products', JSON.stringify(products));
    setShowSuccess(true);
    
    // Auto-close toast after 2 seconds then navigate
    setTimeout(() => {
      setShowSuccess(false);
      navigate('/dashboard/product-list');
    }, 2000);
  };

  const getStatusFromStock = (stock: number): 'In Stock' | 'Low Stock' | 'Out of Stock' => {
    if (stock === 0) return 'Out of Stock';
    if (stock <= 10) return 'Low Stock';
    return 'In Stock';
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/dashboard/product-list')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 sm:mb-6"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Back to Product List</span>
        </button>

        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8">
          <h1 className="text-2xl sm:text-3xl mb-6 text-gray-900">
            {isEditMode ? 'Edit Product' : 'Add New Product'}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Product Name */}
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                  Product Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                  placeholder="e.g., Organic Broccoli"
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm mb-2 text-gray-700">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price */}
              <div>
                <label htmlFor="price" className="block text-sm mb-2 text-gray-700">
                  Price ($) *
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  step="0.01"
                  min="0"
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                  placeholder="0.00"
                />
              </div>

              {/* Calories */}
              <div>
                <label htmlFor="calories" className="block text-sm mb-2 text-gray-700">
                  Calories (kcal) *
                </label>
                <input
                  type="number"
                  id="calories"
                  name="calories"
                  value={formData.calories}
                  onChange={handleChange}
                  required
                  min="0"
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                  placeholder="0"
                />
              </div>

              {/* Protein */}
              <div>
                <label htmlFor="protein" className="block text-sm mb-2 text-gray-700">
                  Protein (g) *
                </label>
                <input
                  type="number"
                  id="protein"
                  name="protein"
                  value={formData.protein}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.1"
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                  placeholder="0.0"
                />
              </div>

              {/* Carbs */}
              <div>
                <label htmlFor="carbs" className="block text-sm mb-2 text-gray-700">
                  Carbs (g) *
                </label>
                <input
                  type="number"
                  id="carbs"
                  name="carbs"
                  value={formData.carbs}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.1"
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                  placeholder="0.0"
                />
              </div>

              {/* Fat */}
              <div>
                <label htmlFor="fat" className="block text-sm mb-2 text-gray-700">
                  Fat (g) *
                </label>
                <input
                  type="number"
                  id="fat"
                  name="fat"
                  value={formData.fat}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.1"
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                  placeholder="0.0"
                />
              </div>

              {/* Stock */}
              <div>
                <label htmlFor="stock" className="block text-sm mb-2 text-gray-700">
                  Stock *
                </label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                  min="0"
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                  placeholder="0"
                />
              </div>

              {/* Image URL */}
              <div className="md:col-span-2">
                <label htmlFor="imageUrl" className="block text-sm mb-2 text-gray-700">
                  Image URL *
                </label>
                <input
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm mb-2 text-gray-700">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                placeholder="Enter product description..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
              >
                <Save className="w-4 h-4 sm:w-5 sm:h-5" />
                {isEditMode ? 'Update Product' : 'Add Product'}
              </button>
              <button
                type="button"
                onClick={() => navigate('/dashboard/product-list')}
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors text-sm sm:text-base"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <SuccessToast 
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        message={isEditMode ? 'Product updated successfully!' : 'Product added successfully!'}
      />
    </div>
  );
}