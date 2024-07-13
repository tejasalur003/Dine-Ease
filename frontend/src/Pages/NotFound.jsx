import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const NotFound = () => {
  return (
    <section className="flex min-h-screen justify-center items-center bg-gradient-to-r from-green-200 via-yellow-200 to-yellow-50 bg-right bg-no-repeat bg-cover">
      <div className="max-w-4xl text-center px-4 sm:px-8 lg:px-16">
        <img src="/notFound.svg" alt="notFound" className="mb-8 mx-auto" />
        <h1 className="text-4xl font-light text-gray-800 mb-4">
          LOOKS LIKE YOU'RE LOST
        </h1>
        {/* <p className="text-lg font-light text-gray-600 mb-6">We can't seem to find you the page you're looking for</p> */}
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-3 border border-black rounded-full text-base font-medium text-gray-900 hover:text-white bg-white hover:bg-black transition duration-300"
        >
          Back to Home{" "}
          <span className="ml-3 p-2 bg-gray-900 text-white rounded-full hover:bg-white hover:text-black transition duration-300">
            <HiOutlineArrowNarrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
