import React from "react";
import { footerSections } from "../staticData/footerData";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-500 to-green-300 text-gray-800 py-12 shadow-inner">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-center justify-between items-start">
          {footerSections.map((section, index) => (
            <div key={index} className="w-full md:w-1/4 mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              {section.details.map((detail, idx) => (
                <p key={idx} className="mb-2">
                  {detail.link ? (
                    <a
                      href={detail.link}
                      className="hover:text-gray-100 transition duration-300"
                    >
                      {detail.text}
                    </a>
                  ) : (
                    detail.text
                  )}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-lg">&copy; 2024 Food-In. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
