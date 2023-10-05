import Header from "../libs/Header";
import Trending from "../components/Trending";
import BestCollection from "../components/BestCollection";
import Sales from "../libs/Sales";
import React, { useState, useEffect } from "react";
import Preloader from "../libs/Preloader";
import { Customers } from "../libs/Customers";
import Subscribe from "../libs/Subscribe";
import { Footer } from "../libs/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? <Preloader /> : <Header />}
      <Trending />
      <BestCollection />
      <Sales />
      <Customers />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
