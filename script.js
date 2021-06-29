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
/* Extra Functions:
- Tie-breaker Round
- Function if playerSelection is null
- Division between rounds
- Fix tie bug
- Fix points bug
*/

const introduction = alert("Welcome to Console Rock Paper Scissors, which you may have guessed, is played in your console! The game will be 5 rounds long, with you against the computer.");
const instructions = alert("Please open the console by pressing F12 or Ctrl + Shift + K. \n Press 'ok' when you have done so.");

let playerSelection = prompt("Enter one: 'Rock', 'Paper', or 'Scissors'.");
//Make playerSelection case-insensitive
playerSelection = playerSelection.toLowerCase();
    if (playerSelection != "rock" && 
    playerSelection != "paper" && 
    playerSelection != "scissors") {
        prompt("Please enter either 'Rock', 'Paper', or 'Scissors'.");
    }
const computerSelection = computerPlay();

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

function round(playerSelection, computerSelection) {
    computerPlay();
    //Display Results
    console.log(`You chose: ${playerSelection}.`);
    console.log(`The computer chose: ${computerSelection}.`);
    //Tie
    if (playerSelection == computerSelection) {
        return "It's a Tie!";
    //Player Wins Conditions
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Won! Your Rock easily smashes the computer's scissor blades.";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Won! Your sharp Scissor blades slice through the computer's paper.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Won! Your paper cunningly enfolds the computer's rock.";
    //Computer Wins Conditions
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        return "You Lost! The computer's Rock easily smashes your scissor blades.";
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        return "You Lost! The computer's sharp Scissor blades slice through your paper.";
    } else {
        return "You Lost! The computer's paper cunningly enfolds your rock.";
    }
}

function points(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return playerPoints;
    } else if (playerSelection == "rock" && computerSelection == "scissors" || 
        playerSelection == "scissors" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "rock") {
        return ++playerPoints;
    } else {
        return ++computerPoints;
    }
}

function game() {
    console.log(round(playerSelection, computerSelection));
    points(round);
    for(let i = 2; i < 6; i++) {
        playerSelection = prompt(`-----Round ${i}----- \nEnter one: 'Rock', 'Paper', or 'Scissors'.`);
        computerSelection;
        console.log(round(playerSelection, computerSelection));
        points(playerSelection, computerSelection);
    }
    if (playerPoints > computerPoints) {
        console.log(`You defeated the computer by ${playerPoints - computerPoints} points and won the RPS Championship!`);
    } else if (playerPoints < computerPoints) {
        console.log(`The computer destroyed you by ${computerPoints - playerPoints} points and won the RPS Championship! :(`);
    } else {
        console.log("Oh my, it's a tie!");
    }
}

console.log(game());
