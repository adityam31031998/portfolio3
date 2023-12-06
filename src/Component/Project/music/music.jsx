import React, { useEffect, useState } from "react";
import styles from "./music.module.css";
import axios from "axios";
import { albumPoint,CLIENT_ID,CLIENT_SECRET } from "./musicUrl";
const Music = () => {
  const [accessToken, setAccessToken] = useState("");
  const [album, setAlbum] = useState([]);
  // const [test, setTest] = useState([]);
  useEffect(() => {
    generateTocken();
    fetchAlbumData();
  }, []);
  function generateTocken() {
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
      };
      fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }

  const fetchAlbumData = async () => {
    try {
      var albumConfig = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      };
      const response = await axios.get(albumPoint, albumConfig);
      setAlbum(response.data);
      console.log(accessToken);
      // console.log(a);
      
    } catch (error) {
      console.error(
        "Error album : ",
        error.response ? error.response.data : error.message
        );
      }
    };
    
    return (
      <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.musicLeft}>
          <div className={styles.logo}></div>

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
          <div className={styles.fav}>
            <p className={styles.iconName}>
              {/* <img src="./home.png" width={"50px"} alt="loading"></img> */}
              <span>Home</span>
            </p>
            <p className={styles.iconName}>
              {/* <img src="./home.png" width={"50px"} alt="loading"></img> */}
              <span>Home</span>
            </p>
          </div>
          <div className={styles.playlist}>
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
        </div>
        <div className={styles.musicRight}>
          <div className={styles.headder}>
            <div className={styles.searchs}>
              <input
                className={styles.songSearch}
                placeholder="Search"
                type="search"
              />
            </div>
            <div className={styles.profile}>
              <p className={styles.profiles}>
                <img
                  src="./profile/profile.jpg"
                  className={styles.image}
                  alt=""
                />
                <span>Yalnee</span>
              </p>
            </div>
          </div>
          <div className={styles.recentPlay}>
            <p>
            {/* {album.map} */}
            </p>
          </div>
          <div className={styles.trandings}>
            <p>
              
            </p>
          </div>
          <div style={{overflow:"scroll"}} className={styles.topPlaylist}>
            {/* {test} */}
            {/* {album?.artists?.map((artist, index) => (
              <p key={index}>{artist.name}</p>
            ))} */}
            
            {album?.tracks?.items[0].preview_url && (
              <audio src={album.tracks.items[0].preview_url} controls></audio>
              // <img
              //   className={styles.albumImage}
              //   src={album.tracks[0].url}
              //   alt="loading"
              // />
            )}
            
            <div >
              <div>

            </div>

              
              {album?.tracks?.items.map((item, index) => (
                <span key={index}> <audio controls src={item.preview_url}></audio></span>
              ))}


            </div>
          </div>

          <div className={styles.bottomPlayList}>
            <div className={styles.currentPlay}></div>
            <div className={styles.currentControls}></div>
            <div className={styles.volume}></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
