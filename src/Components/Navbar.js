import React from "react";
import "../App.css";

const Navbar = () => {
  return (
      <header>
        <h1>
          <span style={{ fontStyle: "bold", color: "#2E4053" }}>Movie </span>{" "}
          App
        </h1>
        <ul className="navmenu">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>
  );
};

export default Navbar;
