import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router";
const Header = () => {
  const [loginbtn, setLoginbtn] = useState("Login");
  return (
    <div className="header">
      <div>
        <img src={LOGO_URL} alt="logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/ContactUs">Contact Us</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
          <li>
            <button
              className="login-btn"
              onClick={() =>
                loginbtn === "Logout"
                  ? setLoginbtn("Login")
                  : setLoginbtn("Logout")
              }
            >
              {loginbtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
