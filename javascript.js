// rock paper scissors program


// scores
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const rpsArray = ['rock', 'paper', 'scissors'];
    const randomInt = Math.floor(Math.random() * 3);
    const computerChoice = rpsArray[randomInt];
    return computerChoice;
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'DRAW --- rock ties with rock';
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'DRAW --- paper ties with paper';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'DRAW --- scissors ties with scissors';
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return 'LOSS --- paper beats rock';
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return 'LOSS --- scissors beats paper';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return 'LOSS --- rock beats scissors';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return 'WIN --- rock beats scissors';
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'WIN --- paper beats rock';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return 'WIN --- scissors beats paper';
    }
}



function game() {
    // for (let i = 0; i < 5; i++) {
    //     const playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
    //     const computerSelection = getComputerChoice();
    //     console.log(playRound(playerSelection, computerSelection));
    // }

    if (playerScore > computerScore) {
        return 'You win! Good job!';
    }
    else if (computerScore > playerScore) {
        return 'You lose! Better luck next time!'
    }
    else {
        return 'You tied! Try again!'
    }
}

console.log(game());