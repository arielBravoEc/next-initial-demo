import ActiveLink from "./ActiveLink";
import style from "./NavBar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

const NavBar = () => {
  return (
    <nav className={style["menu-container"]}>
      {menuItems.map((item, index) => (
        <ActiveLink href={item.href} text={item.text} key={index} />
      ))}
    </nav>
  );
};

export default NavBar;
