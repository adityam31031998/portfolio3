import React from "react";
import styles from "../music.module.css";
 const MenuMusic = () => {
  return (
    <div className={styles.menu}>
      <p className={styles.iconName}>
        {/* <img src="./home.png" width={"50px"} alt="loading"></img> */}

        <span>Home</span>
      </p>
      <p className={styles.iconName}>
        {/* <img src="./home.png" width={"50px"} alt="loading"></img> */}
        <span>Home</span>
      </p>
      <p className={styles.iconName}>
        {/* <img src="./home.png" width={"50px"} alt="loading"></img> */}
        <span>Home</span>
      </p>
      <p className={styles.iconName}>
        {/* <img src="./home.png" width={"50px"} alt="loading"></img> */}
        <span>Home</span>
      </p>
    </div>
  );
};

export {MenuMusic}