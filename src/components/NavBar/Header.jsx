// this component renders Logo and Navbar component

import "../../App.css";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <div className="nav-area">
        <a href="/" className="logo">
          SpaceX Monitoring
        </a>
        <Navbar />
      </div>
    </header>
  );
}
