import React from 'react';


// const ALL_ALPHABETS=[..."QWERTYUIOPASDFGHJKLZXCVBNM"];
// const ALL_ALPHABETS=[..."qwertyuiopasdfghjklzxcvbnm"];
const key1=[... "qwertyuiop"]
const key2=[... "asdfghjkl"]
const key3=[... "zxcvbnm"]

export default function Letters({
    playedLetters,onSelect
}){
    return (
        <div id="letter">
            <h1 id="alpha">
            { 
            key1.map((alphabet) =>(
                <button id="lettersbutton"
                
                onClick= {() => onSelect(alphabet.toLowerCase())}
                disabled={playedLetters.has(alphabet.toLowerCase())}
                >
                    {alphabet=alphabet.toUpperCase()}
                </button>  
                )  )
            }
            <br />
            <div className="key2">
            { 
            key2.map((alphabet) =>(
                <button id="lettersbutton"
                
                onClick= {() => onSelect(alphabet.toLowerCase())}
                disabled={playedLetters.has(alphabet.toLowerCase())}
                >
                    {alphabet=alphabet.toUpperCase()}
                </button>  
                )  )
            }
            </div>
            <div className="key3">
            { 
            key3.map((alphabet) =>(
                <button id="lettersbutton"
                
                onClick= {() => onSelect(alphabet.toLowerCase())}
                disabled={playedLetters.has(alphabet.toLowerCase())}
                >
                    {alphabet=alphabet.toUpperCase()}
                </button>  
                )  )
            }
            </div>
            </h1>
        </div>
    )
}