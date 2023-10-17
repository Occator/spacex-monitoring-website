// this component renders Logo and Navbar component

import "../../App.css";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <div className="nav-area">
        <NavLink to="/" className="logo">
          SpaceX Monitoring
        </NavLink>
        <Navbar />
      </div>
    </header>
  );
}
