// Available choices
const choices = ["rock", "paper", "scissors"];

function play(playerChoice) {
  // Random computer choice
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result = "";

  // Decide winner
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
  } else {
    result = "Computer wins!";
  }

  // Update result area
  document.getElementById("result").innerText =
    `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}
