import "../../App.css";
import { menuItems } from "./menu-items";
import MenuItems from "./MenuItems";

export default function Navbar() {
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
}
