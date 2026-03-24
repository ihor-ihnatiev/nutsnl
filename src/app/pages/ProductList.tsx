import { useState, useEffect } from 'react';
import { Search, Filter, Edit, Trash2, Plus, Package } from 'lucide-react';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { ProductFormModal } from '../components/ProductFormModal';
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
  description?: string;
  imageUrl?: string;
}

// Initial default products
const defaultProducts: Product[] = [
  {
    id: 1,
    name: 'Organic Broccoli',
    category: 'Vegetables',
    price: 4.99,
    calories: 55,
    protein: 3.7,
    carbs: 11.2,
    fat: 0.6,
    stock: 45,
    status: 'In Stock',
    description: 'Fresh organic broccoli',
    imageUrl: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c',
  },
  {
    id: 2,
    name: 'Whey Protein Powder',
    category: 'Supplements',
    price: 49.99,
    calories: 120,
    protein: 24,
    carbs: 3,
    fat: 1.5,
    stock: 12,
    status: 'Low Stock',
    description: 'Premium whey protein powder',
    imageUrl: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f',
  },
  {
    id: 3,
    name: 'Organic Almonds',
    category: 'Nuts',
    price: 15.99,
    calories: 579,
    protein: 21.2,
    carbs: 21.7,
    fat: 49.9,
    stock: 28,
    status: 'In Stock',
    description: 'Raw organic almonds',
    imageUrl: 'https://images.unsplash.com/photo-1508747703725-719777637510',
  },
  {
    id: 4,
    name: 'Greek Yogurt Bowl',
    category: 'Dairy',
    price: 8.99,
    calories: 150,
    protein: 15,
    carbs: 8,
    fat: 5,
    stock: 0,
    status: 'Out of Stock',
    description: 'Creamy Greek yogurt',
    imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777',
  },
  {
    id: 5,
    name: 'Wild Salmon Fillet',
    category: 'Seafood',
    price: 24.99,
    calories: 206,
    protein: 22,
    carbs: 0,
    fat: 13,
    stock: 18,
    status: 'In Stock',
    description: 'Fresh wild-caught salmon',
    imageUrl: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927',
  },
  {
    id: 6,
    name: 'Quinoa Organic',
    category: 'Grains',
    price: 12.99,
    calories: 120,
    protein: 4.4,
    carbs: 21.3,
    fat: 1.9,
    stock: 35,
    status: 'In Stock',
    description: 'Organic quinoa grains',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c',
  },
  {
    id: 7,
    name: 'Organic Spinach',
    category: 'Vegetables',
    price: 3.99,
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fat: 0.4,
    stock: 8,
    status: 'Low Stock',
    description: 'Fresh organic spinach',
    imageUrl: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb',
  },
  {
    id: 8,
    name: 'Cashew Nuts',
    category: 'Nuts',
    price: 18.99,
    calories: 553,
    protein: 18.2,
    carbs: 30.2,
    fat: 43.8,
    stock: 22,
    status: 'In Stock',
    description: 'Roasted cashew nuts',
    imageUrl: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898',
  },
];

export function ProductList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [deleteDialog, setDeleteDialog] = useState<{ isOpen: boolean; productId: number | null; productName: string }>({
    isOpen: false,
    productId: null,
    productName: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Load products from localStorage or use defaults
  const [products, setProducts] = useState<Product[]>(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      return JSON.parse(storedProducts);
    }
    // Initialize localStorage with default products
    localStorage.setItem('products', JSON.stringify(defaultProducts));
    return defaultProducts;
  });

  // Update localStorage whenever products change
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const categories = ['All', 'Vegetables', 'Supplements', 'Nuts', 'Dairy', 'Seafood', 'Grains'];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const handleDelete = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const openDeleteDialog = (id: number, name: string) => {
    setDeleteDialog({ isOpen: true, productId: id, productName: name });
  };

  const confirmDelete = () => {
    if (deleteDialog.productId !== null) {
      handleDelete(deleteDialog.productId);
    }
  };

  const handleEditClick = (product: Product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleAddClick = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const getStatusFromStock = (stock: number): 'In Stock' | 'Low Stock' | 'Out of Stock' => {
    if (stock === 0) return 'Out of Stock';
    if (stock <= 10) return 'Low Stock';
    return 'In Stock';
  };

  const handleSaveProduct = (productData: Omit<Product, 'id' | 'status'> & { id?: number }) => {
    if (productData.id) {
      // Update existing product
      setProducts(products.map(p =>
        p.id === productData.id
          ? { ...productData as Product, status: getStatusFromStock(productData.stock) }
          : p
      ));
      setSuccessMessage('Product updated successfully!');
    } else {
      // Add new product
      const newProduct: Product = {
        ...productData,
        id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
        status: getStatusFromStock(productData.stock),
      } as Product;
      setProducts([...products, newProduct]);
      setSuccessMessage('Product added successfully!');
    }
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const getStatusBadge = (status: Product['status']) => {
    const statusConfig = {
      'In Stock': { bg: 'bg-green-100', text: 'text-green-800' },
      'Low Stock': { bg: 'bg-yellow-100', text: 'text-yellow-800' },
      'Out of Stock': { bg: 'bg-red-100', text: 'text-red-800' },
    };

    const config = statusConfig[status];

    return (
      <span className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs ${config.bg} ${config.text}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl mb-2 text-black">Product List</h1>
            <p className="text-sm sm:text-base text-gray-600">Manage your product inventory</p>
          </div>
          <button
            onClick={handleAddClick}
            className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
          >
            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
            Add Product
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Products</p>
            <p className="text-xl sm:text-2xl text-gray-900">{products.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">In Stock</p>
            <p className="text-xl sm:text-2xl text-green-600">
              {products.filter(p => p.status === 'In Stock').length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Low Stock</p>
            <p className="text-xl sm:text-2xl text-yellow-600">
              {products.filter(p => p.status === 'Low Stock').length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Out of Stock</p>
            <p className="text-xl sm:text-2xl text-red-600">
              {products.filter(p => p.status === 'Out of Stock').length}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search products by name or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="pl-9 sm:pl-10 pr-8 sm:pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white text-sm sm:text-base"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'All' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="hidden md:block bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider hidden md:table-cell">
                    Category
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Nutrition
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                    Stock
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center">
                      <Package className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">No products found</p>
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                        <div className="text-xs sm:text-sm text-gray-900">{product.name}</div>
                        <div className="text-xs text-gray-500 md:hidden">{product.category}</div>
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-600 hidden md:table-cell">
                        {product.category}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                        ${product.price.toFixed(2)}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs text-gray-600 hidden lg:table-cell">
                        <div>{product.calories} cal</div>
                        <div className="text-xs text-gray-500">
                          P: {product.protein}g | C: {product.carbs}g | F: {product.fat}g
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-600 hidden sm:table-cell">
                        {product.stock} units
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                        {getStatusBadge(product.status)}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEditClick(product)}
                            className="p-1.5 sm:p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                            title="Edit"
                          >
                            <Edit className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </button>
                          <button
                            onClick={() => openDeleteDialog(product.id, product.name)}
                            className="p-1.5 sm:p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards View (Alternative for very small screens) */}
        <div className="md:hidden mt-6 space-y-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-sm text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-500">{product.category}</p>
                </div>
                {getStatusBadge(product.status)}
              </div>
              <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                <div>
                  <span className="text-gray-500">Price:</span>
                  <span className="ml-1 text-gray-900">${product.price.toFixed(2)}</span>
                </div>
                <div>
                  <span className="text-gray-500">Stock:</span>
                  <span className="ml-1 text-gray-900">{product.stock} units</span>
                </div>
                <div>
                  <span className="text-gray-500">Calories:</span>
                  <span className="ml-1 text-gray-900">{product.calories} cal</span>
                </div>
                <div>
                  <span className="text-gray-500">Protein:</span>
                  <span className="ml-1 text-gray-900">{product.protein}g</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-3 border-t">
                <button
                  onClick={() => handleEditClick(product)}
                  className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-blue-600 bg-blue-50 rounded-lg text-xs"
                >
                  <Edit className="w-3.5 h-3.5" />
                  Edit
                </button>
                <button
                  onClick={() => openDeleteDialog(product.id, product.name)}
                  className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-red-600 bg-red-50 rounded-lg text-xs"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProductFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={editingProduct}
        onSave={handleSaveProduct}
      />
      <ConfirmDialog
        isOpen={deleteDialog.isOpen}
        onClose={() => setDeleteDialog({ isOpen: false, productId: null, productName: '' })}
        onConfirm={confirmDelete}
        title="Delete Product"
        message={`Are you sure you want to delete the product "${deleteDialog.productName}"?`}
      />
      <SuccessToast
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        message={successMessage}
      />
    </div>
  );
}