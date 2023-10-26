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
}

// Function to determine the winner
function winner(user, computer) {
    let rules = {
        rock: {beats: ["scissors", "lizard"], lossesTo: ["paper", "spock"]},
        paper: { beats: ["rock", "spock"], lossesTo: ["lizard", "scissors"]},
        scissors: { beats: ["paper", "lizard"], lossesTo: ["rock", "spock"]},
        spock: { beats: ["scissors", "rock"], lossesTo: ["paper", "lizard"]},
        lizard: { beats: ["paper", "spock"], lossesTo: ["scissors", "rock"]},
    };

    if (user === computer) {
        return "It is a tie!";
    }

    if (rules[user].beats.includes(computer)) {
        return "You win!";
    } else {
        return "Sheldon wins!";
    }
}

// Function to update the changes
function reflectChanges(user, computer) {
    let result = winner(user, computer);

    document.getElementById("computer-choice").textContent = computer;
    document.getElementById("result").textContent = result;

    if (result === "You win!") {
        userScore++;
    } else if (result === "Sheldon wins!") {
        computerScore++;
    }
    document.getElementById("score").textContent = `You: ${userScore}   Sheldon: ${computerScore}`;

    tries--;
    document.getElementById("tries").textContent = tries;

    if (tries === 0) {
        endGame();
    }
}

// Function to end the game

function endGame() {
    if (userScore > computerScore) {
        alert("You won the game!");
    } else if (userScore < computerScore) {
        alert("Sheldon won the game!");
    } else {
        alert("It is a tie!");
    }

// Disable buttons
for (let choice of choices) {
    document.getElementById(choice).disabled = true;
}
document.getElementById("play-again").style.display = "block";
}

// Event listeners for user's choice
for (let choice of choices) {
    document.getElementById(choice).addEventListener("click", function() {
        userChoice = choice;
        document.getElementById("user-choice").textContent = userChoice; // Update the user's choice
        computerChoice = generateComputerChoice();
        reflectChanges(userChoice, computerChoice);
    });
}

// Event listener for "Play Again" button
document.getElementById("play-again").addEventListener("click", function() {
    userChoice = "";
    computerChoice = "";
    userScore = 0;
    computerScore = 0;
    tries = 5;
    document.getElementById("computer-choice").textContent = "";
    document.getElementById("user-choice").textContent = "";
    document.getElementById("result").textContent = "";
    document.getElementById("score").textContent = "You:  0  Sheldon:  0";
    document.getElementById("tries").textContent = tries;

    // Enable buttons
    for (let choice of choices) {
        document.getElementById(choice).disabled = false;
    }
    this.style.display = "none";
});