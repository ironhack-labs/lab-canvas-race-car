const ctx = document.querySelector("#canvas").getContext("2d");
const gameBoard = new Canvas(ctx);
const xStart = 230.25;
const yStart = 600;
const wStart = 39.5;
const hStart = 79.75;


const car = new Component(xStart, yStart, wStart, hStart);

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    gameBoard.drawRoad();
    gameBoard.drawCar(xStart, yStart, wStart, hStart);
  };
};

window.addEventListener("keydown", event => {
  const dir = event.key;
  car.moveCar(dir);
  const {
    x,
    y,
    width,
    height
  } = car;
  gameBoard.drawCar(x, y, width, height);
});