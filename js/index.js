const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const cWidth = canvas.width;
const cHeight = canvas.height;

let car = new Car();

function drawRoad() {
  const road = new Image();
  road.src = "images/road.png";
  ctx.drawImage(road, cWidth, cHeight, 0, 0);
}

const gameArea = () => {
  gameLogic.clear();
  drawRoad();
  drawCar.draw();
  requestAnimationFrame(gameArea);
};

drawRoad();
car.draw();

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    car.draw();
    drawRoad();
  }
};
