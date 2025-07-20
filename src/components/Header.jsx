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
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <img
              className="h-12 w-12 md:h-16 md:w-16 object-contain hover:scale-105 transition-transform duration-200"
              src={LOGO_URL}
              alt="App Logo"
            />
          </Link>
          {/* Navigation Section */}
          <nav className="hidden md:flex items-center">
            <ul className="flex items-center space-x-8">
              {/* Online Status Indicator */}
              <li className="flex items-center space-x-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    onlineStatus ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                <span className="text-sm text-gray-600">
                  {onlineStatus ? "Online" : "Offline"}
                </span>
              </li>

              {/* Navigation Links */}
              <Link
                to="/"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
              >
                <li>Home</li>
              </Link>

              <Link
                to="/grocery"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
              >
                <li>Grocery</li>
              </Link>

              <Link
                to="/about"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
              >
                <li>About Us</li>
              </Link>

              <Link
                to="/contact"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
              >
                <li>Contact</li>
              </Link>

              <Link
                to="/cart"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
              >
                <li className="flex items-center space-x-1">
                  <span>Cart</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13v6a1 1 0 001 1h8a1 1 0 001-1v-6m-9 0h9"
                    />
                  </svg>
                </li>
              </Link>

              {/* Login/Logout Button */}
              <li>
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    logIn === "Log In"
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-red-500 text-white hover:bg-red-600"
                  }`}
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
              </li>
            </ul>
          </nav>
          {/* Mobile Menu Button */}``
          <div className="md:hidden">
            <button className="p-2 text-gray-700 hover:text-orange-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (you can expand this later) */}
      <div className="md:hidden border-t border-gray-200">
        <div className="px-4 py-3 space-y-2">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  onlineStatus ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
              <span className="text-sm text-gray-600">
                {onlineStatus ? "Online" : "Offline"}
              </span>
            </div>
            <button
              className={`px-3 py-1 text-sm rounded font-medium transition-all duration-200 ${
                logIn === "Log In"
                  ? "bg-orange-500 text-white"
                  : "bg-red-500 text-white"
              }`}
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

          <Link
            to="/"
            className="block py-2 text-gray-700 hover:text-orange-500 font-medium"
          >
            Home
          </Link>
          <Link
            to="/grocery"
            className="block py-2 text-gray-700 hover:text-orange-500 font-medium"
          >
            Grocery
          </Link>
          <Link
            to="/about"
            className="block py-2 text-gray-700 hover:text-orange-500 font-medium"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block py-2 text-gray-700 hover:text-orange-500 font-medium"
          >
            Contact
          </Link>
          <Link
            to="/cart"
            className="block py-2 text-gray-700 hover:text-orange-500 font-medium"
          >
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
