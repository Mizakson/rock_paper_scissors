// rock paper scissors program


/*
getComputerChoice function

array of possible choices - rock, paper scissors

get a random number using Math.floor and Math.random from 0-2
number is from 0 to 2 because array indexing starts at 0

computerChoice is a random element of the rpsArray
*/

function getComputerChoice() {
    const rpsArray = ['Rock', 'Paper', 'Scissors'];
    const randomInt = Math.floor(Math.random() * 3);
    const computerChoice = rpsArray[randomInt];
    return computerChoice;
}


/* 
playRound function explanation here
---
*/

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'DRAW --- rock ties with rock'
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'DRAW --- paper ties with paper'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'DRAW --- scissors ties with scissors'
    }
}