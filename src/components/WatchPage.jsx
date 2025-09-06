import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./Redux/hamSlice";
import { useSearchParams } from "react-router-dom";
import {
  YOUTUBE_COMMENT_SECTION_API,
  YOUTUBE_SPECIFIC_VIDEO_iNFORMATION_API,
} from "./utils/constant";
import VideoDetail from "./VideoDetail";
import CommentList from "./CommentList";
import LiveChat from "./LiveChat";
import SimilerVideos from "./SimilerVideos";

const WatchPage = () => {
  const dispatch = useDispatch();
 
  const [searchParams] = useSearchParams();
  const [specificVideoData, setSpecificVideoData] = useState([]);
  const [commentList, setCommentList] = useState();

  const specificVideoApi = async () => {
    const data = await fetch(
      YOUTUBE_SPECIFIC_VIDEO_iNFORMATION_API + "&id=" + searchParams.get("v")
    );
    const json = await data.json();
 
    setSpecificVideoData(json.items[0]);
  };

  const commentSectionApi = async () => {
    const data = await fetch(
      YOUTUBE_COMMENT_SECTION_API + "&videoId=" + searchParams.get("v")
    );
    const json = await data.json();
    setCommentList(json.items);
  
  };
  useEffect(() => {
    specificVideoApi();
    commentSectionApi();
     dispatch(closeMenu());
  }, []);

  if (!specificVideoData) return;
  if (!commentList) return;

  return (
    <div className="m-2 p-2 py-2  ">
      <div className="grid grid-flow-col ">
        <div className="grid grid-cols-1 col-span-12 overflow-x-auto">
          <iframe
            width="1050"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="py-4">
            <VideoDetail data={specificVideoData} />

            {commentList.map((comment) => (
              <CommentList key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
        <div>
          <LiveChat />
           <div className="py-4  ">
          <SimilerVideos />
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default WatchPage;
