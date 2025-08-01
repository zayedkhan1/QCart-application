import React from 'react';
    import { FaPhone, FaEnvelope } from 'react-icons/fa';

const PreFooter = () => {
    return (
<div className='bg-gray-100'>
            <div className="max-w-7xl mx-auto place-items-center px-4 sm:px-6 lg:px-8 py-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Left Column - QuickCart Brand */}
    <div className=" text-center sm:text-left">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-600"><span className='text-orange-400'>Q-</span>Cart</h2>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    
    {/* Middle Column - Company Links */}
    <div className="w-[33%] mx-auto   text-center sm:text-left">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-4">Company</h3>
      <ul className=" ">
        {["Home", "About us", "Contact us", "Privacy policy"].map((item, i) => (
          <li key={i}>
            <a
              href="#"
              className="text-sm sm:text-base text-gray-600 hover:underline transition-colors duration-200 inline-block py-1"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
    
    {/* Right Column - Contact Information */}
    <div className=" w-[33%] mx-auto  text-center sm:text-left">
      <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-600">Get in touch</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-center sm:justify-start">
          <div className="mr-3 text-orange-600 flex-shrink-0">
            <FaPhone className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className="text-sm sm:text-base text-gray-600">+1-234-567</span>
        </div>
        <div className="flex items-center justify-center sm:justify-start">
          <div className="mr-3 text-orange-600 flex-shrink-0">
            <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className="text-sm sm:text-base text-gray-600">contact@greatstack.dev</span>
        </div>
      </div>
    </div>
  </div>
</div>


</div>           
       
    );
};

export default PreFooter;