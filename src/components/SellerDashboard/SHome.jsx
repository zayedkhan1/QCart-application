import React from 'react';
import { FiUpload } from "react-icons/fi";

const SHome = () => {

  return (

    <div className=" rounded-lg  p-6">

      <div className="space-y-4 w-full md:w-6/12">
        {/* Product Image Section */}
        <div>
          <div className="">
            <h3 className="text-lg text-gray-600 font-medium mb-2">Product Images</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="relative">
                  <label
                    htmlFor={`file-upload-${item}`}
                    className="flex flex-col items-center justify-center h-20 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-orange-500 transition-colors"
                  >
                    <FiUpload className="text-gray-400 mb-2" />
                    <span className="text-sm text-gray-500">Upload Image</span>
                    <input
                      id={`file-upload-${item}`}
                      name={`image-${item}`}
                      type="file"
                      accept="image/*"
                      className="hidden"
                    // onChange={(e) => handleImageUpload(e, item)}
                    />
                  </label>
                  {/* Preview will appear here when image is selected */}
                  <div id={`preview-${item}`} className="absolute inset-0 hidden"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Name */}
        <div>
          <h3 className="text-lg text-gray-600 font-medium mb-1">Product Name</h3>
          <input
            type="text"
            placeholder="Type here"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Product Description */}
        <div>
          <h3 className="text-lg font-medium text-gray-600 mb-1">Product Description</h3>
          <textarea
            placeholder="Type here"
            rows="4"
            className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Category and Pricing */}
        <div>
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Product Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Category Select */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="Earphone"
                >
                  <option value="Earphone">Earphone</option>
                  <option value="Headphone">Headphone</option>
                  <option value="Speaker">Speaker</option>
                  <option value="Accessory">Accessory</option>
                </select>
              </div>

              {/* Product Price Input */}
              <div>
                <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700 mb-1">
                  Product Price ($)
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    id="productPrice"
                    className="block w-full pl-7 pr-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                    defaultValue="0"
                  />
                </div>
              </div>

              {/* Offer Price Input */}
              <div>
                <label htmlFor="offerPrice" className="block text-sm font-medium text-gray-700 mb-1">
                  Offer Price ($)
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    id="offerPrice"
                    className="block w-full pl-7 pr-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                    defaultValue="0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Button */}
        <div className="pt-4">
          <button className="bg-orange-500  text-white font-medium py-2 px-6 rounded-md focus:outline-none focus:ring-2  cursor-pointer">
            ADD
          </button>
        </div>
      </div>
    </div>

  );
};

export default SHome;