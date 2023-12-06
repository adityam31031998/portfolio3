import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Component/Home/Home";
import About from "../../Component/About/About";
import { useZoom } from "../Zoom/ZoomContext";
import Resume from "../../Component/Resume/Resume";
import Portfolio from "../../Component/Portfolio/Portfolio";
import TodoList from "../../Component/Project/TodoList/TodoList";
import Music from "../../Component/Project/music/music";


const NavRight = () => {
  const { zoomState } = useZoom();
  const shouldZoomOut = Object.values(zoomState).some((value) => value);

  return (
    <div className={`navRight ${shouldZoomOut ? "zoomOut" : ""}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Portfolio/*" element={<Portfolio />} />
        <Route path="/todolist" element={<TodoList/>} />
        <Route path="/music" element={<Music/>} />
      </Routes>
    </div>
  );
};

export default NavRight;
