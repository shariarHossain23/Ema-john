import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <nav className="navbar-nab">
        <img className="nav-logo" src={logo} alt=""></img>
        <div className="">
          <ul>
            <Link className="menu-list" to="/order">
              Order
            </Link>
            <Link className="menu-list" to="/order-preview">
              Order preview
            </Link>
            <Link className="menu-list" to="/inventory">
              Manage inventory
            </Link>
            { user?<button className="log-out-btn" onClick={()=>logout()}>Logout</button>
              :
              <Link className="menu-list" to='/login'>Login</Link>
            }
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
