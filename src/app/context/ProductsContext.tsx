import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { nuts as initialNuts, Nut } from "../data/nuts";

const DEFAULT_CATEGORIES = [
  "Almonds", "Walnuts", "Cashews", "Pistachios", "Hazelnuts",
  "Peanuts", "Pecans", "Brazil Nuts", "Macadamia", "Mixed Nuts", "Other"
];

interface ProductsContextType {
  products: Nut[];
  addProduct: (product: Omit<Nut, "id">) => void;
  updateProduct: (id: number, product: Omit<Nut, "id">) => void;
  deleteProduct: (id: number) => void;
  resetProducts: () => void;
  categories: string[];
  addCategory: (category: string) => void;
  deleteCategory: (category: string) => void;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Nut[]>(() => {
    const saved = localStorage.getItem("nutsnl_products");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialNuts;
      }
    }
    return initialNuts;
  });

  const [categories, setCategories] = useState<string[]>(() => {
    const saved = localStorage.getItem("nutsnl_categories");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return DEFAULT_CATEGORIES;
      }
    }
    return DEFAULT_CATEGORIES;
  });

  useEffect(() => {
    localStorage.setItem("nutsnl_products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("nutsnl_categories", JSON.stringify(categories));
  }, [categories]);

  const addProduct = (product: Omit<Nut, "id">) => {
    const newId = Math.max(...products.map(p => p.id), 0) + 1;
    const newProduct = { ...product, id: newId };
    setProducts([...products, newProduct]);
  };

  const updateProduct = (id: number, product: Omit<Nut, "id">) => {
    setProducts(products.map(p => p.id === id ? { ...product, id } : p));
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const resetProducts = () => {
    setProducts(initialNuts);
    setCategories(DEFAULT_CATEGORIES);
    localStorage.removeItem("nutsnl_products");
    localStorage.removeItem("nutsnl_categories");
  };

  const addCategory = (category: string) => {
    const trimmed = category.trim();
    if (trimmed && !categories.includes(trimmed)) {
      setCategories([...categories, trimmed].sort());
    }
  };

  const deleteCategory = (category: string) => {
    setCategories(categories.filter(c => c !== category));
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, resetProducts, categories, addCategory, deleteCategory }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within ProductsProvider");
  }
  return context;
}