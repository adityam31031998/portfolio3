// musicApi.jsx
import axios from "axios";
import { albumPoint, CLIENT_ID, CLIENT_SECRET } from "./musicUrl";

function CreatedMusicAuth(accessToken) {
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
}

async function generateToken() {
  try {
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };

    const response = await fetch("https://accounts.spotify.com/api/token", authParameters);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error generating token:", error);
    throw error;
  }
}

const fetchAlbumData = async (accessToken, setAlbum) => {
  try {
    const authHeader = CreatedMusicAuth(accessToken);
    const response = await axios.get(albumPoint, authHeader);
    setAlbum(response.data);
  } catch (error) {
    console.error(
      "Error fetching album data:",
      error.response ? error.response.data : error.message
    );
  }
};

const searchSong = async (accessToken, searchUrl, setSearchs) => {
  try {
    const authHeader = CreatedMusicAuth(accessToken);
    const response = await axios.get(searchUrl, authHeader);
    setSearchs(response.data);
    // console.log(response.data.albums.items);
  } catch (error) {
    console.error(
      "Error searching for songs:",
      error.response ? error.response.data : error.message
    );
  }
};

export { generateToken, fetchAlbumData, searchSong };
