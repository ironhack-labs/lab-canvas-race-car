const roadCanvas = document.getElementById("road-canvas");
const roadContext = roadCanvas.getContext("2d");
const carCanvas = document.getElementById("car-canvas");
const carContext = carCanvas.getContext("2d");

const car = new Car(60, 120, 0, 0, 10);
const road = new Road(510, 700, 0, 0);

window.onload = () => {
  document.getElementById("start-button").onclick = () => startGame();
};

function startGame() {
  document.addEventListener("keydown", keyAction);

  // road.draw();
  // car.draw();
  updateBackgroundCanvas();
}

function keyAction(event) {
  if (event.key === "ArrowLeft") car.moveLeft(-road.width + car.carWidth);
  if (event.key === "ArrowRight") car.moveRight(road.width - car.carWidth);

  // road.update();
  car.update();
}

function updateBackgroundCanvas() {
  car.draw();
  road.draw();
  road.move();
  requestAnimationFrame(updateBackgroundCanvas);
}
