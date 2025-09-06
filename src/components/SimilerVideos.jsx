import React, { useEffect } from "react";
import { YOUTUBE_API_KEY } from "./utils/constant";
import { useSelector } from "react-redux";
import SimilerVideoCard from "./SimilerVideoCard";

const SimilerVideos = () => {
  const videos = useSelector((store) => store.videos);
  const similerVideoAPI = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    console.log("similer video ", json);
  };

  useEffect(() => {
    similerVideoAPI();
  }, []);
  return (
    <div className=" bg-gray-200 rounded-2xl h-[800px] m-2 shadow-lg overflow-y-scroll">
      {videos && videos.map((video) => 
        <SimilerVideoCard key={video.id} data={video} />
      )}
    </div>
  );
};

export default SimilerVideos;
