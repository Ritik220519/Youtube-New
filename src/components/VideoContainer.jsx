import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API_KEY } from "./utils/constant";
import { Link } from "react-router-dom";
import VideoShimmer from "./VideoShimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    console.log("video : ", json.items);
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);
  if(videos === null) return <VideoShimmer/>
  return (
    <div className="grid grid-cols-4 ">
      {videos &&
        videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            {" "}
            <VideoCard data={video} />{" "}
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
