import React from 'react'

// used an alert to display to the user the instructions on how to play the game
export function Buttonhelp(props){
    const helpUser = () =>{

        alert(props.help)
    }
  return (
    // if the button is clicked the alert will pop up
<button className='helpuser' onClick={helpUser}>Help?</button>
  )
}
