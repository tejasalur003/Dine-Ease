import React from 'react';

const WeCard = ({ number, title }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
      <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{number}</h3>
      <p className="text-gray-700 text-base">{title}</p>
    </div>
  );
};

export default WeCard;
