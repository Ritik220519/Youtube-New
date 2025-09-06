import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchSuggestionVideo = () => {
  const navigate = useNavigate()
  const videos = useSelector((store) => store?.searchVideo);

  if (!videos) return;

  const handleSearchVideoClick = (videoId) =>{
      navigate('/watch?v='+videoId)
  }

  return (
    <div>
      {videos.map((video) => {
        const { channelTitle, description, title, publishedAt } = video.snippet;
        const { url } = video.snippet.thumbnails.medium;

        return (
          <div key={video.id.videoId} className="flex m-2 p-2 bg-gray-300 rounded-lg shadow-lg cursor-pointer" onClick={() => handleSearchVideoClick(video.id.videoId)}>
            <img className="rounded-lg w-[450px]" src={url} alt="url-video" />
            <div className="px-2 ">
              <div className="text-xl font-semibold">{title}</div>
              <div className="w-[750px] py-2 text-lg">{description}</div>
              <div className="py-4 font-medium">{channelTitle}</div>
              <div className="">{publishedAt}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchSuggestionVideo;
