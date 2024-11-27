import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import CreateProduct from "./Components/CreateProduct";
import UpdateProduct from "./Components/UpdateProduct";
import { ProductProvider } from "./context/Store"; // Import ProductProvider

function App() {
  return (
    <ProductProvider> {/* Wrap your app in ProductProvider */}
      <Router>
        {/* Navigation Bar */}
        <nav className="p-4 text-white bg-gray-800">
          <div className="container flex items-center justify-between mx-auto">
            {/* Logo/Brand Name */}
            <Link to="/" className="text-2xl font-bold hover:text-gray-400">
              Product Store
            </Link>

            {/* Navigation Links */}
            <div className="space-x-4">
              <Link
                to="/create"
                className="transition duration-300 hover:text-gray-400"
              >
                Add Product
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
