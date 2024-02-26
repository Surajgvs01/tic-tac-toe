let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-Btn");
let draw = document.querySelector(".hello");
let message = document.querySelector(".msgContainer");
let newBtn = document.querySelector("#newBtn");
let msg = document.querySelector(".message");
let turn = document.querySelector(".Turn");
let playerX = true;
//for player show
if(playerX){
  turn.innerText = "Player X";
  turn.style.color = "hsl(256, 93%, 50%)";
}
else{
  turn.innerText = "Player O";
  box.style.color = "hsl(256, 93%, 50%)";
}
let count = 0;
//Reset Game
const resetGame = () => {
  count=0;
  enableBox();
};
//box enable
const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
//New game
const newGame = () => {
  playerX = false;
  enableBox();
  draw.style.display = "contents";
  message.style.display = "none";
};
//click on buttons action
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerX) {
      turn.style.color = "red";
      turn.innerText = "Player O";
      box.style.color = "hsl(256, 93%, 50%)";
      box.innerText = "X";
      playerX = false;
      count++;
    } else {
      turn.style.color = "hsl(256, 93%, 50%)";
      box.style.color = "red";
      turn.innerText = "Player X";
      box.innerHTML = "O";
      playerX = true;
      count++;
    }
    box.disabled = true;
   let isWin= checkWinner();
   //if players fail
    if (count === 9 && !isWin) {
      msg.innerText = "You fails ! Try again";
      draw.style.display = "none";
      message.style.display = "contents";
      count=0;
    }
    console.log(count);
  });
});
//Get winner
let val;
const getWinner = (p) => {
  val = p;
};
//Game draw
const drawGame = () => {
  draw.style.display = "none";
  message.style.display = "contents";
  count=0;
  msg.innerText = "Player " + val + " Win";
};
const winCon = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];
//check win or not
const checkWinner = () => {
  for (let win of winCon) {
    let val1 = boxes[win[0]].innerText;
    let val2 = boxes[win[1]].innerText;
    let val3 = boxes[win[2]].innerText;
    if (val1 !== "" && val2 !== "" && val3 !== "") {
      if (val1 === val2 && val2 === val3) {
        getWinner(val1);
        drawGame();
      }
    }
  }
};
newBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", resetGame);