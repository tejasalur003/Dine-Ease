import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="bg-gradient-to-br from-green-300 to-green-200 p-4 flex items-center justify-between shadow-lg">
      <div className="text-3xl font-serif font-bold text-black">FOOD-IN</div>
      
      <div className={`${show ? "block" : "hidden"} md:flex md:items-center space-x-6`}>
        <Link to="/" className="text-black text-xl hover:text-orange-500 transition duration-300">HOME</Link>
        <Link to="/menu_page" className="text-black text-xl hover:text-orange-500 transition duration-300">MENU</Link>
        <Link to="/about_page" className="text-black text-xl hover:text-orange-500 transition duration-300">ABOUT US</Link>
        <Link to="/team_page" className="text-black text-xl hover:text-orange-500 transition duration-300">TEAM</Link>
        <Link to="/reservation_page" className="text-black text-xl hover:text-orange-500 transition duration-300">RESERVATION</Link>
      </div>

      <Link
        to="/login"
        className="bg-black text-white text-xl px-6 py-3 rounded-md hidden md:block hover:bg-gray-800 transition duration-300"
      >
        LOGIN/SIGNUP
      </Link>

      <div className="md:hidden text-black cursor-pointer" onClick={() => setShow(!show)}>
        <GiHamburgerMenu size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
