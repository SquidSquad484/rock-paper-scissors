//computer vs user
//ask user to choose rock, paper, or scissors
    //function choices 
      //prompt a question
//make computer get a random choice of rock, paper or scissors
    //function computer 
      //Math.random * 3
//compare choices 
    //function findWinner
      //if same, tie
      //if user chooses rock and computer chooses scissors, 
      //OR user chooses scissors and computer chooses paper
      //OR user chooses paper and computer chooses rock, user wins
      //else, computer wins
    //function printWinner
      //prints statement according to findWinner
    
const instructions = alert("Please open the console by pressing F12 or Ctrl + Alt + J. \n Press 'ok' when you have done so.");
let playerSelection = prompt("Enter one: 'Rock', 'Paper', or 'Scissors'.");
const computerSelection = computerPlay();
let playerPoints = 0;
let computerPoints = 0;

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice == 1) {
        return "Rock";
    } else if (computerChoice == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function round(playerSelection, computerSelection) {
    //Make playerSelection case-insensitive
    playerSelection = toLowerCase(playerSelection); 
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

function points(round) {
    if ("It's a Tie!") {
        return playerPoints + 0; //uh
    } else if ("You Won! Your Rock easily smashes the computer's scissor blades." || 
              "You Won! Your sharp Scissor blades slice through the computer's paper." ||
              "You Won! Your paper cunningly enfolds the computer's rock.") {
        return playerPoints + 1;
    } else {
        return computerPoints + 1;
    }
}

function game() {
    playerSelection;
    for(let i = 0; i < 5; i++) {
        round();
        points();
    }
    if (playerPoints > computerPoints) {
        console.log("You defeated the computer and won the RPS Championship!");
    } else if (playerPoints < computerPoints) {
        console.log("The computer destroyed you and won the RPS Championship! :(");
    } else {
        console.log("Oh my, it's a tie!");
    }
}

console.log(game);