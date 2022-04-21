const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const cWidth = canvas.width;
const cHeight = canvas.height;
let car = new Car();

//
// Definir a source da minha image-Road (outside the function):
const imgRoad = new Image();
imgRoad.src = "../images/road.png";

//Need to draw my road + my car:
function drawImage() {
  //road:
  ctx.drawImage(imgRoad, 0, 0, cWidth, cHeight);
  //car:
  car.drawCar();
}

//Game Logic:
const gameLogic = {
  frames: 0,

  // To start the game:
  start: function () {
    this.interval = setInterval(updateGame, 20);
    drawImage();
    car.drawCar();
  },
  clear: function () {
    ctx.clearRect(0, 0, cWidth, cHeight);
  },
  //
  // To stop the game once we go off the road:
  stop: function () {
    clearInterval(this.interval);
  },
  score: function () {
    const points = Math.floor(this.frames / 5);
    ctx.font = "36px serif";
    ctx.fillTyle = "black";
    ctx.fillText(`score : ${points}`, 100, 50);
  },
};

const updateGame = () => {
  ctx.clearRect(0, 0, cWidth, cHeight);
  ctx.drawImage(imgRoad, 0, 0, cWidth, cHeight);
  car.drawCar();
  gameLogic.score();
  updateObstacles();
};

const obstalces = [];

function updateObstacles() {
  gameLogic.frames++;

  for (let i = 0; i < obstalces.length; i++) {
    obstalces[i].y += 1;
    obstalces[i].x -= 1;
    obstalces[i].update();
  }
  if (gameLogic.frames % 190 === 0) {
    let y = cHeight;
    let minHeight = 50;
    let maxHeight = 200;
    let height = Math.floor(
      Math.random() * (maxHeight - minHeight) + minHeight
    );
    obstalces.push(new Enemies(height, 25, "brown", 0, 0));
    obstalces.push(new Enemies(y - height, 35, "brown", y, height));
  }
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    gameLogic.start();
  };
};
