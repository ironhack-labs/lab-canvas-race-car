class Car {
  // Initial x and y to pass 
  // X: 23.2/ 50*canvasWidth, Y: 17/20*canvasHeight
  // imgSrc:  "./images/car.png"
  constructor(x, y, imgSrc) {
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = imgSrc;
  }

  moveLeft() {
    this.x--;
    this.drawCar();
  }

  moveRight() {
    this.x++;
    this.drawCar();
  }

  // drawCar() {
  //   this.img.onload = function () {
  //     ctx.drawImage(car, this.x, this.y, 50, 100);
  //   }
  // }
}

function drawGameBoard() {
  // Colors
  asphaltGray = "#808080";
  grassGreen = "#008100";
  // markerWhite = "#F3F3F3";

  const canvas = document.getElementById("game");
  // canvas.width = document.querySelector("body").offsetWidth/2;
  // canvas.height = document.querySelector("body").offsetHeight;
  canvas.width = window.innerWidth / 2;
  canvas.height = window.innerHeight;
  canvasWidth = canvas.width;
  canvasHeight = canvas.height;

  const ctx = canvas.getContext("2d");

  // Draws the grass
  ctx.fillStyle = grassGreen;
  ctx.fillRect(0, 0, canvasWidth / 12, canvasHeight);
  ctx.fillRect((11 / 12 * canvasWidth), 0, canvasWidth / 12, canvasHeight);

  // Draws the curb
  ctx.fillStyle = asphaltGray;
  ctx.fillRect(canvasWidth / 12, 0, canvasWidth / 36, canvasHeight);
  ctx.fillRect((32 / 36 * canvasWidth), 0, canvasWidth / 36, canvasHeight);

  // Draws the main road
  ctx.fillRect((9 / 72 * canvasWidth), 0, 27 / 36 * canvasWidth, canvasHeight);

  // Draws the road markers
  // ctx.fillStyle = markerWhite;
  // for (let i = canvasHeight / 20; i < canvasHeight; i += canvasHeight / 14) {
  //   ctx.fillRect((canvasWidth / 2), i, canvasWidth / 100, canvasHeight / 30);
  // }

  // let car = new Image();
  // car.src = "./images/car.png";
  // car.onload = function () {
  //   ctx.drawImage(car, 23.2 / 50 * canvasWidth, 17 / 20 * canvasHeight, 50, 100);
  // }
}

function drawRoadMarkers(offSet) {
  markerWhite = "#F3F3F3";

  const canvas = document.getElementById("game");
  const ctx = canvas.getContext("2d");
  canvasWidth = canvas.width;
  canvasHeight = canvas.height;

  ctx.strokeStyle = markerWhite;
  ctx.lineWidth = canvasWidth/130;
  ctx.lineDashOffset = offSet;
  ctx.setLineDash([canvasHeight/30,canvasWidth/40]);
  ctx.moveTo((canvasWidth/2), 0);
  ctx.lineTo((canvasWidth/2), canvasHeight);
  ctx.stroke();
  // for (let i = canvasHeight / 20; i < canvasHeight; i += canvasHeight / 14) {
  //   ctx.fillRect((canvasWidth / 2), i, canvasWidth / 100, canvasHeight / 30);
  // }
}

window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  drawGameBoard();
  drawRoadMarkers(30);
  const canvas = document.getElementById("game");
  const ctx = canvas.getContext("2d");
  let playerCar = new Car(0, 0, "./images/car.png");
  // let car = new Image();
  // car.src = "./images/car.png";
  playerCar.img.onload = function () {
    ctx.drawImage(playerCar.img, 23.2 / 50 * canvasWidth, 17 / 20 * canvasHeight, 50, 100);

  
  }

  

  function startGame() {

  }
};


