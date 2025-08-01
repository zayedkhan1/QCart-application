import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { assets } from '../../assets/JSdata/assets';

const Bonus = () => {
    return (
         <div className="font-sans bg-white flex flex-col items-center p-4 sm:p-8 min-h-screen text-gray-800">
      {/* This is the main card section for the gaming promotion.
        It's designed to be a prominent hero section for the page.
      */}
      <div className="relative w-full max-w-7xl bg-gray-100 rounded-xl  overflow-hidden  border-gray-200 mb-12  sm:mb-20">
        <div className="relative flex flex-col lg:flex-row items-center justify-between p-6 sm:p-10 lg:p-12">
          {/* Background shapes and images for visual appeal */}
          <div className="absolute inset-0 z-0 ">
            {/* The main gaming controller image on the right */}
            <img 
              src= {assets.md_controller_image}
              alt="Gaming Controller"
              className=" absolute right-0 top-1/2 -translate-y-1/2 w-1/3 max-w-xs opacity-60 lg:opacity-100 hidden sm:block"
            />
            {/* The speaker on the left side */}
            <img 
              src={assets.jbl_soundbox_image}
              alt="JBL Speaker"
              className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 max-w-xs opacity-60 lg:opacity-100 hidden sm:block"
            />
          </div>

          {/* Main content section for the gaming card */}
          <div className=" relative z-10 flex-1 text-center  py-12 lg:py-0">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Level Up Your <br /> Gaming Experience
            </h1>
            <p className="text-xs text-gray-600 mb-8  lg:mx-0">
              From immersive sound to precise controls— everything you need to win
            </p>
            {/* Button with responsive styling and hover effects */}
            <button className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white bg-orange-500 rounded shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-orange-600 cursor-pointer">
              <span>Buy now</span>
              <FaArrowRight className="ml-3" />
            </button>
          </div>

          {/* Placeholder for images on mobile to ensure clean layout */}
          <div className="relative z-10 hidden lg:block"></div>
          <div className="relative z-10 hidden lg:block"></div>
        </div>
      </div>

      {/* This is the newsletter subscription section below the main card.
      */}
      <div className="w-full max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
          Subscribe now & get 20% off
        </h2>
        <p className="text-base text-gray-600 mb-8 max-w-md mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        
        {/* Input form for the newsletter subscription */}
        <form className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Enter your email id"
            className="flex-1 w-full sm:w-auto px-6 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:border-orange-500 transition-colors"
          />
          {/* Subscribe button with hover effects */}
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 font-semibold text-white bg-orange-500 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-orange-600 cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
    );
};

export default Bonus;