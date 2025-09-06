import React, { useEffect} from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API_KEY } from "./utils/constant";
import { Link } from "react-router-dom";
import VideoShimmer from "./VideoShimmer";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "./Redux/mostPopularVideos";

const VideoContainer = () => {
  const dispatch = useDispatch();

  const videos = useSelector((store) => store.videos);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    dispatch(addVideos(json.items));
  
  };

  useEffect(() => {
    getVideos();
  }, []);
  if (videos === null) return <VideoShimmer />;
  return (
    <div className="px-2 py-4 w-full">
      <div
        className="
        lg:grid grid-cols-4 
        sm:grid        
      "
      >
        {videos &&
          videos.map((video) => (
            <Link key={video.id} to={"/watch?v=" + video.id}>
              <VideoCard data={video} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default VideoContainer;
