/*
GAME FUNCTION:
  - Player must guess a number between a min and max
  - Player gets a certain amount of guesses
  - Ntoify player of guesses remaing
  - Notify the player of the correct answer if lose
  - Let player choose to play again
*/

let min = 1,
    max = 10,
    winningNum = getWinningNum(min, max),
    guessesLeft = 3;

const game = document.getElementById("game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.querySelector("#guess-btn"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function(){
  let guess = parseInt(guessInput.value);
  console.log(guess)

  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red")
  

  } if(guess === winningNum){
      gameOver(true, `${winningNum} is correct. You win!`)
  } else {
    guessesLeft -= 1;
    
    if(guessesLeft < 1) {
      gameOver(false, `You're all out of guesses. The correct numbers was ${winningNum}`)
      guessBtn.value = "Play Again";
      guessBtn.addEventListener("click", function(e){
        location.reload();
      })

      // guessInput.disabled = true;
      console.log("random #: ", winningNum);
      console.log("guessesLeft: ", guessesLeft)
    } else {
      guessInput.disabled = false;
      guessInput.style.borderColor = "red"
      guessInput.value = "";
      setMessage( `${guess} is incorrect. You have ${guessesLeft} left!`, "red");
      console.log("guessesLeft: ", guessesLeft);
      console.log("random #: ", winningNum);
    }

  }
  function gameOver(won, msg) {
    let color;
    won === true ? color = "green" : color = "red";
    
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    
    setMessage(msg);
  }

})

function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}

function getWinningNum(min, max){
  return winningNum = Math.floor(Math.random()*(max-min+1)+min);
  
}