import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="bg-gradient-to-br from-yellow-100 to-yellow-300 py-16 font-serif">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:justify-between">
        <div className="text-center md:text-left md:w-1/2 p-6 md:p-8">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              At DineEase, our passion is creating delicious and memorable dining experiences.
            </p>
          </div>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            Founded on the belief that food brings people together, we take pride in offering a menu that is both innovative and comforting. From farm-fresh ingredients to artisanal preparations, each dish is crafted with care to delight your taste buds. Our team is dedicated to providing exceptional service in a welcoming atmosphere, making every meal a special occasion.
          </p>
          <Link
            to="/menu_page"
            className="bg-black text-white py-3 px-6 rounded-lg inline-flex items-center hover:bg-gray-800 transition duration-300"
          >
            Explore Menu{" "}
            <span className="ml-2 text-lg">
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 px-6 md:px-8">
          <img 
            src="/about.png" 
            alt="About Us" 
            className="w-full h-auto rounded-lg shadow-lg object-cover" 
          />
        </div>
      </div>
    </section>
  );
};

export default About;
