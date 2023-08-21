// rock paper scissors program


// scores
let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const resultDiv = document.querySelector('.result');

function getComputerChoice() {
    const rpsArray = ['rock', 'paper', 'scissors'];
    const randomInt = Math.floor(Math.random() * 3);
    const computerChoice = rpsArray[randomInt];
    return computerChoice;
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        const p = document.createElement('p');
        p.textContent = 'DRAW --- rock ties with rock';
        resultDiv.appendChild(p);
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        const p = document.createElement('p');
        p.textContent = 'DRAW --- paper ties with paper';
        resultDiv.appendChild(p);
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        const p = document.createElement('p');
        p.textContent = 'DRAW --- scissors ties with scissors';
        resultDiv.appendChild(p);
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        const p = document.createElement('p');
        p.textContent = 'LOSS --- paper beats rock';
        resultDiv.appendChild(p);
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        const p = document.createElement('p');
        p.textContent = 'LOSS --- scissors beats paper';
        resultDiv.appendChild(p);
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        const p = document.createElement('p');
        p.textContent = 'LOSS --- rock beats scissors';
        resultDiv.appendChild(p);
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        const p = document.createElement('p');
        p.textContent = 'WIN --- rock beats scissors';
        resultDiv.appendChild(p);
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        const p = document.createElement('p');
        p.textContent = 'WIN --- paper beats rock';
        resultDiv.appendChild(p);
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        const p = document.createElement('p');
        p.textContent = 'WIN --- scissors beats paper';
        resultDiv.appendChild(p);
    }
}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
});

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
});


// function game() {
//     // for (let i = 0; i < 5; i++) {
//     //     const playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
//     //     const computerSelection = getComputerChoice();
//     //     console.log(playRound(playerSelection, computerSelection));
//     // }

//     if (playerScore > computerScore) {
//         return 'You win! Good job!';
//     }
//     else if (computerScore > playerScore) {
//         return 'You lose! Better luck next time!'
//     }
//     else {
//         return 'You tied! Try again!'
//     }
// }

console.log(game());