import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSinglePageQuery } from '../../redux/api/singlePage';

const SinglPage = () => {
  const { id } = useParams();
  const { data } = useGetSinglePageQuery(id);
  const product = data?.payload;

  return (
    <div className="w-full max-w-3xl mx-auto mt-16 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      {product ? (
        <div className="flex flex-col items-center gap-8">
          <p className="text-3xl font-bold text-blue-600 text-center mb-4">
            {product.product_name}
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <img
              className="w-full max-w-md rounded-lg shadow-md object-cover"
              src={product.product_images[1]}
              alt={product.product_name}
            />
            <div className="flex flex-col gap-4">
              <p className="text-gray-700">{product.description}</p>
              <strong className="text-xl font-semibold text-blue-600">
                ${product.sale_price}
              </strong>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export default SinglPage;