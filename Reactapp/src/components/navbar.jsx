import React from "react";

import logo from "../assets/react.svg";

import "./navbar.css";

const navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} />
      </div>

      <div className="navlinks">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <button className="btn">Logout</button>
      </div>
    </div>
  );
};

export default navbar;
