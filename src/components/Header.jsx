import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
  const [logIn, setlogIn] = useState("Log In");
  const logInButton = () => {
    setlogIn("Log Out");
  };
  const logOutButton = () => {
    setlogIn("Log In");
  };
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="app logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <Link to="/">
            <li className="list-items">Home</li>
          </Link>
          <Link to="/grocery">
            <li className="list-items">Grocery</li>
          </Link>
          <Link to="/about">
            <li className="list-items">About us</li>
          </Link>
          <Link to="/contact">
            <li className="list-items">Contact</li>
          </Link>
          <Link to="/cart">
            <li className="list-items">Cart</li>
          </Link>
          <div className="btn-padding">
            <button
              className="basic-btn"
              onClick={() => {
                if (logIn === "Log In") {
                  logInButton();
                } else {
                  logOutButton();
                }
              }}
            >
              {logIn}
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
