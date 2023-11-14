import React from 'react'

export default function Lives({ livesLeft }){
    return (    
        <div id="live">
            <h1>
                Lives: {livesLeft};
            </h1>
        </div>    
    )

}