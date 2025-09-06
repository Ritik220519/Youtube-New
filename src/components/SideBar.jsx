import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.hamReducer.isMenuOpen);
  if (!isMenuOpen) return null;
  return  (
    <aside
      className="
       grid col-span-2
        bg-white shadow-lg
        sm:w-30 md:w-80
         sm:px-4
        lg:w-60
      "
    >
      <nav className=" ">
        <ul className="grid  text-base md:text-lg font-semibold m-2 md:m-4">
          <h2 className="font-bold text-lg md:text-xl p-2 hidden sm:block">
            Explore
          </h2>
          <li className="grid gap-4 items-center p-2">
            <Link to="/" className="hidden sm:inline">
              🏠 Home
            </Link>
          </li>
          <li className="grid gap-4 items-center p-2">
            <span className="hidden sm:inline">📺 Shorts</span>
          </li>
          <li className="grid gap-4 items-center gap-2 p-2">
            <span className="hidden sm:inline">⏯️ Subscriptions</span>
          </li>
        </ul>
        <ul className="grid gap-4 text-base md:text-lg font-semibold m-2 md:m-4">
          <h2 className="font-bold text-lg md:text-xl p-2 hidden sm:block">
            Watch
          </h2>
          <li className="grid gap-4 items-center p-2">
            <span className="hidden sm:inline">👁️‍🗨️ History</span>
          </li>
          <li className="grid gap-4 items-center p-2">
            <span className="hidden sm:inline">🎵 Music</span>
          </li>
          <li className="grid gap-4 items-center p-2">
            <span className="hidden sm:inline">📂 Playlist</span>
          </li>
          <li className="grid gap-4 items-center p-2">
            <Link to="/likedvideo" className="hidden sm:inline">
              🎥 Liked Videos
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
