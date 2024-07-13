import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="bg-gradient-to-br from-yellow-100 to-yellow-200 py-12 font-serif">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              ABOUT US
            </h1>
            <p className="text-base text-gray-700">
              The only thing we're serious about is food.
            </p>
          </div>
          <p className="text-base text-gray-700 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            voluptas atque. Consectetur omnis saepe voluptas dicta, doloribus
            eaque. A sunt asperiores sint sapiente vitae adipisci totam, tempora
            aut porro natus minus saepe quasi et libero commodi ipsa obcaecati,
            soluta repellendus, alias recusandae culpa quidem laboriosam
            praesentium? Distinctio impedit libero tenetur!
          </p>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="bg-black text-white py-2 px-6 rounded-lg inline-block hover:bg-gray-800 transition duration-300"
          >
            Explore Menu{" "}
            <span className="ml-2">
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="/about.png" alt="about" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default About;
