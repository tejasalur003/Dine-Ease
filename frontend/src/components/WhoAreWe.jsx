import React from 'react';
import { data } from '../restApi.json';
import WeCard from './weCard';
import { whatWeDoText } from '../staticData/weText';

const WhoAreWe = () => {
  return (
    <section className="bg-gradient-to-br from-blue-100 to-blue-400 py-16 font-serif">
      <div className="mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{whatWeDoText.heading}</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">{whatWeDoText.description}</p>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Section: Cards */}
          <div className="space-y-12">
            {data[0].who_we_are.map((element) => (
              <WeCard
                key={element.id}
                number={element.number}
                title={element.title}
              />
            ))}
          </div>

          {/* Right Section: Image and Text */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/whoweare.png" alt={whatWeDoText.imageAlt} className="w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-8 object-cover" />
            <p className="text-gray-700 text-base text-center md:text-left max-w-lg">
              {whatWeDoText.imageDescription}
            </p>
          </div>
        </div>

        
        
      </div>
    </section>
  );
};

export default WhoAreWe;
