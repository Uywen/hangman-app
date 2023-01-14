import React from 'react'

export const IncorrectLetter = ({incorrectLetters}) => {
  return (
    <div className='wrong-letters-container'>
    <div>
        {incorrectLetters.length > 0 && <p>Incorrect letters:</p>}
        {incorrectLetters
        // will display the letters that the user entered
        .map((letter, i) => <span key={i}>{letter}</span>)
        // the comma is just going to add spce in the spans
        .reduce((previous,current) => previous === null ? [current] : [previous, ", " , current], null)}
    </div>
    </div>
  )
}
