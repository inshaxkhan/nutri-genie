import React, { useState } from "react";

const Navbar = () => {
  const [login, setLogin]=useState(true);
  return (
    <nav className="flex justify-between items-center px-16 py-4 bg-white shadow-md fixed w-full top-0 z-50">
      <div className="text-2xl font-bold text-green-600">NutriGenie</div>
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li className="hover:text-green-500 cursor-pointer">Home</li>
        <li className="hover:text-green-500 cursor-pointer">About Us</li>
        <li className="hover:text-green-500 cursor-pointer">Shop</li>
        <li className="hover:text-green-500 cursor-pointer">Profile</li>

        {
          login ?
          <div className="bg-green-500 text-white rounded-3xl px-5 py-1 hover:bg-transparent hover:text-teal-900 cursor-pointer"> <li>Login</li> </div> :
          <div className="h-7 w-7 bg-gray-400 rounded-full"></div>
        }
        
      </ul>
      <div className="md:hidden text-gray-700 cursor-pointer text-2xl">☰</div>
    </nav>
  );
};

export default Navbar;
