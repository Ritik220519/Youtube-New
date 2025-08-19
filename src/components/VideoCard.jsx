import React from "react";

const VideoCard = ({data}) => {
const {channelTitle , title } = data.snippet;
const {url} = data.snippet.thumbnails.standard || data.snippet.thumbnails.high;
const { viewCount} = data.statistics;


  return (
    <div className="m-2 p-2  flex justify-around flex-wrap gap-6 ">
      <div className="card bg-base-100 w-86 shadow-sm rounded-2xl">
        <figure>
          <img
          className="rounded-lg"
            src={url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title font-bold">{title}</h2>
          <p>{channelTitle}</p>
          <span>{viewCount} view</span>
          
         
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
