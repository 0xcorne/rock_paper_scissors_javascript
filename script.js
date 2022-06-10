/* 
Created with passion by Corné Adema / 0xcorne
GitHub: https://github.com/0xcorne
*/


const selectRock = document.getElementById('rock_image');
const selectPaper = document.getElementById('paper_image');
const selectScissors = document.getElementById('scissors_image');
const playerChoiceText = document.getElementById('player_choice');
const computerChoiceText = document.getElementById('computer_choice');
const newGameButton = document.getElementById('new_game');
const resultText = document.getElementById('result');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

let playerChoice;
let result;
let gameRunning;
let value;

const resultComputerChoice = function () {
  value = Math.random();
  if (value < 0.34) {
    return ROCK;
  } else if (value < 0.68) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

function textHTML() {
    playerChoiceText.innerHTML = `YOUR CHOICE: ${playerChoice}`;
    computerChoiceText.innerHTML = `COMPUTER CHOICE: ${computerChoice}`;
    resultText.innerHTML = result;
}

let computerChoice = resultComputerChoice();

const resultWinner = function(playerChoice) {
    computerChoice = resultComputerChoice()
  if (
    (playerChoice === ROCK && computerChoice === ROCK) ||
    (playerChoice === PAPER && computerChoice === PAPER) ||
    (playerChoice === SCISSORS && computerChoice === SCISSORS)
  ) {
    alert('The result is a draw.');
    result = `RESULT: DRAW`;
    playerChoiceText.innerHTML = `YOUR CHOICE: ${playerChoice}`;
    computerChoiceText.innerHTML = `COMPUTER CHOICE: ${computerChoice}`;
    resultText.innerHTML = result;
  } else if (
    (playerChoice === ROCK && computerChoice === SCISSORS) ||
    (playerChoice == PAPER && computerChoice == ROCK) ||
    (playerChoice == SCISSORS && computerChoice == PAPER)
  ) {
    alert('You win!');
    result = `RESULT: YOU WIN 🎉`;
    playerChoiceText.innerHTML = `YOUR CHOICE: ${playerChoice}`;
    computerChoiceText.innerHTML = `COMPUTER CHOICE: ${computerChoice}`;
    resultText.innerHTML = result;
  } else {
    alert('You lose.');
    result = `RESULT: YOU LOSE 😔`;
    playerChoiceText.innerHTML = `YOUR CHOICE: ${playerChoice}`;
    computerChoiceText.innerHTML = `COMPUTER CHOICE: ${computerChoice}`;
    resultText.innerHTML = result;
  }
};

function rock_choice() {
  if (gameRunning) {
    alert("CLICK 'START NEW GAME' BUTTON");
    return;
  }
  resultWinner(ROCK);
  gameRunning = true;
}

function paper_choice() {
  if (gameRunning) {
    alert("CLICK 'START NEW GAME' BUTTON");
    return;
  }
  resultWinner(PAPER);
  gameRunning = true;
}

function scissors_choice() {
  if (gameRunning) {
    alert("CLICK 'START NEW GAME' BUTTON");
    return;
  }
  resultWinner(SCISSORS);
  gameRunning = true;
}


function new_game() {
  playerChoiceText.innerHTML = 'YOUR CHOICE: ';
  computerChoiceText.innerHTML = 'COMPUTER CHOICE: ';
  resultText.innerHTML = 'RESULT: ';
  gameRunning = false;
  computerChoice;
}

new_game()

selectRock.addEventListener('click', rock_choice);
selectPaper.addEventListener('click', paper_choice)
selectScissors.addEventListener('click', scissors_choice)
newGameButton.addEventListener('click', new_game);
