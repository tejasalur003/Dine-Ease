import React from "react";
import { Link } from 'react-router-dom'; // Import Link from React Router


const HeroSection = () => {
  return (
    <>
    {/* <section className="heroSection" id="heroSection">
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Delicious</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="/hero1.png" alt="hero1" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Food</h1>
                <h1 className="title dishes_title">Dishes</h1>
                <img src="/threelines.svg" alt="three" />
              </div>
              <img src="/logo.svg" alt="logo" className="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="/hero2.png" alt="hero2" />
          </div>
          <h1 className="title dishes_title">Dishes</h1>
        </div>
      </div>
    </section> */}
    <div className="hero-section">
    <div className="hero-content">
      <h1>Welcome to Our Restaurant</h1>
      <p>Enjoy the Finest Dining Experience</p>
      <Link to="/menu_page">
          <button>VIEW MENU</button>
        </Link>
    </div>
  </div>
  </>
  );
};

export default HeroSection;
