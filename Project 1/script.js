'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);

  if (!guessingNumber) {
    displayMessage('Введите число!');
    //Player won
  } else if (guessingNumber === secretNumber) {
    displayMessage('Правильно!');
    document.querySelector('.question').textContent = secretNumber;
    console.log(secretNumber);
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Too high
  } else if (!guessingNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Вы проиграли!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Начни угадывать!');
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.question').textContent = '???';
  document.querySelector('.number-input').value = '';
});
