import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
    const [showNav,setNav] = useState(false)
  return (
    <div>
      <nav className="navbar-nab">
          <img className="nav-logo" src={logo} alt =""></img>
        <ul className={showNav ? "nav-item-show":"nav-item"}>
          <li><a href="/order">Order</a></li>
          <li> <a href="/order-preview"> Order preview</a></li>
          <li> <a href="/manage">Manage inventory</a></li>
        </ul>
    <FontAwesomeIcon onClick={()=> setNav(!showNav)} className="icon" icon={faBars}></FontAwesomeIcon>
      </nav>
    </div>
  );
};

export default Header;
