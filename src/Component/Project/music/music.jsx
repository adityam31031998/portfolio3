import React, { useEffect, useState } from "react";
import styles from "./music.module.css";
import axios from "axios";
const Music = () => {
  const CLIENT_ID = "2af61d024bb0445cbd55e0fe0dbbdb94";
  const CLIENT_SECRET = "75a922eb847c471899d5f99a15889be8";
  const albumPoint = "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy";
  const [accessToken, setAccessToken] = useState("");
  const [album, setAlbum] = useState([]);
  // const [test, setTest] = useState([]);
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
  useEffect(() => {
    fetchAlbumData();
    generateTocken();
    // test1();
  }, []);
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
              <img src="./home.png" width={"50px"} alt="loading"></img>

              <span>Home</span>
            </p>
            <p className={styles.iconName}>
              <img src="./home.png" width={"50px"} alt="loading"></img>
              <span>Home</span>
            </p>
            <p className={styles.iconName}>
              <img src="./home.png" width={"50px"} alt="loading"></img>
              <span>Home</span>
            </p>
            <p className={styles.iconName}>
              <img src="./home.png" width={"50px"} alt="loading"></img>
              <span>Home</span>
            </p>
          </div>
          <div className={styles.fav}>
            <p className={styles.iconName}>
              <img src="./home.png" width={"50px"} alt="loading"></img>
              <span>Home</span>
            </p>
            <p className={styles.iconName}>
              <img src="./home.png" width={"50px"} alt="loading"></img>
              <span>Home</span>
            </p>
          </div>
          <div className={styles.playlist}>
            <p className={styles.iconName}>
              <img src="./home.png" width={"50px"} alt="loading"></img>
              <span>Home</span>
            </p>
            <p className={styles.iconName}>
              <img src="./home.png" width={"50px"} alt="loading"></img>
              <span>Home</span>
            </p>
            <p className={styles.iconName}>
              <img src="./home.png" width={"50px"} alt="loading"></img>
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              aliquam consequuntur error nesciunt nisi esse in, reprehenderit
              eum sed delectus. Fugit, suscipit! Quis assumenda deleniti sequi,
              aut eos nulla eum vel eligendi cumque earum modi, molestias optio
              voluptatem autem, ex officia. Omnis, consectetur consequatur, eius
              ratione id architecto culpa perspiciatis quos ab quia quaerat
              ducimus molestiae itaque! Voluptatum fuga nemo a eum animi nulla
              tempora, veritatis eaque qui distinctio provident aspernatur culpa
              mollitia ut veniam dignissimos placeat eos quo ex asperiores
              facilis necessitatibus ipsum. Tenetur, rem eos sunt nostrum quo a
              nisi unde repellat possimus laboriosam voluptatibus magnam quidem
              at aut harum quas labore cum perferendis impedit saepe earum natus
              maxime eius. Dolore illum rem laudantium accusamus cumque? Vitae
              error reprehenderit harum quasi delectus sint veritatis dolorem
              dolores sit quas vero ab sapiente recusandae dolore nam ipsa,
              beatae modi placeat blanditiis alias. Iure laborum iusto,
              molestias id facilis odio optio rem quae laudantium!
              Exercitationem beatae blanditiis animi delectus, sed expedita,
              similique ipsa cumque fugit error ad ex neque, est ea laborum aut
              iusto iure assumenda. Ex iusto saepe pariatur nam rerum, facere
              mollitia itaque eligendi asperiores, voluptate delectus incidunt
              quam sunt libero eum suscipit eos omnis facilis! Necessitatibus,
              amet totam.
            </p>
          </div>
          <div className={styles.trandings}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              sapiente eius animi enim quidem natus laborum tempora a voluptas
              reprehenderit error ea, harum eligendi odio ex, in amet delectus
              maiores expedita alias vero tempore quia? Doloremque pariatur
              necessitatibus mollitia earum recusandae nam provident inventore
              neque expedita ullam delectus sint cumque officiis consequuntur,
              nesciunt quam perspiciatis eligendi quaerat suscipit odit minus
              dolorum natus nihil! Fuga veniam, et officia repellat recusandae
              magni dolores laborum accusamus voluptas aut consectetur error
              obcaecati exercitationem quibusdam quae consequatur debitis
              blanditiis, tempora{" "}
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

             <ul>
              <li>
              {album?.available_markets.slice(99,113) &&(
                
                <span>{album.available_markets.slice(99,113)}</span>
                )
              }
              </li>
              </ul>
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
