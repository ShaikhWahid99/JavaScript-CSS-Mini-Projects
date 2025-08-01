let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newGamebtn = document.querySelector(".new-game");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");

let count = 0;
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;
    checkWinner();
  });
});

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

const disableBoxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = " ";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log([pattern[0]], [pattern[1]], [pattern[2]]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );

    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        showWinner(pos1Val);
      }
    }
  }

  if (count == 9) {
    msg.innerText = "Its a draw";
    msgContainer.classList.remove("hide");
  }
};

resetbtn.addEventListener("click", resetGame);
newGamebtn.addEventListener("click", resetGame);
