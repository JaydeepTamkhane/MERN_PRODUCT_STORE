import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../context/Store";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const { createProduct } = useProduct();
  const navigate = useNavigate(); // Hook for navigation

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, price, image };

    // Create the product using context
    await createProduct(product);

    // After product is created, navigate back to the Home page
    navigate("/"); // This will redirect to the Home page
  };

  // Handle closing the popup (navigating back to the Home page)
  const handleClose = () => {
    navigate("/"); // Navigate to Home when the popup is closed
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-lg w-96">
        <h2 className="mb-4 text-2xl font-bold text-center">Create a New Product</h2>
        
        {/* Form to Create Product */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Product Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Create Product
          </button>
        </form>

        {/* Close Button to Navigate Back to Home */}
        <button
          onClick={handleClose}
          className="w-full mt-4 text-center text-blue-500 hover:text-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CreateProduct;
