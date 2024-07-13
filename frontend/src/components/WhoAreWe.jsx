import React from 'react';
import { data } from '../restApi.json';

const WhoAreWe = () => {
  return (
    <section className="bg-gradient-to-br from-blue-100 to-blue-200 py-12 font-serif">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Section: Cards */}
          <div className="space-y-6">
            {data[0].who_we_are.slice(0, 2).map((element) => (
              <div key={element.id} className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
                <h1 className="text-3xl md:text-4xl font-light mb-2 text-gray-800">{element.number}</h1>
                <p className="text-gray-700">{element.title}</p>
              </div>
            ))}
          </div>

          {/* Right Section: Image and Text */}
          <div className="flex flex-col items-center md:mt-0 mt-12">
            <img src="/whoweare.png" alt="who" className="w-48 md:w-64 h-auto rounded-lg shadow-lg mb-6" />
            <p className="text-gray-700 text-center max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nunc ex. Donec maximus quam eu dolor viverra aliquam.
            </p>
          </div>
        </div>

        {/* Bottom Section: Additional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {data[0].who_we_are.slice(2).map((element) => (
            <div key={element.id} className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
              <h1 className="text-3xl md:text-4xl font-light mb-2 text-gray-800">{element.number}</h1>
              <p className="text-gray-700">{element.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
