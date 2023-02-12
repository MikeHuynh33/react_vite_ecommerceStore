import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="header_container">
      <div>
        <h1>Logo</h1>
        <h2>stage</h2>
      </div>
      <div>
        <ul>
          <li>Login</li>
          <li>Signup</li>
          <li>Support</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
