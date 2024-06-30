import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();