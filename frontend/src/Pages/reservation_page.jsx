import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reservation from "../components/Reservation";

const Reservation_page = () => {
  return (
    <>
        <Navbar/>
        <Reservation/>
        <Footer/>
    </>
      );
};

export default Reservation_page;
