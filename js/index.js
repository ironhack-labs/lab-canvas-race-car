const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const cWidth = canvas.width;
const cHeight = canvas.height;
const carPlayer = new Car();

const myObstacles = [];

function drawBoard() {
  const img = new Image();
  img.src = "/images/road.png";

  ctx.drawImage(img, 0, 0, cWidth, cHeight);
}

const gameLogic = {
  frames: 0,
  start: function () {
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    ctx.clearRect(0, 0, cWidth, cHeight);
  },
};

function startGame() {
  gameLogic.start();
}

function updateObstacles() {
  gameLogic.frames += 1;

  for (let i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 5;
    myObstacles[i].update();
  }
  myObstacles.push(new Obstacles(350, 50, "brown", 100, 100));
  //  const obstacle = new Obstacles(350, 50, "brown", 100, 100);
  //  obstacle.y += 10;
  //  obstacle.update();

  // if (gameLogic.frames % 120 === 0) {
  //   let x = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
  //   let minWidth = 100;
  //   let maxWidth = 350;

  //   let y = cHeight;

  // }
}

function updateGameArea() {
  gameLogic.clear();
  drawBoard();
  carPlayer.drawCar();
  updateObstacles();
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      if (carPlayer.moveLeft() - 10 < 0) {
        break;
      }
      carPlayer.x -= 10;
      break;
    case "ArrowRight":
      if (carPlayer.moveRight() + 10 > cWidth) {
        break;
      }
      carPlayer.x += 10;
      break;
  }
});
