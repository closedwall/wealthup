"use client"
import React, {useState} from "react";

const Card = (props) => {
    const [color, setColor] = useState('white');
    
    const handleDeleteBtn =() =>{
      props.handleDelete(props.index);
    }

    const handleCompleteBtn = () =>{
        console.log("complete button clicked");
        setColor('gray-500');
    }
  return (
    <div className={`flex flex-col justify-between bg-${color} w-72 h-36 mx-10 my-10 mb-2 rounded-xl`}>
      <div className="p-4">
        <span className="font-bold">{props.notes}</span>
      </div>
      <div className="flex justify-between">
        <button onClick={handleDeleteBtn} className="bg-orange-400 px-3 py-2 rounded-xl hover:opacity-70">Delete</button>
        <button onClick={handleCompleteBtn} className="bg-orange-400 px-3 py-2 rounded-xl hover:opacity-70 ">Complete</button>
      </div>
    </div>
  );
};

export default Card;
