import React from 'react';
import Products from '../../components/product/Products';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-300 min-h-screen py-12">
      <div className="container mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4">Explore Our Products</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover the latest trends and top-rated products in our exclusive collection. Shop now and enjoy unique offers.
          </p>
        </header>
        <Products />
      </div>
    </div>
  );
};

export default Home;