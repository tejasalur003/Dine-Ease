import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Toaster } from "react-hot-toast";


import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

import About from "./Pages/About_page";
import Success from "./Pages/Success";
import Menu from "./Pages/Menu_page";
import Service from "./Pages/service_page";
import Team from "./Pages/team_page";
import Reservation from "./Pages/reservation_page";
import Login from "./components/login";
import Signup from "./components/signup";


const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/menu_page" element={<Menu/>} />
        <Route path="/about_page" element={<About/>} />
        <Route path="/service_page" element={<Service/>} />
        <Route path="/team_page" element={<Team/>} />
        <Route path="/reservation_page" element={<Reservation/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      

        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Toaster /> {/* POP-UP FOR INVALID FORM DETAILS */}
    </Router>
  );
};

export default App;
