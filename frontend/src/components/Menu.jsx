// components/Menu.jsx
import React from "react";
import { dishes } from "../staticData/food";
import FoodCard from "./FoodCard";

const Menu = () => {
  return (
    <section className="bg-gradient-to-r from-pink-100 to-pink-300 py-16 font-serif">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Our Popular Dishes
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Discover our most popular dishes, carefully crafted to bring you the best of culinary delights. 
            Each dish is made with fresh, high-quality ingredients to ensure a memorable dining experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-5 p-2">
          {dishes.map((dish) => (
            <FoodCard
              key={dish.id}
              image={dish.image}
              title={dish.title}
              category={dish.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
