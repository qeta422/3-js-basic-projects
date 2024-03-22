"use strict";

let secretNumber = Math.round(Math.random() * 20);
let score = 20;
let again = document.querySelector(".again");

again.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.round(Math.random() * 20);

  document.querySelector(".message").textContent = "Start guessing...";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";
    //the player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "25rem";

    //guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 you lost the game!";
      document.querySelector(".score").textContent = 0;
    }
    //guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 you lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
