import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Component/Home/Home"
import About from "../../Component/About/About";
import { useZoom } from "../Zoom/ZoomContext";

const NavRight = () => {
  const { zoomState } = useZoom();
  const shouldZoomOut = Object.values(zoomState).some((value) => value);

  return (
    <div className={`navRight ${shouldZoomOut ? "zoomOut" : ""}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
};

export default NavRight;
