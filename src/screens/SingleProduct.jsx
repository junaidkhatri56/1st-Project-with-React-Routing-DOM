import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="flex justify-center items-center min-h-screen text-xl font-semibold text-blue-600">Loading...</div>;
  if (error) return <div className="text-red-500 text-center text-2xl font-semibold">Error loading product data.</div>;

  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-200 py-10 min-h-screen flex items-center justify-center px-4">
      <div className="container max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {product && (
          <div className="grid md:grid-cols-2">
            {/* Image Section */}
            <div className="flex items-center justify-center p-6 bg-gray-50">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="rounded-lg border border-gray-200 shadow-md w-full h-96 object-cover"
              />
            </div>
            
            {/* Product Info Section */}
            <div className="p-6 space-y-4">
              <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
              <div className="text-2xl font-semibold text-blue-600">${product.price}</div>
              <ul className="mt-4 space-y-1 text-gray-600">
                <li><strong>Brand:</strong> {product.brand}</li>
                <li><strong>Category:</strong> {product.category}</li>
                <li><strong>Rating:</strong> {product.rating}</li>
                <li><strong>Stock:</strong> {product.stock}</li>
              </ul>
              <div className="flex gap-4 mt-6">
                <button className="btn btn-primary w-full">Add to Cart</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
