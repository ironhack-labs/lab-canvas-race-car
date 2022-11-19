const startGame = () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  const board = new Image();
  board.src = "../images/road.png";
  board.onload = () => ctx.drawImage(board, 0, 0);

  const car = new Image();
  car.src = "../images/car.png"
  const carScale = 319/158;
  car.onload = () => ctx.drawImage(car,282/2 - 25, 420 - 50*carScale, 50, 50*carScale)
};

window.onload = () => {
  document.getElementById("start-button").onclick = () => startGame();
};
