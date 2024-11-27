import React, { createContext, useContext, useState } from 'react';

// Create Context for the product store
const ProductContext = createContext();

// Store Provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Fetch products from the backend
  const fetchProducts = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`);
      const data = await response.json();
      if (data.success) {
        setProducts(data.data);
      } else {
        console.error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Create a new product
  const createProduct = async (product) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      if (data.success) {
        setProducts((prevProducts) => [...prevProducts, data.data]);
      } else {
        console.error('Failed to create product');
      }
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  // Delete a product by ID
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data.success) {
        // Remove the deleted product from the local state
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
      } else {
        console.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Update a product by ID
  const updateProduct = async (id, updatedProduct) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });
      const data = await response.json();
      if (data.success) {
        // Update the product in the local state
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product._id === id ? { ...product, ...updatedProduct } : product
          )
        );
      } else {
        console.error('Failed to update product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, fetchProducts, createProduct, deleteProduct, updateProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the product context
export const useProduct = () => useContext(ProductContext);

// Exporting the context itself (if needed somewhere else)
export { ProductContext };
