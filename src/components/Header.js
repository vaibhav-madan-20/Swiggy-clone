import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import logoImage from "../utils/assets/logo.png";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="flex justify-between items-center h-[100px] bg-blue-500 text-black shadow-md px-6">
      {/* Logo Section */}
      <div className="">
        <Link to="/">
          <img className="h-[100px]" src={logoImage} alt="Logo" />
        </Link>
      </div>

      {/* Navigation Section */}
      <nav className="flex items-center">
        <ul className="flex space-x-6">
          <li className=" ">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link
              to="/"
              className="hover:underline transition duration-300  "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:underline transition duration-300  "
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:underline transition duration-300  "
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              className="hover:underline transition duration-300  "
            >
              Grocery
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:underline transition duration-300   font-bold"
            >
              Cart ({cartItems.length})
            </Link>
          </li>
        </ul>
      </nav>

      {/* User Section */}
      <div className="flex items-center space-x-4">
        <button
          className="bg-gray-100 text-black px-4 py-1 w-24 rounded-lg  hover:bg-gray-200 transition duration-300 "
          onClick={() => {
            setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
          }}
        >
          {btnNameReact}
        </button>
        <span className="font-bold  whitespace-nowrap">
          {loggedInUser}
        </span>
      </div>
    </header>
  );
};

export default Header;