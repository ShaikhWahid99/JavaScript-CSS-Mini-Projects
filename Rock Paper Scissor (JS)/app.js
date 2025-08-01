let userScores = 0;
let compScores = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});

let playgame = (userChoice) => {
  // console.log("User choice:", userChoice);
  const compChoice = genCompChoice();
  // console.log("Comp choice:", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  let ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
};

function drawGame() {
  //   console.log("Game is draw");
  msg.innerText = "Game is draw, Play again!";
  msg.style.backgroundColor = "gray";
}

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScores += 1;
    userScore.innerText = userScores;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}   `;
    msg.style.backgroundColor = "green";
  } else {
    compScores += 1;
    compScore.innerText = compScores;
    msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
