import React, { useContext, useEffect } from "react";
import Card from "./Card";
import { ProductContext } from "../context/Store"; // Import ProductContext to access global state

const Home = () => {
  // Get the global state from the context
  const { products, loading, error, fetchProducts } = useContext(ProductContext);

  // Fetch products if they haven't been fetched yet
  useEffect(() => {
    if (products.length === 0 && !loading) {  // Fetch only if products are not loaded and no ongoing fetch
      fetchProducts();
    }
  }, [fetchProducts, products.length, loading]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container p-4 mx-auto">
      {/* Product Cards Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${products.length === 1 ? "place-items-center" : ""}`}
      >
        {products.length > 0 ? (
          products.map((product) => (
            <Card key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full">No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
