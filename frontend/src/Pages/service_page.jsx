import React from "react";
import { data } from "../restApi.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Service from "../components/Qualities";
const service_page = () => {
  return (
    <>
    <Navbar/>
    <Service/>
    <Footer/>
    </>
    
  )
}

export default service_page;
