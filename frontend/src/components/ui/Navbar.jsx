import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md fixed w-full top-0 z-50">
      <div className="text-2xl font-bold text-green-600">NutriGenie</div>
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li className="hover:text-green-500 cursor-pointer">Home</li>
        <li className="hover:text-green-500 cursor-pointer">About Us</li>
        <li className="hover:text-green-500 cursor-pointer">Shop</li>
        <li className="hover:text-green-500 cursor-pointer">Login/Sign Up</li>
      </ul>
      <div className="md:hidden text-gray-700 cursor-pointer text-2xl">☰</div>
    </nav>
  );
};

export default Navbar;
