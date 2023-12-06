import React from "react";
import styles from "./Portfolio.module.css";
import PortfoilioData from "./PortfoilioData";
import { Route, Routes } from "react-router-dom";
import Wet from "../Project/Weather/Wet";
import Movies from "../Project/Movies/Movies";
import AgeCalculator from "../Project/AgeCalulator/AgeCalculator";
import Calculator from "../Project/Calculator/Calculator";
import Gamelist from "../Project/GameList/Gamelist";
import Game from "../Project/Games/Game";
import TodoList from "../Project/TodoList/TodoList";
import Music from "../Project/music/music";

const Portfolio = () => {
  const imagesData = [
    { id: 1, src: "./home1.png", title: "Todolist", links: "/todolist" },
    { id: 2, src: "./home2.png", title: "Music", links: "/music" },
    { id: 3, src: "./home1.png", title: "Image 1", links: "/Wet" },
    { id: 4, src: "./home2.png", title: "Image 1", links: "/Movies" },
    // Add more image data as needed
  ];

  return (
    <div className={styles.container1}>
      <div className={styles.main1}>
        <Routes>
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/Portfolio/Wet" element={<Wet />} />
          <Route path="/Portfolio/Movies" element={<Movies />} />
          <Route path="/Portfolio/Games" element={<Game />} />
          <Route path="/Portfolio/Gamelist" element={<Gamelist />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/AgeCalculator" element={<AgeCalculator />} />
          <Route path="/music" element={<Music />} />
        </Routes>
        <PortfoilioData images={imagesData} />
      </div>
    </div>
  );
};

export default Portfolio;
