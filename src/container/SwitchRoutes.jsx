import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";

const SwitchRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} exact />
      </Routes>
    </>
  );
};

export default SwitchRoutes;
