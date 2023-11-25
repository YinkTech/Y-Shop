import Header from "../libs/Header";
import Trending from "../components/Trending";
import BestCollection from "../components/BestCollection";
import Sales from "../libs/Sales";
import React from "react";
import { Customers } from "../libs/Customers";
import Subscribe from "../libs/Subscribe";
import { Footer } from "../libs/Footer";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Header />
      <Trending />
      <h2 className=" mt-32 md:mt-0 text-2xl font-bold text-center tracking-tight text-[#333]">
        New Best Collection
      </h2>
      <BestCollection />
      <Sales />
      <Customers />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
