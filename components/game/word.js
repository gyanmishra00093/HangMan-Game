import React from 'react';

export default function word({
    actualWord,playedLetters
}){
    return (
        <div id="word">
            <h1>
           {[...actualWord].map((letter)=>(
            <>
            {playedLetters.has(letter)?(
                <span>{letter}</span>
            ):(
                <span>&nbsp;_&nbsp;</span>
            )}
            </>
           ))} 
           </h1>
        </div>
    )
}