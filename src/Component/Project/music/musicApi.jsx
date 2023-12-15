// musicApi.jsx
import axios from "axios";
import { albumPoint, CLIENT_ID, CLIENT_SECRET, searchApi } from "./musicUrl";
function CreatedMusicAuth(accessToken) {
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
}

async function generateToken(setAccessToken) {
  try {
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };

    const response = await fetch(
      "https://accounts.spotify.com/api/token",
      authParameters
    );
    const data = await response.json();
    setAccessToken(data.access_token);
    return data;
  } catch (error) {
    console.error("Error generating token:", error.message);
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


const searchUrlCollect = async (userSearch, accessToken, setSearchResults) => {

  try {
    if (accessToken && userSearch.trim() !== "") { 
      const searchHeader = CreatedMusicAuth(accessToken);
      const searchUrl = `${searchApi}/search?q=${userSearch}&type=album`;
      const response = await axios.get(searchUrl, searchHeader);
      if (setSearchResults) {
        setSearchResults(response.data);
      }
    }
  } catch (error) {
    console.error("Error collecting search URL:", error.message);
    if (error.response) {
      console.error("Response:", error.response.data);
    }
  }
};

export { generateToken, fetchAlbumData, searchUrlCollect };
