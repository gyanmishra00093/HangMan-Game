import React,{ useState,useEffect } from 'react';
import Lives from './lives';
import Word from './word';
import Letters from './letters';
import Start from './start';

const MAX_LIVES=6;
export default function Game() {
    const [actualWord,setActualWord]=useState("");
    const [playedLetters,setPlayedLetters]=useState([]);
    
    const word_set=new Set([...actualWord]);
    const played_set=new Set([...playedLetters])
    const wrongLetters=playedLetters.filter((letter) => {
        return !word_set.has(letter);
    })
    const  lives=MAX_LIVES-wrongLetters.length;
    let isRunning= lives && actualWord ;
    const isWon=[...word_set].every((letter) =>played_set.has(letter))
    //    const isWon =isRunning && lives && [...word_set].reduce((acc,curr) =>{
    //     if(!played_set.has(curr)) return false;
    //     return acc;
    // },true);
    const guess= letter =>{
        setPlayedLetters((prev) => [...prev, letter])
        // console.log(playedLetters); isko chech krna hai kyuki last letter played letters mai nhi ja raha hai 
    }
    const start=()=>{
        const ar=["house","tree","chair","table","hall"]
        const x=ar[Math.floor(Math.random()*(ar.length))]
        setActualWord(x);
        setPlayedLetters([]);
    }
    
    useEffect(()=>{
        setTimeout(() => {
            if(isRunning && isWon)
            {
             start();
            }
        }, 2000);
        
    },[isWon]);

    return (
        <>
        {isRunning && <>
          <Lives livesLeft={lives} />
          <Word actualWord={actualWord} playedLetters={played_set}/>
          <Letters playedLetters={played_set} onSelect={guess}/>  
        </>}   

        <Start onStart={start} />

        {isRunning && (isWon ?<h1 id="Result">Congratulation You Won!</h1> :<h1 id="Result"></h1>)}
        {!isRunning && (isWon ?<h1 id="Result"></h1>:<h1 id="Result">Sorry You Loss!</h1>)}

        </>
    )
}