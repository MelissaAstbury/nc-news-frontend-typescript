import { useState } from "react";

import './Header.scss';
import NavItem from './NavItem/NavItem';

const Header: React.FC = () => {
  const [burgerMenuToggled, setBurgerMenuToggled] = useState(false);

  return (
    <header>
      <nav>
      <h1>NC-News</h1>
      <div
      className="hamburger"
      onClick={() => {
        setBurgerMenuToggled(!burgerMenuToggled);
      }}
    >
      <div
        className={burgerMenuToggled ? "line modified-line-01" : "line"}
      ></div>
      <div
        className={burgerMenuToggled ? "line modified-line-02" : "line"}
      ></div>
      <div
        className={burgerMenuToggled ? "line modified-line-03" : "line"}
      ></div>
    </div>
    <ul
      className={burgerMenuToggled ? "nav-list open" : "nav-list"}
      onClick={() => {
        setBurgerMenuToggled(false);
      }}
    >
      <NavItem link="/" exact>
        Home
      </NavItem>
      <NavItem link="/users" exact>
        Users
      </NavItem>
      <NavItem link="/topics" exact>
        Topics
      </NavItem>
     
    </ul>
      </nav>
    </header>
  );
};

export default Header;