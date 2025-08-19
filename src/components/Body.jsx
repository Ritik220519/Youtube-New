import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  return (
    <>
      <Header />
      <div className="flex  ">
        <SideBar />
        {/* <MainContainer/> */}
        <Outlet />
        {/* This Outlet will render the child routes defined in App.jsx */}
      </div>
    </>
  );
};

export default Body;
