const startGame = () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  const board = new Image();
  board.src = "../images/road.png";
  board.onload = () => ctx.drawImage(board, 0, 0);
};

window.onload = () => {
  document.getElementById("start-button").onclick = () => startGame();
};
