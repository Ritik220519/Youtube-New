import React from "react";
import SimilerVideos from "./SimilerVideos";

const CommentList = ({ comment }) => {
  const { authorProfileImageUrl, authorDisplayName, textOriginal } =
    comment.snippet.topLevelComment.snippet;

  return (
  
    <div className="flex justify-between">
      <div className="w-full">
        <ul className=" list bg-base-100 rounded-box shadow-md  m-2 p-4">
          {}
          <li className="list-row">
            <div className="flex">
              <img
                className="size-12 rounded-4xl "
                src={authorProfileImageUrl}
              />

              <div>
                <div className="m-2 text-md font-medium">
                  {authorDisplayName}
                </div>
              </div>
            </div>
            <p className="text-wrap text-md  font-semibold m-2 ">
              {textOriginal}
            </p>
          </li>
        </ul>
      </div>

      
    </div>
  );
};

export default CommentList;
