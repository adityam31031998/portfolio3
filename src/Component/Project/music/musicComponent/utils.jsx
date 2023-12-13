// utils.js
import { searchSong } from "../musicApi";

const GeneratedSearchMusicKey = (adda) => {
  return (
    <>
      {searchSong(adda)}
    </>
  );
};

export default GeneratedSearchMusicKey;
