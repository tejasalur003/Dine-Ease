import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Import Link from React Router

import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "../restApi.json";

const Navbar = () => {
  // const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="logo">FOOD-IN</div>      
      {/* <div className={show ? "navLinks showmenu" : "navLinks"}> */}
      <div className="navLinks showmenu">
        <div className="links">
             <a href="/">HOME</a>
            <a href="/menu_page">MENU</a>
            <a href="/about_page">ABOUT US</a>
            {/* <a href="/service_page">SERVICES</a> */}
            <a href="/team_page">TEAM</a>
            <a href="/reservation_page">RESERVATION</a> 
        </div>

        <Link
          to={"/menu_page"}
          spy={true}
          smooth={true}
          duration={500}
          className="menuBtn"
        >
          OUR MENU
        </Link>
        
      </div>

      {/* <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div> */}
    </nav>
  );
};

export default Navbar;
