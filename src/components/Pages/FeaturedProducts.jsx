import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { featuresData } from '../../assets/JSdata/productData';


const FeaturedProducts = () => {

  return (
    <div>
      <div className=" min-h-screen bg-gray-50 p-4 sm:p-8 lg:p-16 flex flex-col items-center">
        {/* Featured Products heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700">
            Feat<span className=' border-b-3 border-orange-400'>ured Pro</span>ducts
          </h2>
        </div>

        {/* Grid container for the cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {featuresData.map((product) => (
            // The main card container with hover effects
            <div
              key={product.id}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Image container with the black overlay hover effect */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  // A fallback image in case the uploaded one fails to load
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/600x400/CCCCCC/FFFFFF?text=Placeholder+Image";
                  }}
                />
                {/* The semi-transparent black overlay that appears on hover */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-40 transition-opacity duration-300"></div> */}

                {/* Text content overlay on the image */}
                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 drop-shadow-md">
                    {product.title}
                  </h3>
                  <p className="text-sm sm:text-base mb-4 drop-shadow-md">
                    {product.description}
                  </p>
                  {/* Buy now button */}
                  <button className=" cursor-pointer flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded shadow-lg hover:bg-orange-600 transition-colors duration-300">
                    <span>Buy now</span>
                    <FaExternalLinkAlt className=" text-xs" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default FeaturedProducts;