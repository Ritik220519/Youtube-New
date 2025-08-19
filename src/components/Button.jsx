import React from 'react'

const Button = ({name}) => {
  return (
   <div className="m-2 p-2">
      <button className="btn bg-gray-200  py-1 px-4  rounded-lg  ">
       {name}
      </button>
     
    </div>
  )
}

export default Button
