import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        {/* <img src="./food-app.png" alt="logo" width={100} height={100} /> */}
      </div>

      <nav>
        <ul className="menu">
          <li>About Us</li>
          <li>Home</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
