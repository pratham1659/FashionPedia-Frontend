import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>FashionPedia</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}>
          Home <hr />
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}>
          Men
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}>
          Women
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}>
          Kids
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="Cart Icon" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
