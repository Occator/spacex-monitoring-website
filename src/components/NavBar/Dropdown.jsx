import "../../App.css";
import { NavLink } from "react-router-dom";

export default function Dropdown(props) {
  const { items, submenus, dropdown } = props;
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <li className="menu-items" key={index}>
          <NavLink to={`${items.url}/${submenu.url}`}>{submenu.title}</NavLink>
        </li>
      ))}
    </ul>
  );
}
