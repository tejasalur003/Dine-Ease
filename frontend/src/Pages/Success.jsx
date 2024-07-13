import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <section className="flex min-h-screen justify-center items-center bg-gradient-to-r from-green-200 via-yellow-200 to-yellow-50 bg-right bg-no-repeat bg-cover">
      <div className="max-w-4xl text-center px-4 sm:px-8 lg:px-16">
        <img src="/sandwich.png" alt="success" className="mb-8 mx-auto" />
        <h1 className="text-4xl font-light text-gray-800 mb-4">
          Redirecting to Home in {countdown} seconds...
        </h1>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-3 border border-black rounded-full text-base font-medium text-gray-900 hover:text-white bg-white hover:bg-black transition duration-300"
        >
          Back to Home{" "}
          <HiOutlineArrowNarrowRight className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default Success;
