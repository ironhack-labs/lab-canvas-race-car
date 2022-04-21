const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const cWidth = canvas.width;
const cHeight = canvas.height;

const road = new Component("images/road.png", 0, 0, cWidth, cHeight);

const gameLogic = {
  frames: 0,
  start: function () {
    this.interval = setInterval(updateCanvas, 20);
  },
  clear: function () {
    ctx.clearRect(0, 0, cWidth, cHeight);
  },
  stop: function () {
    clearInterval(this.interval);
  },
  score: function () {
    const points = Math.floor(this.frames / 10);
    ctx.font = "36px serif";
    ctx.fillStyle = "black";
    ctx.fillText(`Score: ${points}`, 100, 50);
  },
};

const car = new Component(
  "images/car.png",
  cWidth / 2 - 25,
  cHeight - 90,
  50,
  90
);

const obstacles = [];

const updateCanvas = () => {
  gameLogic.clear();
  road.imgBuilder();
  car.newPos();
  car.imgBuilder();
  updateObstacles();
  gameLogic.score();
  checkGameOver();
};

function updateObstacles() {
  gameLogic.frames++;

  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].y += 1;
    obstacles[i].update();
  }

  if (gameLogic.frames % 120 === 0) {
    let x = Math.floor(Math.random() * cWidth);

    let minWidth = 50;
    let maxWidth = 220;

    let width = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);

    obstacles.push(new Obstascle(undefined, x, 0, width, 30, "red"));
  }
}

function checkGameOver() {
  const crashed = obstacles.some(function (obstacle) {
    return car.crashWith(obstacle);
  });

  if (crashed) {
    gameLogic.stop();
  }
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    road.imgBuilder();
    car.imgBuilder();
    updateObstacles();
    gameLogic.start();
  }
};
