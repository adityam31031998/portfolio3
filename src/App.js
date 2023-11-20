// App.js
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavLeft from "./Assets/NavLeft/NavLeft";
import NavRight from "./Assets/NavRight/NavRight";
import { ZoomProvider } from "./Assets/Zoom/ZoomContext";
import { NavLeftFotter } from "./Assets/NavLeftFotter/NavLeftFotter";

const App = () => {
  return (
    <BrowserRouter>
      <ZoomProvider>
        <div className="body1">
          <div className="navLeft">
            <div className="profile">
              <img src="./fin.png" className="profile" alt="loading" />
              <p className="profileName">Aditya .M</p>
            </div>
            <NavLeft navText={"Home"} navTo={"/"} />
            <NavLeft navText={"About"} navTo={"About"} />

            <NavLeftFotter />
          </div>
          <NavRight />
        </div>
      </ZoomProvider>
    </BrowserRouter>
  );
};

export default App;
