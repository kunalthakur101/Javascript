import React from "react";

import "./home.css";
import Description from "./Description";
import About from "./About";
const home = () => {
  return (
    <div className="home">
      <h2 style={{ textAlign: "center", color: "white", marginTop: "20px" }}>
        Description
      </h2>
      <Description />
      <h2 style={{ textAlign: "center", color: "white" }}>About</h2>
      <About />
    </div>
  );
};

export default home;
