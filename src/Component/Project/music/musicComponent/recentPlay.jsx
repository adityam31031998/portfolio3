import React, { useState, useEffect } from "react";
import styles from "../music.module.css";
import { useMusicContext } from "./MusicContext";
// import { useMusicContext } from "./MusicContext";

function RecentPlay() {
  const { searchSelectdApi } = useMusicContext();
  const [storeSongs, setStoreSongs] = useState([]);

  useEffect(() => {
    if (searchSelectdApi) {
      setStoreSongs((prevSongs) => [...prevSongs, searchSelectdApi]);
      console.log();
    }
  }, [searchSelectdApi]);

  return (
    <div className={styles.recentPlay}>
      <p className={styles.subTitle}>Recently Played</p>
      <img className={styles.selectRcentPlayList} src="./recently.jpg" alt="" />
      {storeSongs.map((song, index) => (
        <>
          <img
            className={styles.selectRcentPlayList}
            src={song.images[0].url}
            alt={song.name}
          />
        </>
        // </div>
      ))}
    </div>
  );
}

export { RecentPlay };
