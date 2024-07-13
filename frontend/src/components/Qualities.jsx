import React from "react";
import { data } from "../restApi.json";

const Qualities = () => {
  return (
    <section className="qualities py-12" id="qualities">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data[0].ourQualities.map((element) => (
            <div className="card rounded-lg shadow-md p-6 text-center" key={element.id}>
              <div className="bg-primary rounded-full p-4 mb-4">
                <img src={element.image} alt={element.title} className="w-18 h-18 inline-block" />
              </div>
              <h3 className="text-xl font-bold mb-2">{element.title}</h3>
              <p className="text-gray-600">{element.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualities;
