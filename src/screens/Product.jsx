import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  function singleProductPage(){
    navigate('single-product');
  }


  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white p-6">
      <div className="container mx-auto">
        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center items-center min-h-[50vh]">
            <span className="loading loading-spinner loading-lg text-blue-500"></span>
          </div>
        )}
        {/* Error Message */}
        {error && <h1 className="text-2xl text-red-500 text-center">There has been an error.</h1>}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {!loading && !error &&
            products.map((item) => (
              <div
                key={item.id}
                className="bg-white border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={item.thumbnail}
                  alt={item.title}
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-900 truncate">{item.title}</h2>
                  <p className="mt-2 text-gray-600 truncate">{item.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-semibold text-blue-500">${item.price}</span>
                    <button onClick={singleProductPage} className="btn btn-outline btn-primary">Show Details...</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
