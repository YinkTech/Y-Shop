import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import AboutUs from "../components/AboutUs";
import AOS from "aos";
import "aos/dist/aos.css";

const SwitchRoutes = () => {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      <Routes>
        <Route path="/" element={<App />} exact />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default SwitchRoutes;
