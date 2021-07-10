/* Psuedo-Code
html: h1 text on top of page: choose one: rock, paper or scissors     X
html: show buttons of each choice                                     X
js: when clicked, shows computer and your choice, then shows results  
js: presents computer and your points
js: repeats 5 times
js: at 5th round, show results based on past wins and display winner
*/
//ask why this is null
const container = document.getElementById("container");

const round = document.getElementById("round");

const playerChoiceButtons = document.getElementById("player-choice-buttons");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const playerPoints = document.getElementById("player-points");
const computerPoints = document.getElementById("computer-points");

let results = document.getElementById("results");
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");

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

function round(playerSelection) {
    const computerSelection = computerPlay();

    //Display Results
    playerChoice.textContent = "You chose: " + playerSelection + ".";       
    computerChoice.textContent = "The computer chose: " + computerSelection + ".";
    //results.textContent = `The computer chose: ${computerSelection}.`;
    //Tie
    if (playerSelection == computerSelection) {
        results.textContent = "It's a Tie!";
    //Player Wins Conditions
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        ++playerPoints;
        results.textContent = "You Won! Your Rock easily smashes the computer's scissor blades.";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        ++playerPoints;
        results.textContent = "You Won! Your sharp Scissor blades slice through the computer's paper.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        ++playerPoints;
        results.textContent = "You Won! Your paper cunningly enfolds the computer's rock.";
    //Computer Wins Conditions
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        ++computerPoints;
        results.textContent = "You Lost! The computer's Rock easily smashes your scissor blades.";
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        ++computerPoints;
        results.textContent = "You Lost! The computer's sharp Scissor blades slice through your paper.";
    } else {
        ++computerPoints;
        results.textContent = "You Lost! The computer's paper cunningly enfolds your rock.";
    }
}

/*
function game() {
    for(let i = 1; i < 6; i++) {
        if (i == 1) {
            round.textContent = "----- Round 1 -----";
            playerPoints.textContent = `Your Points: ${playerPoints}`;
            computerPoints.textContent = `Computer's Points: ${computerPoints}`;
            playerChoiceButtons.removeEventListener("click", e=> {
                game();
            })
        } else if (i == 5) {
            round.textContent = "----- Final Round -----";
            playerPoints.textContent = `Your Points: ${playerPoints}`;
            computerPoints.textContent = `Computer's Points: ${computerPoints}`;
        } else {
            round.textContent = `----- Round ${i} -----`;
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
/*
playerChoiceButtons.addEventListener("click", e => {
    game();
})
*/
rock.addEventListener("click", e => {
    round("rock");
});
paper.addEventListener("click", e => {
    round("paper");
});
scissors.addEventListener("click", e => {
    round("scissors");
});
