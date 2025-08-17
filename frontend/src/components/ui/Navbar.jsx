import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [login, setLogin] = useState(true);

  return (
    <nav className="flex justify-between items-center px-16 py-4 bg-white shadow-md fixed w-full top-0 z-50">
      <NavLink to="/" className="text-2xl font-bold text-green-600">NutriGenie</NavLink>

      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "text-green-600 font-semibold" : "hover:text-green-500"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? "text-green-600 font-semibold" : "hover:text-green-500"
            }
          >
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/shop" 
            className={({ isActive }) => 
              isActive ? "text-green-600 font-semibold" : "hover:text-green-500"
            }
          >
            Shop
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/profile" 
            className={({ isActive }) => 
              isActive ? "text-green-600 font-semibold" : "hover:text-green-500"
            }
          >
            Profile
          </NavLink>
        </li>

        {login ? (
          <li>
            <NavLink
              to="/login"
              className="bg-green-500 text-white rounded-3xl px-5 py-1 hover:bg-transparent hover:text-teal-900 border border-green-500 transition"
            >
              Login
            </NavLink>
          </li>
        ) : (
          <li>
            <div className="h-7 w-7 bg-gray-400 rounded-full"></div>
          </li>
        )}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-gray-700 cursor-pointer text-2xl">☰</div>
    </nav>
  );
};

export default Navbar;
