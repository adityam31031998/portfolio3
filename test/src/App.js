// App.js
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavLeft from "./Assets/NavLeft/NavLeft";
import NavRight from "./Assets/NavRight/NavRight";
import { ZoomProvider } from "./Assets/Zoom/ZoomContext";
import { NavLeftFotter } from "./Assets/NavLeftFotter/NavLeftFotter";

const App = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const handleLinkClick = () => {
    // Close the sidebar when a link is clicked
    setSidebarActive(false);
  };

  return (
    <BrowserRouter>
      <ZoomProvider>
        <div className={`body1 ${sidebarActive ? "sidebar-active" : ""}`}>
          <div id="sidebar" className={sidebarActive ? "active" : ""}>
            <div className="toggle-btn" onClick={toggleSidebar}>
              <div className={`toggle ${sidebarActive ? "active" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="navLeft">
              <div className="profile">
                <img src="./fin.png" className="profile" alt="loading" />
                <p className="profileName">Aditya .M</p>
              </div>
              <NavLeft navText={"Home"} navTo={"/"} imgs={"./home4.png"} onClick={handleLinkClick} />
              <NavLeft navText={"About"} navTo={"About"} imgs={"./about.png"} onClick={handleLinkClick} />
              <NavLeft navText={"Resume"} navTo={"Resume"} imgs={"./portfolio.png"} onClick={handleLinkClick} />
              <NavLeft navText={"Portfolio"} navTo={"Portfolio"} imgs={"./resume.png"} onClick={handleLinkClick} />
              <NavLeftFotter />
            </div>
          </div>
          <div className="content"></div>
          <NavRight />
        </div>
      </ZoomProvider>
    </BrowserRouter>
  );
};

export default App;
