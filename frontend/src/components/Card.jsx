import React, { useState } from "react";
import { useProduct } from "../context/Store";
import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const { deleteProduct } = useProduct(); // Use the deleteProduct function from context
  const navigate = useNavigate(); // For navigation
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  // Handle the delete functionality
  const confirmDelete = async () => {
    await deleteProduct(product._id); // Call deleteProduct function from context
    setShowPopup(false); // Close popup after deletion
  };

  // Handle navigation to the update page
  const handleUpdate = () => {
    navigate(`/update/${product._id}`); // Redirect to the update page with the product ID
  };

  return (
    <>
      {/* Card Layout */}
      <div className="flex flex-col p-4 bg-white rounded-lg shadow-md">
        {/* Image Section */}
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-48 mb-4 rounded-lg"
        />

        {/* Product Info */}
        <div className="flex-grow text-center">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="text-gray-600">Price: ₹{product.price}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-4 space-x-2">
          <button
            onClick={handleUpdate}
            className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Update
          </button>
          <button
            onClick={() => setShowPopup(true)}
            className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Confirmation Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Confirm Deletion
            </h3>
            <p className="text-sm text-gray-600">
              Are you sure you want to delete <span className="font-bold">{product.name}</span>?
              This action cannot be undone.
            </p>
            <div className="flex justify-end mt-6 space-x-3">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
