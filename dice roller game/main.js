"use strict";

//Selecting elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;

btnRoll.addEventListener("click", function () {
  //generating a random dice roll
  const dice = Math.round(Math.random() * 6);
  console.log(dice);
  //display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  //check for rolled 1
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    //switch to next player
  }
});
