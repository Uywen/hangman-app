import React from 'react'
import { checkforWin } from '../help/Helpers';
import { useEffect } from 'react';

// imported the variables to check the correct and incorrect words
// aswell as added functionality to the retry button
export const Popups = ({selectedWords , correctLetters , incorrectLetters , setPlayable , Retry}) => {
    let winOrLOse="";
    let wordReveal="";
    let playable = true

    // if the letters correspond to the function used in "checkforWin this if statement will run"
    if( checkforWin(correctLetters,incorrectLetters,selectedWords) === "win"){
        winOrLOse = "You won";
        playable = false;
        // if the letters entered by the user are incorrect and they get the answer wrong this function will run
    }else if ( checkforWin(correctLetters,incorrectLetters,selectedWords) === "lose"){
        winOrLOse= "You lost";
        wordReveal=`the correct word is: ${selectedWords}`
        playable = false;
    }

    useEffect(() => setPlayable(playable))

  return (
    // whether the user wins or loses this style effect will appear asking the user to play
    // or tell the user correct word
    <div className='popup-container' style={winOrLOse !== "" ? {display:"flex"} : { }}>
     <div className='popup'>
     <h2>{winOrLOse}</h2>
     <h3>{wordReveal}</h3>
     <button onClick={Retry}>Play Again</button>
     </div>
    </div>
  )
}
