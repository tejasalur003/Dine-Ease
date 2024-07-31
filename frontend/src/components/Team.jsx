import React from "react";
import { data } from "../restApi.json";

const Team = () => {
  return (
    <section className="team py-12" id="team">
      <div className="container mx-auto">
        <div className=" text-center mb-12 mx-14">
          <h1 className="text-3xl font-bold mb-4">OUR TEAM</h1>
          <p className="text-gray-600 font-semibold text-center  m-5 p-5">
          Meet our dedicated team of culinary and hospitality experts. With a passion for exceptional food and service, our chefs and staff work together to create memorable dining experiences. Discover the faces and smiles that make every visit special.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {data[0].team.map((element) => (
            <div className="rounded-lg shadow-md p-6 text-center" key={element.id}>
              <img src={element.image} alt={element.name} className="w-full h-25 object-cover mb-4 p-2 rounded-t-lg" />
              <h3 className="text-xl font-bold mb-2">{element.name}</h3>
              <p className="text-gray-600">{element.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
