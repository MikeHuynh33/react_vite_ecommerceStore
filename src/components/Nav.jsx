import React from "react";
import "./Nav.css";
import logo from "../assets/images/logo.jpeg";
const Nav = () => {
  return (
    <div className="header_container">
      <div className="logo">
        <h1>
          <img src={logo} alt="logo"></img>
          <span>
            Fragranceca.ca
            <div className="slogan">Choose your favorite scents</div>
          </span>
        </h1>
      </div>
      <div>
        <ul className="nav_bar">
          <li>
            <button>Login</button>
          </li>
          <li>
            <button>SignUp</button>
          </li>
          <li>
            <button>News</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
