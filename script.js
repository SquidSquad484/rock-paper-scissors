/* Psuedo-Code
computer vs user
ask user to choose rock, paper, or scissors
    function choices 
     prompt a question
make computer get a random choice of rock, paper or scissors
    function computer 
      Math.random * 3
compare choices 
    function findWinner
      if same, tie
      if user chooses rock and computer chooses scissors, 
      OR user chooses scissors and computer chooses paper
      OR user chooses paper and computer chooses rock, user wins
      else, computer wins
    function printWinner
      prints statement according to findWinner
*/

const introduction = alert("Welcome to Console Rock Paper Scissors, which you may have guessed, is played in your console! The game will be 5 rounds long, with you against the computer.\n\n1 win = 1 point, and the player with the most points at the end of the 5 rounds wins!");
const instructions = alert("Please open the console by pressing F12 or Ctrl + Shift + K.\nPress 'ok' when you have done so.");

let playerSelection = prompt("Enter one: 'Rock', 'Paper', or 'Scissors'.");

let playerPoints = 0;
let computerPoints = 0;

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
    let computerSelection = computerPlay();

    playerSelection = playerSelection.toLowerCase();
    if (playerSelection != "rock" && 
        playerSelection != "paper" && 
        playerSelection != "scissors") {
        playerSelection = prompt("Please enter either 'Rock', 'Paper', or 'Scissors'.");
    }
    //Display Results
    console.log(`You chose: ${playerSelection}.`);
    console.log(`The computer chose: ${computerSelection}.`);
    //Tie
    if (playerSelection == computerSelection) {
        return "It's a Tie!";
    //Player Wins Conditions
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        ++playerPoints;
        return "You Won! Your Rock easily smashes the computer's scissor blades.";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        ++playerPoints;
        return "You Won! Your sharp Scissor blades slice through the computer's paper.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        ++playerPoints;
        return "You Won! Your paper cunningly enfolds the computer's rock.";
    //Computer Wins Conditions
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        ++computerPoints;
        return "You Lost! The computer's Rock easily smashes your scissor blades.";
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        ++computerPoints;
        return "You Lost! The computer's sharp Scissor blades slice through your paper.";
    } else {
        ++computerPoints;
        return "You Lost! The computer's paper cunningly enfolds your rock.";
    }
}

    
function game() {
    for(let i = 1; i < 6; i++) {
        if (i == 1) {
            console.log(`----- Round ${i} ----- `);
            console.log(round(playerSelection));
            console.log(`Your Points: ${playerPoints}  Computer's Points: ${computerPoints}`);
        } else if (i == 5) {
            playerSelection = prompt(`----- Final Round ----- \nEnter one: 'Rock', 'Paper', or 'Scissors'.`);
            console.log("----- Final Round -----");
            console.log(round(playerSelection));
            console.log(`Your Points: ${playerPoints}  Computer's Points: ${computerPoints}`);
        } else {
            playerSelection = prompt(`----- Round ${i} ----- \nEnter one: 'Rock', 'Paper', or 'Scissors'.`);
            console.log(`----- Round ${i} -----`);
            console.log(round(playerSelection));
            console.log(`Your Points: ${playerPoints}  Computer's Points: ${computerPoints}`);
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

console.log(game());