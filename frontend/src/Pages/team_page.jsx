import React from "react";
import { data } from "../restApi.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Team from "../components/Team";
import WhoAreWe from "../components/WhoAreWe";

const Team_page = () => {
  return (
    <>
    <Navbar/>
    <WhoAreWe/>
    <Team/>
    <Footer/>
    </>
  )
};

export default Team_page;
