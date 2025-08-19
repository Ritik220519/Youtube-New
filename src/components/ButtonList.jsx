import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const ButtonListName = ["All" , "Cricket" , "News" , "Game" , "Live" , "Ajjtak" , "AI" , "Music" ,"Movie" ,"Socker" , "Plaza" ]
  return (
    <div className="flex">
    {
      ButtonListName.map((list , index)=>(
        <Button key={index} name={list}/>
      ))
    }
    
    </div>
  );
};

export default ButtonList;
