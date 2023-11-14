import React ,{useState} from 'react';

export default function Start({onStart}) {
   const [play,setPlay]=useState("Play")
   const handleclick=() =>{
    setPlay("Play Again");
    onStart();
   }
    return (
        <div id="start">
            <button
            onClick={handleclick}
            >
            <h1>{play}</h1>
            </button>
        </div>
    )
}