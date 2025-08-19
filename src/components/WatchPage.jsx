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

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const [specificVideoData, setSpecificVideoData] = useState(null);
  const [commentList, setCommentList] = useState(null);

  const specificVideoApi = async () => {
    const data = await fetch(
      YOUTUBE_SPECIFIC_VIDEO_iNFORMATION_API + "&id=" + searchParams.get("v")
    );
    const json = await data.json();
    // console.log(json.items[0]);
    setSpecificVideoData(json.items[0]);
  };

  const commentSectionApi = async () => {
    const data = await fetch(
      YOUTUBE_COMMENT_SECTION_API + "&videoId=" + searchParams.get("v")
    );
    const json = await data.json();
    setCommentList(json.items);
    console.log(json.items);
  };
  useEffect(() => {
    dispatch(closeMenu());
    specificVideoApi();
    commentSectionApi();
  }, []);

  if (!specificVideoData) return;
  if (!commentList) return;

  return (
    <div className="m-2 p-2 py-2 ">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <VideoDetail data={specificVideoData} />

      {commentList.map((comment) => (
        <CommentList key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default WatchPage;
