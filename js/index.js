
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const cWidth = canvas.width;
const cHeight = canvas.height;

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  function startGame() {
  drawRoad();
  drawCar();
  requestAnimationFrame(updateCanvas);
  //clearCanvas();
  //updateCanvas();
};
}

const drawRoad = () => {
  const roadImg = new Image();
  roadImg.src = "/lab-canvas-race-car/images/road.png";
  ctx.clearRect(0, 0, cWidth, cHeight);
  ctx.drawImage(roadImg, 0, 0, cWidth, cHeight)
};

const carImg = new Image();
carImg.src = "/lab-canvas-race-car/images/car.png";

const drawCar = () => {
  ctx.drawImage(carImg, 215 , 580 , 70, 100)
};



/* const updateCanvas = () => {
  clearCanvas();
  drawCar();
  drawRoad();
} */
const player1 = new Player1();

startGame();
