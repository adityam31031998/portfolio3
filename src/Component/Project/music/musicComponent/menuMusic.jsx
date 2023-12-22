import React from "react";
import styles from "../music.module.css";
const MenuMusic = () => {
  return (
    <div className={styles.menu}>
      <p className={styles.iconName}>
        <img src="./home3.png" className={styles.menuIcon} alt="" />
        <span>Home</span>
      </p>
      <p className={styles.iconName}>
        <img src="./generic2.png" className={styles.menuIcon} alt="" />{" "}
        <span>Generic</span>
      </p>
      <p className={styles.iconName}>
        <img src="./artist.png" className={styles.menuIcon} alt="" />{" "}
        <span>Artists</span>
      </p>
      <p className={styles.iconName}>
        <img src="./musicTrack.png" className={styles.menuIcon} alt="" />{" "}
        <span>Ablums</span>
      </p>
    </div>
  );
};

export { MenuMusic };
