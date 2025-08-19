import React from "react";

const VideoShimmer = () => {
  return (
    <div>
   
      <div className="m-4 p-4 flex justify-around flex-wrap gap-6">
        {Array(8)
          .fill("")
          .map((_, i) => (
            <div
              key={i}
              className="card bg-gray-200 w-86 shadow-sm rounded-2xl animate-pulse"
            >
              <div className="h-56 w-full bg-gray-300 rounded-lg mb-4"></div>
              <div className="card-body m-2">
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2 "></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default VideoShimmer;
