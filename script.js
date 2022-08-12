"use strict";

const chanceNumber = document.querySelector(".chance-number");
const btnRollDice = document.querySelector(".btn--roll-dice");
const currentScore = document.querySelectorAll(".current-score");
const box = document.querySelectorAll(".box");
const totalScore = document.querySelectorAll(".totalscore");
const hold = document.querySelector(".btn--hold");
const newGame = document.querySelector(".btn--new-game");
const button = document.querySelectorAll(".btn");

let turn = 1;
let lastScore = 0;
let lastTotalScore1 = 0;
let lastTotalScore2 = 0;
let playing = true;

const btnColorChange = function () {
  if (turn === 1) {
    button[0].style.color = "#a257e9";
    button[1].style.color = "#fff";
    button[0].style.backgroundColor = "#fff";
    button[1].style.backgroundColor = "#a257e9";
    button[0].style.boxShadow = "inset 0 0 0 3px #a257e9";
    button[1].style.boxShadow = "inset 0 0 0 3px #a257e9";
  } else {
    button[1].style.color = "#a257e9";
    button[0].style.color = "#fff";
    button[1].style.backgroundColor = "#fff";
    button[0].style.backgroundColor = "#a257e9";
    button[1].style.boxShadow = "inset 0 0 0 3px #a257e9";
    button[0].style.boxShadow = "inset 0 0 0 3px #a257e9";
  }
};

btnColorChange();

btnRollDice.addEventListener("click", function () {
  if (playing) {
    let diceNumber = Math.trunc(Math.random() * 6 + 1);
    chanceNumber.textContent = diceNumber;
    if (diceNumber !== 1 && turn === 1) {
      lastScore = lastScore + diceNumber;
      currentScore[0].textContent = lastScore;
    } else if (diceNumber !== 1 && turn === 0) {
      lastScore = lastScore + diceNumber;
      currentScore[1].textContent = lastScore;
    } else if (diceNumber === 1 && turn === 1) {
      lastScore = 0;
      currentScore[0].textContent = lastScore;
      box[0].classList.add("overlay");
      box[1].classList.remove("overlay");
      chanceNumber.textContent = " :) ";
      turn = 0;
      btnColorChange();
    } else if (diceNumber === 1 && turn === 0) {
      lastScore = 0;
      currentScore[1].textContent = lastScore;
      box[1].classList.add("overlay");
      box[0].classList.remove("overlay");
      chanceNumber.textContent = " :) ";
      turn = 1;
      btnColorChange();
    }
  }
});

hold.addEventListener("click", function () {
  if (playing) {
    if (turn === 1) {
      lastTotalScore1 = lastTotalScore1 + lastScore;
      totalScore[0].textContent = lastTotalScore1;
      if (lastTotalScore1 < 100) {
        lastScore = 0;
        currentScore[0].textContent = 0;
        box[0].classList.add("overlay");
        box[1].classList.remove("overlay");
        turn = 0;
        btnColorChange();
        chanceNumber.textContent = " ";
      } else {
        playing = false;
        chanceNumber.style.width = "100%";
        chanceNumber.style.backgroundColor = "#80f7ff";
        chanceNumber.textContent = "PLAYER 1  WINS!!!";
      }
    } else {
      lastTotalScore2 = lastTotalScore2 + lastScore;
      totalScore[1].textContent = lastTotalScore2;
      if (lastTotalScore2 < 100) {
        lastScore = 0;
        currentScore[1].textContent = 0;
        box[1].classList.add("overlay");
        box[0].classList.remove("overlay");
        turn = 1;
        btnColorChange();
        chanceNumber.textContent = " ";
      } else {
        playing = false;
        chanceNumber.style.width = "100%";
        chanceNumber.style.backgroundColor = "#80f7ff";
        chanceNumber.textContent = "PLAYER 2 WINS!!!";
      }
    }
  }
});

newGame.addEventListener("click", function () {
  playing = true;
  turn = 1;
  btnColorChange();
  lastScore = 0;
  lastTotalScore1 = 0;
  lastTotalScore2 = 0;

  currentScore[0].textContent = 0;
  currentScore[1].textContent = 0;
  totalScore[0].textContent = 0;
  totalScore[1].textContent = 0;

  box[1].classList.add("overlay");
  box[0].classList.remove("overlay");

  chanceNumber.style.width = "8rem";
  chanceNumber.style.backgroundColor = "#fff";
  chanceNumber.textContent = " ";
});
