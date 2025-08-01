import React, { useState } from 'react';
import { RiMenu2Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");



    const handleSearch = () => {
        if (!isOpen) {
            setIsOpen(true); // First click: open the input
        } else {
            if (query.trim() !== "") {
                // 🔷 here you can replace console.log with your actual search logic
            }
        }
    };
    return (
        <div>
            <nav className=' w-full  top-0 left-0 z-50 shadow '>
                <div className='max-w-9xl mx-auto '>
                    <div className='flex items-center justify-around  h-16'>
                        <div>
                            <a href='/home'
                                className='flex-shrink-0 text-3xl font-bold text-gray-600'
                            >
                                <span className=' text-orange-600'>Q-</span>Cart

                            </a>
                        </div>
                        <div className=' hidden md:flex md:items-center text-gray-700  space-x-6'>
                            <a href="/home"
                                className="relative   transition-transform duration-300 transform hover:scale-105
                            before:absolute before:-bottom-1 before:left-0 before:h-1 before:w-0 before:bg-amber-600
                            before:transition-all before:duration-500 hover:before:w-full"
                            >Home</a>
                            <a href="/shop"
                                className="relative transition-transform duration-300 transform hover:scale-105
                                before:absolute before:-bottom-1 before:left-0 before:h-1 before:w-0 before:bg-amber-600
                                before:transition-all before:duration-500 hover:before:w-full"
                            >Shop</a>
                            <a href="#"
                                className="relative   transition-transform duration-300 transform hover:scale-105
                                        before:absolute before:-bottom-1 before:left-0 before:h-1 before:w-0 before:bg-amber-600
                                        before:transition-all before:duration-500 hover:before:w-full"
                            >About Us</a>
                            <a href="#"
                                className="relative   transition-transform duration-300 transform hover:scale-105
                                before:absolute before:-bottom-1 before:left-0 before:h-1 before:w-0 before:bg-amber-600
                                before:transition-all before:duration-500 hover:before:w-full"
                            >Contact</a>
                            <a href="/sideLayout"
                                className='border-1 rounded-full p-1 border-gray-400 text-xs '

                            >Seller Dashboard</a>
                        </div>
                        <div className='hidden  md:flex md:items-center md:justify-around space-x-6'>
                            <div>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="text"
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        placeholder="Search"
                                        className={`transition-all duration-300 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400
                                          ${isOpen ? "w-64 opacity-100" : "w-0 opacity-0 px-0"} `}
                                    />
                                    <button
                                        onClick={handleSearch}
                                        className="p-2 text-gray-600 hover:text-orange-600 transition-colors cursor-pointer"
                                        aria-label="Search"
                                    >
                                        <FiSearch size={20} />
                                    </button>
                                </div>
                            </div>

                            <div>
                                <button className="btn relative flex items-center gap- overflow-hidden px-3 py-1 border-2 rounded-full border-amber-600 text-black font-semibold transition-all duration-300
                                 hover:text-white hover:bg-amber-600 active:scale-95 active:shadow-inner cursor-pointer">Login</button>
                            </div>

                        </div>

                        {/* For mobile menu */}
                        <div className=' md:hidden flex flex-col items-end relative'>
                            <div className='flex items-center justify-center '>
                                <button onClick={() => { setOpen(!open) }} className='btn text-2xl '><RiMenu2Fill /></button>
                            </div>
                            {
                                open && (
                                    <div className='absolute top-full right-0 mt-2 flex flex-col bg-white shadow px-4 py-3 space-y-2 w-40 z-20'>
                                        <a href="#">home</a>
                                        <a href="#">menu</a>
                                        <a href="#">mobileApp</a>
                                        <a href="#">contact us</a>
                                        <div className='space-y-2 '>
                                            <div >
                                                <input className='w-full p-1 bg-gray-300 rounded-sm' type="text" placeholder='serach' />
                                            </div>
                                            <div>
                                                <p><FaShoppingCart /></p>
                                            </div>
                                            <div>
                                                <button>login</button>
                                            </div>
                                        </div>
                                    </div>

                                )}
                        </div>

                    </div>
                </div>
            </nav>


        </div>
    );
};

export default NavBar;