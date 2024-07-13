import React from "react";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white" 
    style={{ backgroundImage: 'url(/hero3.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative text-center p-8 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Restaurant</h1>
        <p className="text-lg md:text-2xl mb-6">Enjoy the Finest Dining Experience</p>
        <Link to="/menu_page">
          <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition duration-300">VIEW MENU</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
