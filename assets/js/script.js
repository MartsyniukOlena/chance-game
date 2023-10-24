//Welcome mesage is displayed when the user opens the game
let messageContainer = document.getElementById("message-container");
function showWelcomeMessage() {
    messageContainer.style.display = "flex";
}
function hideWelcomeMessage() {
    messageContainer.style.display = "none"; 
}
showWelcomeMessage();

//Hide the welcome message when the user clicks a "Start game" button
let startButton = document.getElementById("start-button");

startButton.addEventListener("click", function () {
    hideWelcomeMessage();
});

// Possible choices
let choices = ["rock", "paper", "scissors", "lizard", "spock"];

let computerChoice = "";
let userChoice = "";
let userScore = 0;
let computerScore = 0;
let tries = 5;

// Function to generate computer's choice

function generateComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 5);
    return choices[randomChoice];
    let computerChoice = document.getElementById("computer-choice");
}