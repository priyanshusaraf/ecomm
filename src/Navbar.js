import React from "react";
import logo from "./logo.svg";
import "./Navbar.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import counter from "./atoms";
import { useRecoilState } from "recoil";
import { BrowserRouter as Router, Link } from "react-router-dom";
function Navbar() {
  const [counters] = useRecoilState(counter);
  return (
    <Router>
      <div className="navbar">
        <div className="navbar__head">
          <img src={logo} alt="react logo" className="navbar__logo" />
          <h3 className="navbar__title">Ecommerce Site</h3>
        </div>
        <ul className="navbar__ul">
          <li className="navbar__list">
            <Link
              to="/"
              className="navbar__list"
              style={{ "text-decoration": "none", color: "white" }}
            >
              Home
            </Link>
          </li>

          <li className="navbar__list">
            <Link
              to="/login"
              className="navbar__list"
              style={{ "text-decoration": "none", color: "white" }}
            >
              Login
            </Link>
          </li>
          <li className="navbar__list">
            <Link
              to="/"
              className="navbar__list"
              style={{ "text-decoration": "none", color: "white" }}
            >
              Cart
            </Link>
          </li>
          <ShoppingCartIcon />
          <div className="navbar__counter">{counters}</div>
        </ul>
      </div>
    </Router>
  );
}

export default Navbar;
