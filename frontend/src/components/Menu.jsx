import React from "react";
import { data } from "../restApi.json";


const Menu = () => {
  return (
    <section className="bg-gradient-to-br from-pink-100 to-red-200 py-12 font-serif">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            POPULAR DISHES
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rem
            ut veniam impedit. Inventore exercitationem recusandae dicta
            explicabo vitae incidunt!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data[0].dishes.map((element) => (
            <div key={element.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={element.image}
                alt={element.title}
                className="w-full h-48 object-cover object-center rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{element.title}</h3>
                <button className="bg-orange-400 text-white px-4 py-2 rounded-lg">{element.category}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
