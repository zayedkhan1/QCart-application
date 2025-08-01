import React from 'react';
import { products } from '../../assets/JSdata/productData';
import { assets } from '../../assets/JSdata/assets';
import PreFooter from '../sharedpage/PreFooter';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Shop = () => {
  return (
    <div>
      <section className="w-full px-4 py-10 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-10 text-gray-700">
          All pr<span className="border-b-3 border-orange-600">oducts</span>
        </h2>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((prod, idx) => {
            const rating = prod.rating; // e.g. 4.5

            return (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm flex flex-col h-full"
              >
                <div className="relative flex justify-center items-center">
                  <div className="py-4">
                    <img
                      src={prod.imgSrc}
                      alt={prod.name}
                      className="h-[140px] transition-transform duration-300 hover:scale-110 object-contain"
                    />
                    <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-100 text-pink-500">
                      <img src={assets.heart_icon} alt="" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col flex-1 px-5 pb-3">
                  <h3 className="text-base text-gray-800 font-medium mb-1">{prod.name}</h3>
                  <p className="text-xs text-gray-500 mb-1 line-clamp-2 ">
                    {prod.description}...
                  </p>

                  {/* ⭐ Dynamic Rating with Half Star */}
                  <div className="flex items-center mb-1">
                    <span className=" text-sm font-medium text-gray-600">
                      {rating}
                    </span>
                    {[...Array(5)].map((_, starIndex) => {
                      const starValue = starIndex + 1;

                      if (rating >= starValue) {
                        return <FaStar key={starIndex} size={15} className="text-orange-600" />;
                      } else if (rating >= starValue - 0.5) {
                        return <FaStarHalfAlt key={starIndex} size={15} className="text-orange-600" />;
                      } else {
                        return <FaRegStar key={starIndex} size={15} className="text-orange-600" />;
                      }
                    })}
                   
                  </div>

                  <div className="flex-1"></div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-lg font-semibold text-gray-700">
                      {prod.price}
                    </span>
                    <button className="px-2 cursor-pointer text-xs py-1 border-1 border-gray-300 rounded-full text-gray-500 font-medium hover:bg-gray-100 transition">
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <PreFooter />
    </div>
  );
};

export default Shop;
