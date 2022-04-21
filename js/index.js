window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    gameLogic.start(); //this.interval = setInterval(updateGameArea, 20);
  }

  //   {
  //     drawCanvas();
  //     //drawCar();
  //     blueCar.update();
  //   }
};

let canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const cWidth = canvas.width;
const cHeight = canvas.height;

const drawCanvas = () => {
  const roadImg = new Image();
  roadImg.src = "../images/road.png";
  ctx.clearRect(0, 0, cWidth, cHeight);
  ctx.drawImage(roadImg, 0, 0, cWidth, cHeight);
};

// create the car:
let blueCar = new Car(cWidth / 2, cHeight / 2);

// make the car move:
document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      blueCar.x -= 3;
      break;
    case "ArrowRight":
      blueCar.x += 3;
      break;
  }
});

const gameLogic = {
  frames: 0,
  start: function () {
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    ctx.clearRect(0, 0, cWidth, cHeight);
  },
  stop: function () {
    clearInterval(this.interval);
    ctx.clearRect(0, 0, cWidth, cHeight);
    ctx.font = "36px serif";

    const points = Math.floor(this.frames / 5);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cWidth, cHeight);
    ctx.fillStyle = "red";
    ctx.fillText(`GAME OVER`, 50, cHeight / 2 / 2);
    ctx.fillText(`FINAL SCORE: ${points}`, 50, cHeight / 2);
  },

  score: function () {
    const points = Math.floor(this.frames / 5);
    ctx.font = "36px serif";
    ctx.fillStyle = "black";
    ctx.fillText(`Score: ${points}`, 100, 50);
  },
};

const updateGameArea = () => {
  gameLogic.clear();
  drawCanvas();
  //player.newPos();
  blueCar.update();
  updateObstacles();
  checkGameOver();
  gameLogic.score();
};

const obstacles = [];

function updateObstacles() {
  gameLogic.frames++;
  console.log(gameLogic.frames);
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].y += 1;
    obstacles[i].update();
  }

  if (gameLogic.frames % 180 === 0) {
    let x = cWidth;
    let minWidth = cWidth / 10;
    let maxWidth = cWidth / 2;

    let width = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);

    obstacles.push(new Obstacle(width, 20, "red", width, 0));
  }
}

function checkGameOver() {
  const crashed = obstacles.some(function (obstacle) {
    return blueCar.crashWith(obstacle);
  });
  if (crashed) {
    gameLogic.stop();
  }
}
