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