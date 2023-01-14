// used a function that contains a timeout message to display that the user already entered a letter in 2 seconds
export function Alreadyused(setter){
    setter(true);
    setTimeout(() => {
        setter(false);
    },2000)
}

// if the letters the user enter contains the letters for each word
// the decision will be a win
export function checkforWin(correct,incorrect,word){
 let decision = "win";

  word.split('').forEach(letter => {
    if(!correct.includes(letter)){
        decision = " ";
    }
})
  
// if the length of words the user enters that are incorrect exceeds 6 the lose pop up will
// be didsplayed
if(incorrect.length === 6) decision = "lose";

return decision
}