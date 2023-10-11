import "../../App.css";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

export default function MenuItems(props) {
  const [dropdown, setDropdown] = useState(false);
  const { items } = props;
  let toggleDropdownRef = useRef();

  useEffect(() => {
    const toggleDropdownHandler = (event) => {
      if (
        dropdown &&
        toggleDropdownRef.current &&
        !toggleDropdownRef.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", toggleDropdownHandler);
    document.addEventListener("touchstart", toggleDropdownHandler);

    // cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", toggleDropdownHandler);
      document.removeEventListener("touchstart", toggleDropdownHandler);
    };
  }, [dropdown]);
  return (
    <>
      <li className="menu-items" ref={toggleDropdownRef}>
        {items.submenu ? (
          <>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdown ? "true" : "false"}
              onClick={() => setDropdown((prev) => !prev)}
            >
              {items.title}{" "}
            </button>
            <Dropdown submenus={items.submenu} dropdown={dropdown} />
          </>
        ) : (
          <NavLink href={items.url}>{items.title}</NavLink>
        )}
      </li>
    </>
  );
}
