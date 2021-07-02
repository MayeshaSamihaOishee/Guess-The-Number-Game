let correctNumber = getRandomNumber();
//console.log(correctNumber);

let guesses = [];

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
    getRandomNumber();
}

function playGame(){
  let numberGuess = document.getElementById('number-guess').value;
   displayResult(numberGuess);
   saveGuessHistory(numberGuess);
   displayHistory();
}

function displayResult(numberGuess){
  if (numberGuess>correctNumber){
   showNumberAbove();
  }
  else if (numberGuess<correctNumber) {
   showNumberBelow();
  }
  else {
    console.log("you have guessed the correct number");
    showYouWon();
  }
}

function initGame(){
  // *CODE GOES BELOW HERE *
}

function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

function getRandomNumber(){
  let randomNumber= Math.random();
  let wholeNumber = Math.floor(randomNumber*100) + 1;
  return wholeNumber;

}

function saveGuessHistory(guess) {
  guesses.push(guess);
  
}

function displayHistory() {
  let index=guesses.length-1; 
  let list = "<ul class='list-group'>";
  while(index>0){
list+= "<li class='list-group-item'>" + "You have guessed " + guesses[index] + "</li>";
index=index-1;
  } 
  list += '</ul>'
   document.getElementById("history").innerHTML = list;
}

function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "You guessed the correct number"
  let dialog = getDialog ('won',text);
  console.log(dialog);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high than the correct number!"
  let dialog = getDialog('warning', text);
  console.log(dialog);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low than the correct number!"
  let dialog = getDialog('warning', text);
  console.log(dialog);
  document.getElementById("result").innerHTML = dialog;
}
