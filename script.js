const playerChoiceButtons = document.getElementById("player-choice-buttons");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const points = document.getElementById("points");
let playerPoints = 0;
let computerPoints = 0;

const playerResults = document.getElementById("player-results");
let computerResults = document.getElementById("computer-results");

let results = document.getElementById("results");
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");

const winner = document.getElementById("winner");
winner.style.fontWeight = "bold"; 

const playAgain = document.createElement("button");
playAgain.innerHTML = "Play Again?";
container.appendChild(playAgain);
playAgain.style.position = "relative";
playAgain.style.top = "50%";
playAgain.style.width = "150px";
playAgain.style.height = "50px";
playAgain.style.visibility = "hidden";

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 12) + 1;
    if (computerChoice < 5) {
        return "rock";
    } else if (computerChoice < 9) {
        return "paper";
    } else {
        return "scissors";
    }
}

function displayPoints() {
    playerResults.textContent = `Your Points: ${playerPoints}`;
    computerResults.textContent = `Computer's Points: ${computerPoints}`;
    points.style.backgroundColor = "rgb(186, 214, 224)";
    points.style.opacity = "0.7";
}

function round(playerSelection) {
    const computerSelection = computerPlay();
    
    playerChoice.style.fontSize = "20px";
    computerChoice.style.fontSize = "20px";
    playerChoice.textContent =  `You chose: ${playerSelection}`;
    computerChoice.textContent =  `The computer chose: ${computerSelection}`;

    results.style.fontSize = "20px";
    //Tie
    if (playerSelection == computerSelection) {
        results.textContent = "It's a Tie!";
    //Player Wins Conditions
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        results.textContent = "You Won! Your Rock easily smashes the computer's scissor blades.";
        playerPoints++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        results.textContent = "You Won! Your sharp Scissor blades slice through the computer's paper.";
        playerPoints++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        results.textContent = "You Won! Your paper cunningly enfolds the computer's rock.";
        playerPoints++;
    //Computer Wins Conditions
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        results.textContent = "You Lost! The computer's Rock easily smashes your scissor blades.";
        computerPoints++;
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        results.textContent = "You Lost! The computer's sharp Scissor blades slice through your paper.";
        computerPoints++;
    } else {
        results.textContent = "You Lost! The computer's paper cunningly enfolds your rock.";
        computerPoints++;
    }
    displayPoints();
    game();
}

function game() {
    winner.style.fontSize = "23px";
    if (playerPoints == 5 || computerPoints == 5) {
        if (playerPoints > computerPoints) {
            if (playerPoints - computerPoints == 1) {
                winner.textContent = "You defeated the computer by 1 point and won the RPS Championship!";
            } else {
                winner.textContent = `You defeated the computer by ${playerPoints - computerPoints} points and won the RPS Championship!`;
            }
        } else if (playerPoints < computerPoints) {
            if (computerPoints - playerPoints == 1) {
                winner.textContent = "The computer destroyed you by 1 point and won the RPS Championship! :(";
            } else {
                winner.textContent = `The computer destroyed you by ${computerPoints - playerPoints} points and won the RPS Championship! :(`;
            }
        }
        playAgain.style.visibility = "visible";
    } 
}

rock.addEventListener("click", () => {
    round("rock");
});
paper.addEventListener("click", () => {
    round("paper");
});
scissors.addEventListener("click", () => {
    round("scissors");
});

function endGame() {
    if (playerPoints == 5 || computerPoints == 5) {
        rock.removeEventListener("click", () => {
            round("rock");
        });
        paper.removeEventListener("click", () => {
            round("paper");
        });
        scissors.removeEventListener("click", () => {
            round("scissors");
        });
    }
}

endGame();

playAgain.addEventListener("click", () => {
    playerChoice.textContent = "";
    computerChoice.textContent = "";
    results.textContent = "";
    playerResults.textContent = "";
    computerResults.textContent = "";
    playerPoints = 0;
    computerPoints = 0;
    winner.textContent = "";
    playAgain.style.visibility = "hidden";
    points.style.backgroundColor = "transparent";
});