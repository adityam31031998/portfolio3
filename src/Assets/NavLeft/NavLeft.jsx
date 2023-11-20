import React from "react";
import { Link } from "react-router-dom";
import { useZoom } from "../Zoom/ZoomContext";
import "./NavLeft.css";
const NavLeft = ({ navText, navTo }) => {
  const { setZoom } = useZoom();

  const handleLinkClick = () => {
    setZoom(navTo, true);

    setTimeout(() => {
      setZoom(navTo, false);
    }, 999);
  };

  return (
    <>
      <Link to={navTo} onClick={handleLinkClick}>
        <div className="navLeftContainer">{navText}</div>
      </Link>
      <hr />
    </>
  );
};

export default NavLeft;
