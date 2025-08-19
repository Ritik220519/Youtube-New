import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {

  const isMenuOpen = useSelector((store )=> store.hamReducer.isMenuOpen);
  if(!isMenuOpen) return null
  return (
    <div className="shadow-lg w-60 ">
      <ul className=" text-lg font-semibold m-4 ">
      <h2 className="font-bold text-xl p-2">Explore</h2>
        <li className="p-2">  <Link to="/"> Home</Link></li>
        <li className="p-2">Shorts</li>
        <li className="p-2">Subscriptions</li>
      </ul>
      
      <ul className=" text-lg font-semibold m-4">
        <h2 className="font-bold text-xl p-2">Watch</h2>
        <li className=" p-2">History</li>
        <li className=" p-2">Music</li>
        <li className=" p-2">Playlist</li>
        <li className=" p-2">Liked Videos</li>
      </ul>
    </div>
  );
};

export default SideBar;
