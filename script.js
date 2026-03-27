let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win!";
        userScore++;
    } else {
        result = "Computer Wins!";
        computerScore++;
    }

    document.getElementById("userChoice").innerText = "👤 User: " + userChoice;
    document.getElementById("computerChoice").innerText = "💻 Computer: " + computerChoice;
    document.getElementById("result").innerText = result;

    document.getElementById("userScore").innerText = userScore;
    document.getElementById("computerScore").innerText = computerScore;
}

// RESET FUNCTION
function resetGame() {
    userScore = 0;
    computerScore = 0;

    document.getElementById("userScore").innerText = 0;
    document.getElementById("computerScore").innerText = 0;

    document.getElementById("userChoice").innerText = "";
    document.getElementById("computerChoice").innerText = "";
    document.getElementById("result").innerText = "Game Reset!";
}