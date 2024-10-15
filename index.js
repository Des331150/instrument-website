function getComputerChoice() {
    const words = ["rock", "paper", "scissors"];
    return words[Math.floor(Math.random() * words.length)];
}


function getHumanChoice() {
    const userInput = window.prompt("Rock,Paper or Scissors?");
    const choice = userInput ? userInput.toLowerCase() : "";

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice
    } else {
        return "Pick one."
    }
}


// remember to put the variables below in a function to get their score.
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`IT'S A TIE. Both chose ${humanChoice}.`);
    } else if (
        (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
        (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") ||
        (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log(humanChoice);
console.log(computerChoice);
playRound(humanChoice, computerChoice);

