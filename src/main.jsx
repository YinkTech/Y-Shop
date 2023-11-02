import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import "./assets/css/App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import Preloader from "./libs/Preloader";
import SwitchRoutes from "./container/SwitchRoutes";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          {loading ? <Preloader /> : <SwitchRoutes />}
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
