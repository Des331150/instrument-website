function getComputerChoice() {
    const words = ["rock", "paper", "scissors"];
    const randomIndex = [Math.floor(Math.random() * words.length)];
    return words[randomIndex];
}

console.log(getComputerChoice());

function getHumanChoice() {
    let userInput = window.prompt("Rock,Paper or Scissors?");

    let result;
    if (userInput.toLowerCase() === "rock")
        result = "rock";
    else if (userInput.toLowerCase() === "paper")
        result = "paper";
    else if (userInput.toLowerCase() === "scissors")
        result = "scissors";
    else
        result = "Pick one.";

    return result;
}

console.log(getHumanChoice());




