import React from "react";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: 'url(/hero3.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 text-center px-6 py-12 md:px-12 md:py-16 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Welcome to Our Restaurant
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Indulge in an exquisite dining experience with our carefully curated menu.
        </p>
        <Link to="/menu_page">
          <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full shadow-md transition-transform transform hover:scale-105">
            View Menu
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
