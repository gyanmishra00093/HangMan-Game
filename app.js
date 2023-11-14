import React from 'react';
import Game from './components/game'
import { createRoot } from 'react-dom/client';

const App = () => {
    return (
     <div id="id1">
        <div id="id2">
             <h1>"HangMan Game Lets Play It"</h1>
        </div>    
     <Game />
     </div>
    )  
};
 
// ReactDOM.render(<App />, document.getElementById("app"));

const xx = document.getElementById('gyan');
const root = createRoot(xx); 
root.render(<App  />);