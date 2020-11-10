const xStart = 230.25;
const yStart = 350;
const widthCar = 39.5;
const heightCar = 79.75;

const car = new Component(xStart, yStart, widthCar, heightCar);

const ctx = document.querySelector("#canvas").getContext("2d");
const gameBoard = new Canvas(ctx);

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    gameBoard.start();
  };
};

window.addEventListener("keydown", event => {
  if (gameBoard.checkGameOver()) {
    return;
  }
  const dir = event.key;
  car.moveCar(dir);
  gameBoard.updateGameArea();
});