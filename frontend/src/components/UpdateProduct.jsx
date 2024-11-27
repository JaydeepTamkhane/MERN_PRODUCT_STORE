import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProduct } from "../context/Store"; // Assuming you have this context

const UpdateProduct = () => {
  const { products, fetchProducts, updateProduct } = useProduct(); // Context to fetch and update products
  const { id } = useParams(); // Product ID from the URL
  const navigate = useNavigate(); // For navigation

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
  });

  const [originalProduct, setOriginalProduct] = useState(null); // To store the original product data
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch product data when the component mounts or when products change
  useEffect(() => {
    const fetchData = async () => {
      if (products.length === 0) {
        await fetchProducts(); // Fetch products if not already loaded
      }

      const product = products.find((prod) => prod._id === id);

      if (product) {
        setFormData({
          name: product.name || "",
          price: product.price || "",
          image: product.image || "",
        });
        setOriginalProduct(product);
      }

      setLoading(false); // Stop loading after data fetch
    };

    fetchData();
  }, [id, products, fetchProducts]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Use existing values if no new value is provided
    const updatedData = {
      name: formData.name || originalProduct.name,
      price: formData.price || originalProduct.price,
      image: formData.image || originalProduct.image,
    };

    try {
      await updateProduct(id, updatedData); // Update product in backend
      navigate("/"); // Redirect back to the product list
    } catch (error) {
      console.error("Failed to update product:", error);
      alert("Something went wrong while updating the product.");
    }
  };

  // Render component
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-center text-gray-500">Loading product data...</p>
      </div>
    );
  }

  if (!originalProduct) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-center text-red-500">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">
          Update Product
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>

          {/* Price Input */}
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Product Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter product price"
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>

          {/* Image URL Input */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Product Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter product image URL"
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
