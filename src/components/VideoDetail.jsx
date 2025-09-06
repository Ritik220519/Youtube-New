import React from "react";
import { Link } from "react-router-dom";

const VideoDetail = ({ data }) => {
  const { url } = data.snippet.thumbnails.default ||data.snippet.thumbnails.medium;
  const { channelTitle, title } = data.snippet;
  const { commentCount } = data.statistics;

  console.log("videoData : " ,data)
  return (
    <div className="py-2 ">
      <h2 className="text-xl font-bold m-2">{title}</h2>
      <div className="py-2 flex justify-items-stretch gap-2 items-center cursor-pointer ">
        <img className="w-12 rounded-4xl" src={url} alt="channel-logo" />
        <p className="text-xl font-bold">{channelTitle}</p>
        <button className="bg-gray-200 rounded-2xl p-2 px-4 font-medium mx-4">
          Subscribe
        </button>
        <button className="bg-gray-300 p-2 px-4 rounded-lg  mx-2 cursor-pointer">
         👍🏽 Like
        </button>
        <button className="bg-gray-300 p-2 px-4 rounded-lg mx-2"> Share</button>
        <button className="bg-gray-300 p-2 px-4 rounded-lg mx-2">
          ⬇️ Download
        </button>
      </div>
      <h2 className="m-2 py-2 font-semibold text-2xl">
        {commentCount} Comments :
      </h2>
    </div>
  );
};

export default VideoDetail;
