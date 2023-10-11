import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import DataContext from "./context/DataContext.jsx";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataContext>
  </React.StrictMode>
);
