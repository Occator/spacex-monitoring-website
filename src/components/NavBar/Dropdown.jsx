import "../../App.css";

export default function Dropdown(props) {
  const { submenus, dropdown } = props;
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <li className="menu-items" key={index}>
          <a href={submenu.url}>{submenu.title}</a>
        </li>
      ))}
    </ul>
  );
}
