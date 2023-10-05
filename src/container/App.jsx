import Header from "../components/Header";
import Trending from "./Trending";
import BestCollection from "./BestCollection";
import Sales from "../components/Sales";
import React, { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import { Customers } from "../components/Customers";
import Subscribe from "../components/Subscribe";
import { Footer } from "../components/Footer";

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
