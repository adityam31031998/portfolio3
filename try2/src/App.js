// App.js
import React, { useState } from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import "./style1.css";
import Navbar from "./Navbar";
import Portfoilio from "./Components/Portfoilio/Portfoilio";
import Home from "./Components/Home/Home";
import Resume from "./Components/Resume/Resume";

const App = () => {
  const [isResumeZoomed, setIsResumeZoomed] = useState(false);

  const handleResumeClick = () => {
    setIsResumeZoomed(true);

    // Reset zoom effect after 2 seconds (adjust as needed)
    setTimeout(() => {
      setIsResumeZoomed(false);
    }, 2000);
  };

  return (
    <div className="body1">
      <div className="container1">
        <BrowserRouter>
          <Navbar onResumeClick={handleResumeClick} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Portfoilio" element={<Portfoilio />} />
            {/* Use Navigate within a Route */}
            <Route
              path="/Resume"
              element={<Resume isZoomed={isResumeZoomed} />}
            >
              {/* Use Navigate here */}
              {isResumeZoomed && <Navigate to="/Resume" replace />}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
