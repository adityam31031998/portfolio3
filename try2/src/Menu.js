import React from "react";
import "./style1.css";
import { Link } from "react-router-dom";
const Menu = ({ menuImg, iconText }) => {
  return (
    <>  
      <div className="menus">
        <Link to={iconText}>
          <div className="subIcon">{menuImg}</div>
          <span className="iconText">{iconText}</span>
        </Link>
        <hr className="line" />
      </div>
    </>
  );
};

export default Menu;
