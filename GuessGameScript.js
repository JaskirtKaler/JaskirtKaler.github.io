"use strict";
/* how to interact with the message class in html file querySelector(".message").textContent
//NOTE
* maxNum changes range of guessing numbers
*/
const maxNum = 100; // change max number in one location
const minus = 0.05;
let num = Math.trunc(Math.random() * maxNum + 1);
document.querySelector(".number").value = num;
let score = Number(document.querySelector(".score").textContent); // game score
let highscore = 0;
// check btn function expression passed
// nextStep runs the condtions if Enter or, Click botton clicked
let nextStep = function () {
  const guess = Number(document.querySelector(".guess").value);
  if (score > 0) {
    /*
     * 0 = false
     *  condtions depending on user answer to high, to low , just right
     * also takes note of user best attempt
     *
     *
     */
    if (!guess) {
      // no input
      score = score - maxNum * 0.05;
      document.querySelector(".message").textContent = "no Number🚫";
      document.querySelector(".score").textContent = String(score);
    } else if (guess > num) {
      // guess to high
      score = score - maxNum * 0.05;
      document.querySelector(".message").textContent = "To High!🤔";
      document.querySelector(".score").textContent = String(score);
    } else if (guess < num) {
      // guess to low
      score = score - maxNum * 0.05;
      document.querySelector(".message").textContent = "To Low🤔";
      document.querySelector(".score").textContent = String(score);
      // when player wins
    } else if (guess === num) {
      document.querySelector(".message").textContent = "You guessed it!!🎉";
      document.querySelector(".number").textContent = num;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "#60b347"; // css property using camleCase
      document.querySelector(".number").style.width = "30rem"; // use string for css property
      if (score > highscore) {
        document.querySelector(".highscore").textContent = score;
        highscore = score;
      }
    }
  } else {
    document.querySelector(".message").textContent =
      "You have lost.😟 Try again!";
  }
};

// if screen check botton hit
document.querySelector(".check").addEventListener("click", nextStep); // listen for events

// again btn fucntion expression passed
// change maxNum here
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = " "; // make input box empty
  document.querySelector(".number").textContent = "?"; // hide number
  num = Math.trunc(Math.random() * maxNum + 1); // gen new secret number
  document.querySelector(".message").textContent = "Start guessing..."; // start new game message
  document.querySelector(".score").textContent = maxNum; // reset display score
  score = maxNum; // reset game score
});

/*
 * use enter key as click in program
 * @param e is object of the key you pressed
 * Using the keyboard enter key
 *
 */
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    nextStep();
  }
});
