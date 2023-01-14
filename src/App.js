import './App.css';
import { Buttonhelp } from './components/Buttonhelp';
import { Header } from './components/Header';
import { Figure } from './components/Figure';
import { IncorrectLetter } from './components/IncorrectLetter';
import Displaywords from './components/Displaywords';
import { useState } from 'react';
import { useEffect } from 'react';
import { Alreadyused } from './help/Helpers';
import { Popups } from './components/Popups';
import { Notification } from './components/Notification';

// the words that the user needs to guess correctly
const words = ["javascript","python","react","java","git","ruby","html","css","mongo","c"]

// this function allows the words to be chosen randomly
let selectedWords = words[Math.floor(Math.random() * words.length)]

function App() {

  const [playable,setPlayable] = useState(true);
  const [incorrectLetters,setIncorrectLetters] = useState([]);
  const [correctLetters,setCorrectLetters] = useState([])
  const [showNotification,setShowNotification] = useState(false)

  useEffect(() =>{
  const keysdown = event =>{
    const {key, keyCode} = event;

    // used keycodes so that the user can use their keyboard to enter the letters they want to use
    if(playable && keyCode >= 65 && keyCode <= 90){
     const letter = key.toLowerCase();

    //  these if statement functions below will check whether the word the user has entered has already been
    // used
     if(selectedWords.includes(letter)){
     if(!correctLetters.includes(letter)){
      // this going to take our current letter and make a new array
      // spreading all the words so you can ass your new letter
        setCorrectLetters(correctLetters => [... correctLetters, letter])
     }else{
      // this will display the message word has already been used
      Alreadyused(setShowNotification)
     }
     }else{
       if(!incorrectLetters.includes(letter)){
        setIncorrectLetters(incorrectLetters =>[... incorrectLetters, letter])
       }else{
        Alreadyused(setShowNotification)
       }
     }
    }
  }
  // used one event listener everytime the app renders
  // added one because the app will be slower if i add too many
window.addEventListener('keydown',keysdown);

// this function will clean the event listener above each time so at any time their is only one event listener running
return () => window.removeEventListener('keydown', keysdown)

// dependency list
// added it here show that the notifications do not pop up everytime the app renders
// added an array so that it can be called on the initial render
  }, [correctLetters,incorrectLetters,playable])

  // this function will run restarting the game with a new word or letter regardless if the user wins or losses
function Retry(){
  setPlayable(true);

  // it resets the arrays back to empty arrays
  setCorrectLetters([]);
  setIncorrectLetters([]);

  // it then chooses a random word in the array for the user to guess
  const anyWord = Math.floor(Math.random() * words.length)
  selectedWords = words[anyWord]
}

  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure  incorrectLetters={incorrectLetters}/>
        <IncorrectLetter  incorrectLetters={incorrectLetters}/>
        {/* the props that will display the unknown bar and words to the user */}
        <Displaywords selectedWords={selectedWords} correctLetters={correctLetters}/>
      </div>

      {/*in a seperate div so that the styles do not interfere with one another  */}
      {/* all the props that i used for the game */}
      <Popups correctLetters={correctLetters} incorrectLetters={incorrectLetters} 
        selectedWords={selectedWords} setPlayable={setPlayable} Retry={Retry}/>
      <Notification  showNotification={showNotification}/>
      {/* the help button will display the following message to the user */}
      <Buttonhelp help ={`1.You have 6 chances to guess the programming language correctly.
2.If the stickmans body appears fully on the pole you lose.
3.You cant enter a letter twice once it has already been used.`} />
    </>
  );
}

export default App;
