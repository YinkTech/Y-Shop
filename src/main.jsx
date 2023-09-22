import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import './assets/css/App.css'
import { BrowserRouter } from "react-router-dom";
import SwitchRoutes from './container/SwitchRoutes'
import { Provider } from 'react-redux';
import { store } from "./redux/store/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
      <Provider store={store}>
    <SwitchRoutes />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
