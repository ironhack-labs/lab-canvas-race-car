const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const cWidth = canvas.width;
const cHeight = canvas.height;

const road = new Game();
const car = new Component();

//GAME LOGIC
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

//START GAME

const updateGameArea = () => {
  ctx.clearRect(0, 0, cWidth, cHeight);
  road.bg();
  car.drawCar();
  gameLogic.score();
  updateObstacles();
};

//OBSTACLES

const obstacles = [];

function updateObstacles() {
  gameLogic.frames++;

  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].y += 1;
    obstacles[i].update();
  }

  if (gameLogic.frames % 190 === 0) {
    let y = cHeight;
    /*     let x = cWidth; */

    let minHeight = 50;
    let maxHeight = 200;

    /*     let maxX = x;
    let minX = 0; */
    let height = Math.floor(
      Math.random() * (maxHeight - minHeight) + minHeight
    );
    /*     let theX = Math.floor(Math.random() * (maxX - minX) + minWidth); */

    obstacles.push(new Enemies(height, 30, "brown", 0, 0));

    obstacles.push(new Enemies(y - height, 30, "brown", y, height));
  }
}

//EVENTS AND CALLING FUNCTIONS

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    gameLogic.start();
  };
};

document.addEventListener("keydown", (e) => {
  console.log(e.code);
  switch (e.code) {
    case "ArrowLeft":
      car.moveLeft();
      break;
    case "ArrowRight":
      car.moveRight();
      break;
  }
});
