import { useState } from "react";
import { NutsHeader } from "../components/NutsHeader";
import { NutsFooter } from "../components/NutsFooter";
import { useProducts } from "../context/ProductsContext";
import { Plus, Edit2, Trash2, RotateCcw, Package, Upload, FileSpreadsheet, Download } from "lucide-react";
import { toast } from "sonner";

export function AdminPage() {
  const { products, addProduct, updateProduct, deleteProduct, resetProducts } = useProducts();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<number | null>(null);
  const [googleSheetsUrl, setGoogleSheetsUrl] = useState("");
  const [isImporting, setIsImporting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    type: "",
    price: "",
    oldPrice: "",
    image: "",
    description: "",
    weight: "",
    origin: "",
    article: "",
    calories: "",
    protein: "",
    fat: "",
    carbs: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error('Please select an image file');
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result as string }));
        toast.success('Image uploaded successfully!');
      };
      reader.onerror = () => {
        toast.error('Failed to upload image');
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      category: "",
      type: "",
      price: "",
      oldPrice: "",
      image: "",
      description: "",
      weight: "",
      origin: "",
      article: "",
      calories: "",
      protein: "",
      fat: "",
      carbs: ""
    });
    setEditingProduct(null);
    setIsFormOpen(false);
  };

  const handleEdit = (product: any) => {
    setFormData({
      name: product.name,
      category: product.category,
      type: product.type,
      price: product.price.toString(),
      oldPrice: product.oldPrice ? product.oldPrice.toString() : "",
      image: product.image,
      description: product.description,
      weight: product.weight,
      origin: product.origin,
      article: product.article,
      calories: product.nutritionalInfo.calories.toString(),
      protein: product.nutritionalInfo.protein,
      fat: product.nutritionalInfo.fat,
      carbs: product.nutritionalInfo.carbs
    });
    setEditingProduct(product.id);
    setIsFormOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const productData = {
      name: formData.name,
      category: formData.category,
      type: formData.type,
      price: parseFloat(formData.price),
      oldPrice: formData.oldPrice ? parseFloat(formData.oldPrice) : undefined,
      image: formData.image,
      description: formData.description,
      weight: formData.weight,
      origin: formData.origin,
      article: formData.article,
      nutritionalInfo: {
        calories: parseInt(formData.calories),
        protein: formData.protein,
        fat: formData.fat,
        carbs: formData.carbs
      }
    };

    if (editingProduct !== null) {
      updateProduct(editingProduct, productData);
      toast.success("Product updated successfully!");
    } else {
      addProduct(productData);
      toast.success("Product added successfully!");
    }
    
    resetForm();
  };

  const handleDelete = (id: number, name: string) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      deleteProduct(id);
      toast.success("Product deleted successfully!");
    }
  };

  const handleReset = () => {
    if (window.confirm("This will restore all products to their original state. Continue?")) {
      resetProducts();
      toast.success("Products reset to default!");
    }
  };

  const parseCSV = (csvText: string) => {
    const lines = csvText.trim().split('\n');
    if (lines.length < 2) {
      throw new Error('CSV file is empty or invalid');
    }

    const headers = lines[0].split(',').map(h => h.trim());
    const products = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim());
      if (values.length < headers.length) continue;

      const product = {
        name: values[0] || '',
        category: values[1] || '',
        type: values[2] || '',
        price: parseFloat(values[3]) || 0,
        oldPrice: values[4] ? parseFloat(values[4]) : undefined,
        image: values[5] || '',
        description: values[6] || '',
        weight: values[7] || '',
        origin: values[8] || '',
        article: values[9] || '',
        nutritionalInfo: {
          calories: parseInt(values[10]) || 0,
          protein: values[11] || '',
          fat: values[12] || '',
          carbs: values[13] || ''
        }
      };

      products.push(product);
    }

    return products;
  };

  const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.csv')) {
      toast.error('Please upload a CSV file');
      return;
    }

    setIsImporting(true);
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const csvText = event.target?.result as string;
        const importedProducts = parseCSV(csvText);

        if (importedProducts.length === 0) {
          toast.error('No valid products found in CSV file');
          return;
        }

        let successCount = 0;
        importedProducts.forEach(product => {
          try {
            addProduct(product);
            successCount++;
          } catch (error) {
            console.error('Error adding product:', error);
          }
        });

        toast.success(`Successfully imported ${successCount} product(s)!`);
        setIsImporting(false);
      } catch (error) {
        toast.error('Error parsing CSV file. Please check the format.');
        setIsImporting(false);
      }
    };

    reader.onerror = () => {
      toast.error('Error reading file');
      setIsImporting(false);
    };

    reader.readAsText(file);
    e.target.value = '';
  };

  const handleGoogleSheetsImport = async () => {
    if (!googleSheetsUrl.trim()) {
      toast.error('Please enter a Google Sheets URL');
      return;
    }

    setIsImporting(true);

    try {
      // Convert Google Sheets URL to CSV export URL
      let csvUrl = googleSheetsUrl;
      
      if (googleSheetsUrl.includes('/edit')) {
        csvUrl = googleSheetsUrl.replace('/edit#gid=', '/export?format=csv&gid=');
        csvUrl = csvUrl.replace('/edit?usp=sharing', '/export?format=csv');
        csvUrl = csvUrl.replace('/edit', '/export?format=csv');
      }

      const response = await fetch(csvUrl);
      
      if (!response.ok) {
        throw new Error('Failed to fetch Google Sheets data');
      }

      const csvText = await response.text();
      const importedProducts = parseCSV(csvText);

      if (importedProducts.length === 0) {
        toast.error('No valid products found in Google Sheets');
        return;
      }

      let successCount = 0;
      importedProducts.forEach(product => {
        try {
          addProduct(product);
          successCount++;
        } catch (error) {
          console.error('Error adding product:', error);
        }
      });

      toast.success(`Successfully imported ${successCount} product(s) from Google Sheets!`);
      setGoogleSheetsUrl('');
    } catch (error) {
      toast.error('Error importing from Google Sheets. Make sure the sheet is publicly accessible.');
    } finally {
      setIsImporting(false);
    }
  };

  const exportProducts = () => {
    if (products.length === 0) {
      toast.error('No products to export');
      return;
    }

    // Create CSV header
    const header = 'Name,Category,Type,Price,Old Price,Image URL,Description,Weight,Origin,Article,Calories,Protein,Fat,Carbs\n';
    
    // Create CSV rows
    const rows = products.map(product => {
      return [
        product.name,
        product.category,
        product.type,
        product.price.toString(),
        product.oldPrice ? product.oldPrice.toString() : '',
        product.image,
        product.description,
        product.weight,
        product.origin,
        product.article,
        product.nutritionalInfo.calories.toString(),
        product.nutritionalInfo.protein,
        product.nutritionalInfo.fat,
        product.nutritionalInfo.carbs
      ].join(',');
    }).join('\n');

    const csvContent = header + rows;
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `products_export_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    toast.success(`Exported ${products.length} products!`);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NutsHeader />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Admin Panel</h1>
            <p className="text-[#2C2C18]/70">Manage your products catalog</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2 bg-card border-2 border-accent/30 text-accent rounded-lg hover:bg-accent/10 transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              Reset to Default
            </button>
            <button
              onClick={() => {
                resetForm();
                setIsFormOpen(true);
              }}
              className="flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors font-semibold"
            >
              <Plus className="w-5 h-5" />
              Add Product
            </button>
          </div>
        </div>

        {/* Import from Google Sheets / CSV */}
        <div className="bg-card rounded-lg p-6 mb-8 border-2 border-accent/20">
          <div className="flex items-center gap-3 mb-6">
            <FileSpreadsheet className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-bold text-card-foreground">Import Products</h2>
          </div>

          <div className="space-y-6">
            {/* Download Template */}
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-card-foreground mb-1">📤 Export Current Products</h3>
                  <p className="text-sm text-card-foreground/60 mb-3">
                    Download all current products ({products.length}) as CSV file for editing or backup
                  </p>
                  <button
                    onClick={exportProducts}
                    disabled={products.length === 0}
                    className="flex items-center gap-2 px-4 py-2 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Download className="w-4 h-4" />
                    Export All Products
                  </button>
                </div>
              </div>
            </div>

            {/* Google Sheets Import */}
            <div className="border-t border-accent/20 pt-6">
              <h3 className="font-bold text-card-foreground mb-3">📊 Import from Google Sheets</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-semibold text-card-foreground mb-2">
                    Google Sheets URL
                  </label>
                  <input
                    type="text"
                    value={googleSheetsUrl}
                    onChange={(e) => setGoogleSheetsUrl(e.target.value)}
                    placeholder="https://docs.google.com/spreadsheets/d/..."
                    className="w-full px-4 py-3 bg-[#F5F1E8] border border-[#E5DCC8] rounded-lg text-[#2C2C18] focus:outline-none focus:border-accent"
                    disabled={isImporting}
                  />
                  <p className="text-xs text-card-foreground/50 mt-2">
                    ⚠️ Make sure your Google Sheet is set to "Anyone with the link can view"
                  </p>
                </div>
                <button
                  onClick={handleGoogleSheetsImport}
                  disabled={isImporting || !googleSheetsUrl.trim()}
                  className="flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isImporting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      Importing...
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5" />
                      Import from Google Sheets
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* CSV File Upload */}
            <div className="border-t border-accent/20 pt-6">
              <h3 className="font-bold text-card-foreground mb-3">📄 Upload CSV File</h3>
              <label className="relative cursor-pointer">
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleCSVUpload}
                  className="hidden"
                  disabled={isImporting}
                />
                <div className="flex items-center justify-center gap-3 px-6 py-4 bg-accent/10 border-2 border-dashed border-accent/30 rounded-lg hover:bg-accent/20 transition-colors">
                  <Upload className="w-6 h-6 text-accent" />
                  <div className="text-left">
                    <p className="font-semibold text-card-foreground">Click to upload CSV file</p>
                    <p className="text-xs text-card-foreground/50">or drag and drop</p>
                  </div>
                </div>
              </label>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-900 mb-2">📖 CSV Format Requirements:</h4>
              <ul className="text-sm text-blue-800 space-y-1 ml-4 list-disc">
                <li>Column order: Name, Category, Type, Price, Old Price, Image URL, Description, Weight, Origin, Article, Calories, Protein, Fat, Carbs</li>
                <li>Price and Old Price should be numbers (e.g., 12.99)</li>
                <li>Leave Old Price empty if no discount</li>
                <li>Image URL should be a valid URL or base64 image</li>
                <li>Calories should be a whole number</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Add/Edit Form */}
        {isFormOpen && (
          <div className="bg-card rounded-lg p-6 mb-8 border-2 border-accent/20">
            <h2 className="text-2xl font-bold text-card-foreground mb-6">
              {editingProduct ? "Edit Product" : "Add New Product"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Info message */}
                <div className="md:col-span-2 bg-accent/10 border border-accent/30 rounded-lg p-4">
                  <p className="text-sm text-card-foreground/80">
                    <span className="font-semibold">💡 Tip:</span> Product display name will be automatically formed as "<strong>Category + Type</strong>". 
                    For example: <strong>Pistachios</strong> + <strong>Kernel Iran</strong> = <strong>Pistachios Kernel Iran</strong>
                  </p>
                </div>

                {/* Basic Info */}
                <div>
                  <label className="block text-sm font-semibold text-card-foreground mb-2">
                    Product Name (for internal use) *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#F5F1E8] border border-[#E5DCC8] rounded-lg text-[#2C2C18] focus:outline-none focus:border-accent"
                    placeholder="Premium Almonds"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-card-foreground mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#F5F1E8] border border-[#E5DCC8] rounded-lg text-[#2C2C18] focus:outline-none focus:border-accent"
                  >
                    <option value="">Select Category</option>
                    <option value="Almonds">Almonds</option>
                    <option value="Walnuts">Walnuts</option>
                    <option value="Cashews">Cashews</option>
                    <option value="Pistachios">Pistachios</option>
                    <option value="Hazelnuts">Hazelnuts</option>
                    <option value="Peanuts">Peanuts</option>
                    <option value="Mixed Nuts">Mixed Nuts</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-card-foreground mb-2">
                    Type *
                  </label>
                  <input
                    type="text"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#F5F1E8] border border-[#E5DCC8] rounded-lg text-[#2C2C18] focus:outline-none focus:border-accent"
                    placeholder="Kernel Iran"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-card-foreground mb-2">
                    Price (€) *
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-3 bg-[#F5F1E8] border border-[#E5DCC8] rounded-lg text-[#2C2C18] focus:outline-none focus:border-accent"
                    placeholder="12.99"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-card-foreground mb-2">
                    Old Price (€) (for discount)
                  </label>
                  <input
                    type="number"
                    name="oldPrice"
                    value={formData.oldPrice}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-3 bg-[#F5F1E8] border border-[#E5DCC8] rounded-lg text-[#2C2C18] focus:outline-none focus:border-accent"
                    placeholder="15.99"
                  />
                  <p className="text-xs text-card-foreground/50 mt-1">Leave empty if no discount</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-card-foreground mb-2">
                    Article Number *
                  </label>
                  <input
                    type="text"
                    name="article"
                    value={formData.article}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#F5F1E8] border border-[#E5DCC8] rounded-lg text-[#2C2C18] focus:outline-none focus:border-accent"
                    placeholder="20001"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-card-foreground mb-2">
                    Weight *
                  </label>
                  <input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#F5F1E8] border border-[#E5DCC8] rounded-lg text-[#2C2C18] focus:outline-none focus:border-accent"
                    placeholder="500g"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-card-foreground mb-2">
                    Origin *
                  </label>
                  <input
                    type="text"
                    name="origin"
                    value={formData.origin}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#F5F1E8] border border-[#E5DCC8] rounded-lg text-[#2C2C18] focus:outline-none focus:border-accent"
                    placeholder="California, USA"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-card-foreground mb-2">
                    Image URL *
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      required
                      className="flex-1 px-4 py-3 bg-[#F5F1E8] border border-[#E5DCC8] rounded-lg text-[#2C2C18] focus:outline-none focus:border-accent"
                      placeholder="https://images.unsplash.com/... or upload an image"
                    />
                    <label className="relative cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <div className="flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors font-semibold whitespace-nowrap">
                        <Plus className="w-4 h-4" />
                        Upload Image
                      </div>
                    </label>
                  </div>
                  {formData.image && (
                    <div className="mt-3">
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="h-32 w-32 object-cover rounded-lg border-2 border-accent/20"
                      />
                    </div>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-card-foreground mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-[#F5F1E8] border border-[#E5DCC8] rounded-lg text-[#2C2C18] focus:outline-none focus:border-accent resize-none"
                    placeholder="High-quality California almonds, rich in vitamin E..."
                  />
                </div>

                {/* Nutritional Info */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-bold text-card-foreground mb-4">Nutritional Information (per 100g)</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-card-foreground mb-2">
                        Calories *
                      </label>
                      <input
                        type="number"
                        name="calories"
                        value={formData.calories}
                        onChange={handleInputChange}
                        required
                        min="0"
                        className="w-full px-4 py-3 bg-[#F5F1E8] border border-[#E5DCC8] rounded-lg text-[#2C2C18] focus:outline-none focus:border-accent"
                        placeholder="579"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-card-foreground mb-2">
                        Protein *
                      </label>
                      <input
                        type="text"
                        name="protein"
                        value={formData.protein}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#F5F1E8] border border-[#E5DCC8] rounded-lg text-[#2C2C18] focus:outline-none focus:border-accent"
                        placeholder="21g"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-card-foreground mb-2">
                        Fat *
                      </label>
                      <input
                        type="text"
                        name="fat"
                        value={formData.fat}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#F5F1E8] border border-[#E5DCC8] rounded-lg text-[#2C2C18] focus:outline-none focus:border-accent"
                        placeholder="50g"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-card-foreground mb-2">
                        Carbs *
                      </label>
                      <input
                        type="text"
                        name="carbs"
                        value={formData.carbs}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#F5F1E8] border border-[#E5DCC8] rounded-lg text-[#2C2C18] focus:outline-none focus:border-accent"
                        placeholder="22g"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 justify-end pt-4 border-t border-accent/20">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 bg-card border-2 border-accent/30 text-accent rounded-lg hover:bg-accent/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors font-semibold"
                >
                  {editingProduct ? "Update Product" : "Add Product"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Products List */}
        <div className="bg-card rounded-lg p-6 border-2 border-accent/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-card-foreground">Products ({products.length})</h2>
            <button
              onClick={exportProducts}
              className="flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const hasDiscount = product.oldPrice && product.oldPrice > product.price;
              return (
              <div key={product.id} className="bg-[#F5F1E8] rounded-lg overflow-hidden border-2 border-accent/10 hover:border-accent/30 transition-all">
                <div className="aspect-square overflow-hidden bg-gray-100 relative">
                  {hasDiscount && (
                    <div className="absolute top-2 right-2 bg-[#D98C2A] text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                      SALE
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <p className="text-xs text-[#2C2C18]/50 mb-1">{product.category}</p>
                      <h3 className="font-bold text-[#2C2C18] text-lg mb-1">{product.category} {product.type}</h3>
                      <p className="text-xs text-[#2C2C18]/40 mt-1">Article: {product.article}</p>
                    </div>
                    <div className="text-right">
                      {hasDiscount ? (
                        <>
                          <p className="text-xl font-bold text-accent">€{product.price.toFixed(2)}</p>
                          <p className="text-sm text-gray-400 line-through">€{product.oldPrice!.toFixed(2)}</p>
                        </>
                      ) : (
                        <p className="text-xl font-bold text-accent">€{product.price.toFixed(2)}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-[#2C2C18]/70 mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id, product.name)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              );
            })}
          </div>

          {products.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-card-foreground/30 mx-auto mb-4" />
              <p className="text-card-foreground/60 text-lg mb-2">No products yet</p>
              <p className="text-card-foreground/40 text-sm">Click "Add Product" to get started</p>
            </div>
          )}
        </div>

        {/* Info Banner */}
        <div className="mt-8 bg-accent/10 border-2 border-accent/30 rounded-lg p-6">
          <h3 className="font-bold text-accent text-lg mb-2">📝 Note:</h3>
          <p className="text-card-foreground/70 text-sm">
            Products are currently stored in your browser's local storage. They will persist on this device, but won't sync across devices or be backed up. For production use with database persistence, consider connecting to Supabase.
          </p>
        </div>
      </div>

      <NutsFooter />
    </div>
  );
}