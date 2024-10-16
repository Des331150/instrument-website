// this function takes a random input from the computer
function getComputerChoice() {
    const words = ["rock", "paper", "scissors"];
    return words[Math.floor(Math.random() * words.length)];
}

// this function takes input from the user
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
function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "tie";
        } else if (
            (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
            (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") ||
            (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper")
        ) {
            return "win";
        } else {
            return "lose";
        }
    }

    // this section of the code displays why the user lost or won and gives a score
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    const result = playRound(humanChoice, computerChoice);

    if (result === "win") {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
    } else if (result === "lose") {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    } else {
        console.log(`IT'S A TIE. Both chose ${humanChoice}.`);
    }
}

let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
    playGame();
}

console.log(`Final Score: Human - ${humanScore}, Computer - ${computerScore}`);





