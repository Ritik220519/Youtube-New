import React from "react";
import { useNavigate } from "react-router-dom";

const SimilerVideoCard = ({ data }) => {
  
  const { channelTitle, title } = data.snippet;
  const { url } = data.snippet.thumbnails.default;

  const navigate = useNavigate()

  const handleSimilerVideoClick = () =>{
    navigate("/watch?v=" + data.id)
  }
  return (
    
      <div onClick={()=>handleSimilerVideoClick()} className=" flex p-2 cursor-pointer">
        <img className="px-2 w-26 h-20  rounded-2xl " src={url} alt="" />
          <div className="flex flex-col ">
        <span className="text-sm font-bold">{title}</span>
        <span className="py-3 font-medium">{channelTitle}</span>
      </div>
      

    
     
    </div>
  );
};

export default SimilerVideoCard;
