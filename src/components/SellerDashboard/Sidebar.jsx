import React from "react";
import { FiPlus, FiList, FiShoppingCart } from "react-icons/fi";
import Footer from "../sharedpage/Footer";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-15 left-0 h-full w-64 bg-gray-200 text-gray-600 z-40
        transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-[20px] md:translate-x-0'}
        pt-16  // This pushes content down below navbar
      `}>
        <nav className="p-4 h-full overflow-y-auto">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-300">
                <FiPlus className="mr-3" />
                Add Product
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-300">
                <FiList className="mr-3" />
                Product List
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-300">
                <FiShoppingCart className="mr-3" />
                Orders
              </a>
            </li>
          </ul>
        </nav>

      </aside>

    </>
  );
};

export default Sidebar;