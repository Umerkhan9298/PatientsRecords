import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <div className="container">
      <nav>
        <NavLink to="/" activeStyle={activeStyle} exact>
          Home
        </NavLink>
        {" | "}
        <NavLink to="/patient" activeStyle={activeStyle}>
          Patient
        </NavLink>
        {" | "}
        <NavLink to="/about" activeStyle={activeStyle}>
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
