import React, { useEffect, useState } from "react";
import styles from "./music.module.css";
import { RecentPlay } from "./musicComponent/recentPlay";
import { MenuMusic } from "./musicComponent/menuMusic";
import { generateToken, fetchAlbumData,searchUrlCollect } from "./musicApi";
import { PlaylistMusic } from "./musicComponent/playlistMusic";
import  {SearchSongMusic}  from "./musicComponent/searchSongMusic";
import { TopPlaylistMusic } from "./musicComponent/topPlaylistMusic";
import { TreandingMusic } from "./musicComponent/treandingMusic";
import { FavMusic } from "./musicComponent/favMusic";
import { ControlsMusic } from "./musicComponent/controlsMusic";

// import Apple from "./musicComponent/Apple";
const Music = () => {
  var [accessToken, setAccessToken] = useState();
  const [album, setAlbum] = useState([]);
  // const [searchs, setSearchs] = useState([]);

  
  useEffect(() => {
    if (!accessToken) {
      generateToken(setAccessToken);
    } else {
      fetchAlbumData(accessToken, setAlbum);
      console.log("accessstoken",accessToken);
      searchUrlCollect("",accessToken);
    }
  }, [accessToken]);

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.musicLeft}>
          <div className={styles.logo}></div>
          {MenuMusic()}
          {FavMusic()}
          <PlaylistMusic />
        </div>
        <div className={styles.musicRight}>
          <SearchSongMusic  />
          {/* <Apple/> */}
          {RecentPlay()}
          {TreandingMusic()}
          {TopPlaylistMusic(album)}
          

          <div className={styles.bottomPlayList}>{ControlsMusic()}</div>
        </div>
      </div>
    </div>
  );
};
export default Music;
