import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import AboutUs from "../components/AboutUs";
import AOS from "aos";
import "aos/dist/aos.css";
import { ContactUs } from "../components/ContactUs";
import Shopping from "../components/Shopping";
import { Details } from "../libs/Details";

const SwitchRoutes = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<App />} exact />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUS" element={<ContactUs />} />
        <Route path="/Shopping" element={<Shopping />} />
        <Route path="/details/:id" element={<Details />} />
        <Route>404 not Found! </Route>
      </Routes>
    </>
  );
};

export default SwitchRoutes;
