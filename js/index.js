const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const cWidth = canvas.width;
const cHeight = canvas.height;

const gameLogic = {
  frames: 0,

  start: function () {
    this.interval = setInterval(updateGame, 20);
  },

  clear: function () {
    ctx.clear(250, 500, cWidth, cHeight);
  },
};

const player = new Components();

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    drawRoad();
    drawCar();
  }
};

const drawRoad = () => {
  const roadImg = new Image();
  roadImg.src = "/lab-canvas-race-car/images/road.png";
  ctx.clearRect(0, 0, cWidth, cHeight);
  ctx.drawImage(roadImg, 0, 0, cWidth, cHeight);
};

const drawCar = () => {
  const carImg = new Image();
  carImg.src = "./lab-canvas-race-car/images/car.png";
  //ctx.clearRect(0, 0, cWidth, cHeight);
  ctx.drawImage(carImg, 225, 600, 50, 80);
};

const updateGame = () => {
  gameLogic.clear();
  player.newPos();
  player.update();
};

gameLogic.start;
