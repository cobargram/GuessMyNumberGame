"use strict";
function getRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

let randomNumber = getRandomNumber();
let currentScore = Number(document.querySelector(".currentScore").textContent);
let currentHighScore = 0;

let resultMessage = function (message) {
  document.querySelector(".numberResult").textContent = message;
  return message;
};

document.querySelector(".checkNumber").addEventListener("click", function () {
  const enteredNumberElement = Number(
    document.querySelector(".enteredNumber").value
  ); // convert inputed number from string to number

  if (!enteredNumberElement) {
    resultMessage("Enter a Number");
  } else if (enteredNumberElement < 1 || enteredNumberElement > 20) {
    resultMessage("Number is out of range");
  } else if (enteredNumberElement !== randomNumber) {
    currentScore = currentScore - 1;
    document.querySelector(".currentScore").textContent = currentScore;

    if (currentScore > 0) {
      resultMessage(
        enteredNumberElement < randomNumber
          ? "Number is too low"
          : "Number is too high"
      );
    } else {
      resultMessage("Sorry, You Lost the game");
      document.querySelector("body").style.backgroundColor = "pink";
    }
  } else if (enteredNumberElement === randomNumber) {
    resultMessage("Number is correct");
    document.querySelector("body").style.backgroundColor = "lightblue";
    document.querySelector(".displayValue").textContent = randomNumber;
    if (currentScore > currentHighScore) {
      currentHighScore = currentScore;
      document.querySelector(".highScore").textContent = currentHighScore;
    }
  }
});

document.querySelector(".restartGame").addEventListener("click", function () {
  randomNumber = getRandomNumber();
  document.querySelector(".displayValue").textContent = "?";
  currentScore = 20;
  document.querySelector(".currentScore").textContent = currentScore;
  document.querySelector(".enteredNumber").value = "";
  document.querySelector("body").style.backgroundColor = "whitesmoke";
});
