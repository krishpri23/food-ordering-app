import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        {/* <img src="./food-app.png" alt="logo" width={100} height={50} /> */}
      </div>

      <nav>
        <ul className="menu">
          <NavLink to="/about">
            <li>About Us</li>
          </NavLink>
          <NavLink to="/">
            {" "}
            <li>Home</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact Us</li>{" "}
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
