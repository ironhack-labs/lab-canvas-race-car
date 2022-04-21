const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const cWidth = canvas.width;
const cHeight = canvas.height;

const gameLogic = {
  frames: 0,
  start: function () {
    this.interval = setInterval(updateGameArea, 20);
  },

  stop: function () {
    clearInterval(this.interval);
  },

  score: function () {
    const points = Math.floor(this.frames / 5);
    ctx.font = "36px serif";
    ctx.fillStyle = "black";
    ctx.fillText(`Score: ${points}`, 100, 50);
  },
};

const car = new Component();

const updateGameArea = () => {
  drawRoad();
  car.drawCar();
  updateObstacles();
  gameLogic.score();
  checkGameOver();
};

const obstacles = [];

function updateObstacles() {
  gameLogic.frames++;

  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].y += 1;
    obstacles[i].update();
  }

  if (gameLogic.frames % 120 === 0) {
    let y = cHeight;

    let minWidth = 50;
    let maxWidth = 300;

    let width = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);

    obstacles.push(new Obstacles(width, 20, "red", width, y, 0));
  }
}

function checkGameOver() {
  const crashed = obstacles.some(function (obstacle) {
    return player.crashWith(obstacle);
  });

  if (crashed) {
    gameLogic.stop();
  }
}

function drawRoad() {
  const img = new Image();
  img.src = "images/road.png";
  ctx.drawImage(img, 0, 0, cWidth, cHeight);
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    gameLogic.start();
  }
};
