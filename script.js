const container = document.getElementById("container");

let countRound = 0;

const playerChoiceButtons = document.getElementById("player-choice-buttons");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let playerPoints = 0/* document.getElementById("player-points") */;
let computerPoints = 0/* document.getElementById("computer-points") */;

const playerResults = document.getElementById("player-results");
let computerResults = document.getElementById("computer-results");

let results = document.getElementById("results");
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");

const winner = document.getElementById("winner");

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
}

function round(playerSelection) {
    const computerSelection = computerPlay();

    playerChoice.textContent =  `Your Chose: ${playerSelection}`;
    computerChoice.textContent =  `The Computer Chose: ${computerSelection}`;
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
    countRound++;
  /*   if (playerPoints === 5 || computerPoints == 5) {
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
    } */
}

/*
function game() {
    for(let i = 1; i < 6; i++) {
        if (i == 1) {
            playerPoints.textContent = s"Your Points: " + playerPoints;
            computerPoints.textContent = "Computer's Points: " + computerPoints;
            playerChoiceButtons.removeEventListener("click", e => {
                game();
            });
        } else if (i == 5) {
            countRound.textContent = "Final Round";
            playerPoints.textContent = `Your Points: ${playerPoints}`;
            computerPoints.textContent = `Computer's Points: ${computerPoints}`;
        } else {
            countRound.textContent = `Round ${i}`;
            playerPoints.textContent = `Your Points: ${playerPoints}`;
            computerPoints.textContent = `Computer's Points: ${computerPoints}`;
        }
    }
    if (playerPoints > computerPoints) {
        if (playerPoints - computerPoints == 1) {
            console.log("You defeated the computer by 1 point and won the RPS Championship!");
        } else {
            console.log(`You defeated the computer by ${playerPoints - computerPoints} points and won the RPS Championship!`);
        }
    } else if (playerPoints < computerPoints) {
        if (computerPoints - playerPoints == 1) {
            console.log("The computer destroyed you by 1 point and won the RPS Championship! :(");
        } else {
            console.log(`The computer destroyed you by ${computerPoints - playerPoints} points and won the RPS Championship! :(`);
        }
    } else {
        console.log("Oh my, it's a tie!\n\nTie Breaker Round Initiated!!!");
        alert("You and the computer have tied. The Tie Breaker Round has been Initiated!");
        playerSelection = prompt("----- Tie Breaker Round ----- \nEnter one: 'Rock', 'Paper', or 'Scissors'.");
        console.log("---- Tie Breaker Round ----");
        console.log(round(playerSelection));
        if (playerPoints > computerPoints) {
            if (playerPoints - computerPoints == 1) {
                console.log("You defeated the computer by 1 point and won the RPS Championship!");
            } else {
                console.log(`You defeated the computer by ${playerPoints - computerPoints} points and won the RPS Championship!`);
            }
        } else if (playerPoints < computerPoints) {
            if (computerPoints - playerPoints == 1) {
                console.log("The computer destroyed you by 1 point and won the RPS Championship! :(");
            } else {
                console.log(`The computer destroyed you by ${computerPoints - playerPoints} points and won the RPS Championship! :(`);
            }
        } else {
            console.log("Oh my, it's a tie!\n\nTie Breaker Round Initiated!!!");
            alert("You and the computer have tied. The Tie Breaker Round has been Initiated!");
            playerSelection = prompt("----- Tie Breaker Round ----- \nEnter one: 'Rock', 'Paper', or 'Scissors'.");
            console.log("---- Tie Breaker Round ----");
            console.log(round(playerSelection));
        }
    }
}
*/

rock.addEventListener("click", () => {
    round("rock");
});
paper.addEventListener("click", () => {
    round("paper");
});
scissors.addEventListener("click", () => {
    round("scissors");
});

