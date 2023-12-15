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
    // function currentToken(accessstoken) {
    //   // console.log("dhhh", accessstoken);
    //   return accessstoken;
    // }
    
    var fff=accessToken
    const searchHeader = CreatedMusicAuth(fff);
    console.log(typeof accessToken,"hhhhhhhhhhh");
    console.log( accessToken,"ggggggg");
    if (accessToken) {
      
      console.log("accessToken11",accessToken);
    }
    var searchUrl = `${searchApi}/search?q=${userSearch}&type=album`;
    console.log(searchUrl);
    const response = await axios.get(searchUrl, searchHeader);
    console.log(response.data);
  } catch (error) {
    console.error("Error collecting search URL:", error.message);
  }
};
export { generateToken, fetchAlbumData, searchUrlCollect };
