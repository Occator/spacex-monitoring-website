import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import DataContext from "./context/DataContext.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataContext>
      <App />
    </DataContext>
  </React.StrictMode>
);
