import React, { useEffect, useState } from 'react';
import { slides } from '../../assets/JSdata/assets';



const Header = () => {

      const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // ✅ NEW STATE

  
  useEffect(() => {
    if (isHovered) return; // ✅ STOP SLIDE IF HOVERED

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered]);
    return (
        <div>
   <div className="relative w-full max-w-7xl mx-auto overflow-hidden mt-8"
    onMouseEnter={() => setIsHovered(true)}   // ✅ PAUSE ON HOVER
      onMouseLeave={() => setIsHovered(false)}  // ✅ RESUME ON LEAV
   >
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 p-6 rounded-2xl min-w-full"
          >
            {/* Text Section */}
            <div className="flex flex-col space-y-3 sm:w-1/2">
              <p className="text-orange-600 font-semibold">{slide.subtitle}</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-snug">
                {slide.title}
              </h2>
              <div className="flex items-center space-x-4 mt-4">
                <button className="bg-orange-600 cursor-pointer text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700 transition">
                  Shop Now
                </button>
                <button className="flex items-center space-x-2 font-medium text-gray-700 hover:text-gray-900 cursor-pointer transition-all duration-300 hover:scale-105 ">
                  <span>Explore Deals</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="sm:w-1/2 flex justify-center mt-6 sm:mt-0">
              <img
                src={slide.img}
                alt="PS5"
                className="max-h-64 sm:max-h-80 object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
              current === index ? "bg-orange-600 w-3" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
        </div>
    );
};

export default Header;