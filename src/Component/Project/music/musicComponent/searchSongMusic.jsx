import React, { useEffect, useState } from "react";
import styles from "../music.module.css";
import { searchUrlCollect } from "../musicApi";
// import { searchSong } from "../musicApi";

const SearchSongMusic = () => {
  const [searchData, setSearchData] = useState("danush");
  var [searchResults, setSearchResults] = useState([]);
  const [searchToggle, setSearchToggle] = useState(false);
  const [isEmptySearch, setIsEmptySearch] = useState(false);

  const searchArray = Object.entries(searchResults);
  var setSearchResultsData = "";
  const handleInputChange = (e) => {
    const userSearch = e.target.value;
    if (userSearch === "") {
      setIsEmptySearch(true);
      setSearchData("");
      setSearchToggle(false);
    } else {
      setSearchData(userSearch);
      setIsEmptySearch(false);
      setSearchToggle(true);
      searchUrlCollect(searchData, setSearchResultsData);
      setSearchResults(setSearchResultsData);
    }
  };
  useEffect(() => {
    if (searchData !== "") {
      searchUrlCollect(searchData);
    }
  }, [searchData]);

  function handleSearchResult() {
    return searchArray.map((items, index) => (
      <div className={styles.gridLeft} key={index}>
        {items[1].items.map((itm, inddx) => (
          <div className={styles.gridColumn} key={itm.inddx}>
            <img
              onClick={() => handleSongPlay(itm)}
              className={styles.searchImages}
              src={itm?.images[0]?.url}
              alt=""
            />
          </div>
        ))}
      </div>
    ));
  }
  function handleSongPlay(seleteddd) {
    return seleteddd;
  }
  return (
    <div className={styles.headder}>
      <div className={styles.searchs}>
        <input
          className={styles.songSearch}
          placeholder="Search"
          type="search"
          value={searchData}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.profile}>
        <span className={styles.profiles}>
          <img src="./profile/profile.jpg" className={styles.image} alt="" />
          <span>Yalnee</span>
        </span>
      </div>
      {isEmptySearch ? (
        <p>No results found.</p>
      ) : (
        searchToggle && (
          <div className={styles.searchDetails}>
            <div className={styles.gridContainer}>
              {handleSearchResult()}
              <div className={styles.gridRight}>
                <div className={styles.gridRightBottom}>
                  {/* {console.log(selected)} */}
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export { SearchSongMusic };
