import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-200 to-yellow-100 text-gray-800 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Phone: +1234567890</p>
            <p>Email: food.in@gmail.com</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Visit Us</h3>
            <p className="mb-2">Koregaon Park</p>
            <p>Pune, Maharashtra</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <p className="mb-2">Mon - Fri: 9am - 10pm</p>
            <p>Sat - Sun: 10am - 11pm</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex flex-col space-y-2">
              <a href="https://instagram.com" className="hover:text-orange-500">Instagram</a>
              <a href="https://twitter.com" className="hover:text-orange-500">Twitter</a>              
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-lg">&copy; 2024 Food-In. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
