import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../components/Redux/hamSlice";
import {
  YOUTUBE_SEARCH_API,
  YOUTUBE_SEARCH_SUGGESTION_VIDEO_API,
} from "./utils/constant";
import { cacheResults } from "./Redux/searchCacheSlice";
import SearchSuggestions from "./SearchSuggestions";
import { Link, useNavigate} from "react-router-dom";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
 

  const dispatch = useDispatch();

  const cache = useSelector((store) => store.searchCache || {});
  const navigate = useNavigate();
 
  useEffect(() => {
    // Debounce the search suggestion to avoid too many API calls

    const timer = setTimeout(() => {
      if (cache[searchText]) {
        setSearchSuggestions(cache[searchText]);
      } else {
        searchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const searchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    console.log(json[1]);
    setSearchSuggestions(json[1]);
    dispatch(cacheResults({ [searchText]: json[1] }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  

  const handleSearchApi = async (eachSuggestion) => {
    const data = await fetch(
      YOUTUBE_SEARCH_SUGGESTION_VIDEO_API + eachSuggestion
    );
    const json = await data.json();
   
    console.log(json);
  };
  useEffect(() => {
    handleSearchApi();
  }, []);

  return (
    <div className="grid grid-flow-col px-2  shadow-lg">
      <div className="flex col-span-2 m-2 gap-8 cursor-pointer">
        <img
          onClick={() => toggleMenuHandler()}
          className="w-8 "
          src="https://cdn-icons-png.flaticon.com/512/2516/2516745.png"
          alt="ham-logo"
        />
        <img
          className="w-26 mx-6  "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"
          alt="yt-logo"
        />
      </div>
      <div className="col-span-10 m-2  ">
        <input
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-1/2 p-2 border border-black rounded-full rounded-r-none "
          type="text"
          placeholder="Search"
        />

        <button className="border border-black bg-gray-100 p-2 rounded-r-full rounded-l-none ">
          🔍
        </button>
        {showSuggestion && (
          <div className="m-2 w-[450px] absolute bg-white rounded-lg shadow-lg">
            <ul>
              {searchSuggestions.map((suggestion) => (
            <li
                 onClick={()=> navigate(`/search/${suggestion}`)} 
                  key={suggestion}
                  className="m-2  text-lg font-semibold hover:bg-gray-200 cursor-pointer"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex col-span-1 m-2 mx-6 gap-4 ">
        <img
          className="h-8  "
          src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Header;
