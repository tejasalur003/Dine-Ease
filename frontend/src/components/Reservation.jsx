import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState(0);
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setPhone(0);
      setEmail("");
      setTime("");
      setDate("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-cover bg-right" style={{ backgroundImage: 'url(/reserve.svg)' }}>
      <div className="container mx-5 px-5 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center">
        <div className="flex justify-center md:w-1/2">
          <img src="/reservation.png" alt="res" className="w-full h-auto md:max-w-lg" />
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-lg w-full md:w-1/2">
          <h1 className="text-3xl font-light text-center text-black mb-6">MAKE A RESERVATION</h1>
          <form onSubmit={handleReservation} className="space-y-6">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="flex-1 px-4 py-2 border-b border-gray-200 bg-transparent text-gray-900 placeholder-gray-600 focus:border-blue-400 outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="flex-1 px-4 py-2 border-b border-gray-200 bg-transparent text-gray-900 placeholder-gray-600 focus:border-blue-400 outline-none"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="flex-1 px-4 py-2 border-b border-gray-200 bg-transparent text-gray-900 placeholder-gray-600 focus:border-blue-400 outline-none"
              />
              <input
                type="time"
                placeholder="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="flex-1 px-4 py-2 border-b border-gray-200 bg-transparent text-gray-900 placeholder-gray-600 focus:border-blue-400 outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border-b border-gray-200 bg-transparent text-gray-900 placeholder-gray-600 focus:border-blue-400 outline-none"
            />
            <input
              type="number"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border-b border-gray-200 bg-transparent text-gray-900 placeholder-gray-600 focus:border-blue-400 outline-none"
            />
            <button type="submit" className="w-full flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-200">
              RESERVE NOW <HiOutlineArrowNarrowRight className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
