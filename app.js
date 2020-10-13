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
    winningNum = 2,
    guessesLeft = 3;

const game = document.getElementById("game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.querySelector(".guess-btn")

