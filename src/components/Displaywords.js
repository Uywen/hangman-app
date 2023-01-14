import React from 'react'

function Displaywords({selectedWords, correctLetters}){
  return (
    <div className="word">
      {/* mapping through each selected word to see if it is the correct word
       */}
       {/* Checking through the correctLtters array it would then disaply the letter in the span */}
    {selectedWords.split("").map( (letter, i) =>{
      return(
        // the i is for the index of the letter in the word
        <span className='letter' key={i}>
          {correctLetters.includes(letter)? letter : ""}
        </span>
      
      )})}
    </div>
  )
}

export default Displaywords