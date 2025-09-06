import React from "react";

const VideoCard = ({data}) => {
const {channelTitle , title } = data.snippet;
const {url} = data.snippet.thumbnails.standard || data.snippet.thumbnails.high;
const { viewCount} = data.statistics;


  return (
       <div className="sm:w-62 md:w-80 lg:w-full xl:w-full  p-4 ">
      <div className=" bg-white rounded-lg shadow hover:shadow-lg duration-200 ">
        <div className="relative pb-[56.25%] rounded-t-lg overflow-hidden">
          <img
            src={url}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex items-start gap-3 p-3">
          {/* Placeholder avatar, replace with channel image if available */}
          <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-400 font-bold text-lg">
            {channelTitle[0]}
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>
            <p className="text-xs text-gray-600 mt-1">{channelTitle}</p>
            <span className="text-xs text-gray-500">{viewCount} views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
