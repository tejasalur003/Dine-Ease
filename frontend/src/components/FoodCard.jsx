// components/FoodCard.jsx
import React from 'react';

const FoodCard = ({ image, title, category }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={image}
        alt={title}
        className="w-full h-48 sm:h-56 lg:h-64 object-cover object-center rounded-t-lg"
      />
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-lg text-gray-600 mb-4">{category}</p>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300">
          View More
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
