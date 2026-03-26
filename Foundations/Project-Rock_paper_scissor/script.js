let playerScore = 0;
let computerScore = 0;

// Select DOM elements
const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('.round-result');
const scoreDiv = document.querySelector('.score');
const winnerDiv = document.querySelector('.final-winner');

// Computer Choice Logic
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Play a single round
function playRound(playerSelection) {
    if (playerScore === 5 || computerScore === 5) return; // Stop if game over

    const computerSelection = getComputerChoice();
    let result = "";

    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        result = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    updateDisplay(result);
    checkWinner();
}

// Update the UI
function updateDisplay(result) {
    resultDiv.textContent = result;
    scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

// Check for final winner
function checkWinner() {
    if (playerScore === 5) {
        winnerDiv.textContent = "CONGRATULATIONS! You won the game!";
        winnerDiv.style.color = "green";
    } else if (computerScore === 5) {
        winnerDiv.textContent = "GAME OVER! The computer won.";
        winnerDiv.style.color = "red";
    }
}

// Event Listeners for buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});