import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

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
  description?: string;
  imageUrl?: string;
}

interface ProductFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Omit<Product, 'id' | 'status'> & { id?: number }) => void;
  product?: Product | null;
}

export function ProductFormModal({ isOpen, onClose, onSave, product }: ProductFormModalProps) {
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

  // Update form when product changes (edit mode)
  useEffect(() => {
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
    } else {
      // Reset form for add mode
      setFormData({
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
    }
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const productData = {
      ...(product?.id && { id: product.id }),
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
    };

    onSave(productData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl my-8">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl text-gray-900">
              {product ? 'Edit Product' : 'Add New Product'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Product Name */}
              <div className="sm:col-span-2">
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
                  Price (€) *
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
              <div className="sm:col-span-2">
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

              {/* Description */}
              <div className="sm:col-span-2">
                <label htmlFor="description" className="block text-sm mb-2 text-gray-700">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                  placeholder="Enter product description..."
                />
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    {product ? "Update" : "Add"}
                  </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}