import React from "react";
import { data } from "../restApi.json";

const Team = () => {
  return (
    <section className="team py-12" id="team">
      <div className="container mx-auto">
        <div className="heading_section text-center mb-12">
          <h1 className="heading text-3xl font-bold mb-4">OUR TEAM</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fugit dicta, ipsum impedit quam laboriosam quas doloremque quia
            perferendis laborum.
          </p>
        </div>
        <div className="team_container grid grid-cols-1 md:grid-cols-4 gap-6">
          {data[0].team.map((element) => (
            <div className="card rounded-lg shadow-md p-6 text-center" key={element.id}>
              <img src={element.image} alt={element.name} className="w-full h-35 object-cover mb-4 rounded-t-lg" />
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
