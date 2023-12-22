import React from "react";
import styles from "../music.module.css";
function ControlsMusic() {
  return (
    <div>
      <div className={styles.currentPlay}></div>
      <div className={styles.currentControls}></div>
      <div className={styles.volume}></div>
    </div>
  );
}
export { ControlsMusic };
