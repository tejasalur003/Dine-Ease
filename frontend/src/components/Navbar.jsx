import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { navLinks } from '../staticData/navItems'; 

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const location = useLocation(); // To get the current route

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.firstName) {
      setFirstName(user.firstName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location = "/";
  };

  // Determine if the link is active based on the current route
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-br from-green-500 to-green-400 p-4 flex items-center justify-between shadow-lg relative">
      {/* Logo */}
      <Link to="/" className="text-3xl font-serif font-bold text-black">
        DINE-EASE
      </Link>
      
      {/* Menu items for larger screens */}
      <div className={`hidden md:flex md:items-center md:space-x-6 ${show ? "block" : "hidden"} md:block`}>
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className={`text-black text-xl hover:text-gray-100 transition duration-300 ${isActive(link.to) ? 'text-gray-200' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Conditional rendering based on login state */}
      {firstName ? (
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-2xl text-black">Hi, {firstName}!</span>
          <button
            onClick={handleLogout}
            className="bg-gray-300 text-black text-xl px-6 py-3 rounded-md hover:bg-green-700 hover:text-white transition duration-300"
          >
            LOGOUT
          </button>
        </div>
      ) : (
        <Link
          to="/login"
          className="hidden md:block bg-gray-300 text-black text-xl px-6 py-3 rounded-md hover:bg-green-700 hover:text-white transition duration-300"
        >
          LOGIN/SIGNUP
        </Link>
      )}

      {/* Hamburger menu for smaller screens */}
      <div
        className="md:hidden text-black cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <GiHamburgerMenu size={30} />
      </div>

      {/* Dropdown menu for smaller screens */}
      {show && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 mt-2 rounded-lg">
          <div className="flex flex-col items-center">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className={`text-black text-xl py-2 px-4 hover:bg-gray-100 w-full text-center ${isActive(link.to) ? 'border-b-2 border-black' : ''}`}
                onClick={() => setShow(false)}
              >
                {link.label}
              </Link>
            ))}
            {firstName ? (
              <button
                onClick={handleLogout}
                className="w-full text-black text-xl py-2 px-4 bg-gray-300 hover:bg-green-700 hover:text-white"
              >
                LOGOUT
              </button>
            ) : (
              <Link
                to="/login"
                className="w-full text-black text-xl py-2 px-4 bg-gray-300 hover:bg-green-700 hover:text-white"
                onClick={() => setShow(false)}
              >
                LOGIN/SIGNUP
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
