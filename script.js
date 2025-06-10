// define the getComputerChoice function
// pick a random number (0, 1, 2)
// assign a value to each number and return it
function getComputerChoice() {
  const randInt = Math.floor(Math.random() * 3);
  let computerChoice;
  if (randInt === 0) {
    computerChoice = "rock"
  } else if (randInt === 1) {
    computerChoice = "paper"
  } else {
    computerChoice = "scissors"
  }
  return computerChoice;
};

// define the getHumanChoice function
// create variable humanChoice
// prompt the user to input a value
// return that value
function getHumanChoice() {
  let humanChoice = prompt("what do you pick?", "rock")
  return humanChoice.toLowerCase();
}

// declare variables for human and computer score
// have them both start at 0 at the start of the game
let humanScore = 0;
let computerScore = 0;

let roundResult;

// define the playRound function
// 1. make sure that it is not a tie
// 2. figure out what the person played
// 3. figure out if it is a win or loss
// 4. return a message on the result
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    roundResult = "tie"
  } else {
    const outcomes = {
      rock:     { scissors: "win", paper: "loss" },
      paper:    { rock: "win", scissors: "loss" },
      scissors: { paper: "win", rock: "loss" },
    };
    roundResult = outcomes[humanChoice][computerChoice];
  }

  // update the score
  // if human won, increase humanScore. if computer won, increase computerScore.
  if (roundResult === "win") {
    humanScore++;
  }
  if (roundResult === "loss") {
    computerScore++;
  }

  // generate message based on roundResult (if win, print win message, etc.)
  const messages = {
    win: "you won! " + humanChoice + " beats " + computerChoice + ".",
    loss: "you lost :( " + humanChoice + " loses to " + computerChoice + ".",
    tie: "you tied! you both played " + humanChoice + ".",
  };
  let roundResultMessage = messages[roundResult];
  console.log(roundResultMessage)
  return roundResult;
}

function playGame(x) {

  // have scores both start at 0 at the start of the game
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < x; i++ ) {
    // create variables for the human and computer selections that run their functions to get inputs.
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    //start the round with the selections as arguments
    playRound(humanSelection, computerSelection)
  }

  //game end
  console.log(`Final score: Human ${humanScore} - Computer ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("You lost the game.");
  } else {
    console.log("The game is a tie.");
  }
}