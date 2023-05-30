"use strict";

// selector for id dom element
const player0 = document.querySelector(".player--0"); // player 0
const player1 = document.querySelector(".player--1"); // player 1
const score0El = document.querySelector("#score--0"); // selector for id
const score1El = document.getElementById("score--1"); // another way to get id
const diceEl = document.querySelector(".dice"); // dice img
const btnNew = document.querySelector(".btn--new"); // new game btn
const btnRoll = document.querySelector(".btn--roll"); // roll btn
const btnHold = document.querySelector(".btn--hold"); // hold btn
const current0El = document.getElementById("current--0"); // current score of player 0
const current1El = document.getElementById("current--1"); // current score of player 1

// starting condtions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let isGameActive = true;

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0; // player 0 is first player, player 1 is second player

// Rolling Dice functionallity
function Roll() {
  if (isGameActive) {
    const num = Math.trunc(Math.random() * 6 + 1); // dice roll 1-6
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${num}.png`; // manipulate the src of a class
    if (num !== 1) {
      // add dice to current
      currentScore += num;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // active player current score
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      // alternating toggles
      player0.classList.toggle("player--active"); // add or remove a class to element
      player1.classList.toggle("player--active"); // add or remove a class to element
    }
  }
}
btnRoll.addEventListener("click", Roll);
btnHold.addEventListener("click", function () {
  diceEl.classList.add("hidden");
});

// when player use Hold btn
btnHold.addEventListener("click", function () {
  if (isGameActive) {
    scores[activePlayer] += currentScore;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    // switch players after hold
    player0.classList.toggle("player--active"); // add or remove a class to element
    player1.classList.toggle("player--active"); // add or remove a class to element
    if (scores[activePlayer] >= 20) {
      isGameActive = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      player0.classList.remove("player--active");
      player1.classList.remove("player--active");
    }

    whosScore();
  }
});
// checks who is active player
const whosScore = function () {
  if (activePlayer === 0) {
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    activePlayer = 1;
  } else if (activePlayer === 1) {
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    activePlayer = 0;
  } else {
    console.error("HUH!");
  }
};

btnNew.addEventListener("click", function () {
  // reset the game
  document.getElementById("score--0").textContent = 0;
  document.getElementById("score--1").textContent = 0;
  document.getElementById("current--0").textContent = 0;
  document.getElementById("current--1").textContent = 0;
  scores[0] = 0;
  scores[1] = 0;
  activePlayer = 0;
  currentScore = 0;
  // reset background
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  isGameActive = true;
});
