const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const height = 700;
const width = 500;

let frame = 0;
let intervalId = undefined;

const bg = new Background();
const car = new Car();
const obstacles = [];
const flag = true;
keys = {
  keyLeftPressed: false,
  keyRightPressed: false,
  keyUpPressed: false,
  keyDownPressed: false,
};

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
    if (flag) {
      intervalId = setInterval(refreshScreen, 20);
      flag = false;
    }
    // refreshScreen()
  };

  function startGame() {
    bg.drawBg();
    car.drawCar();
  }

  function refreshScreen() {
    // Move player each frame
    if (keys.keyLeftPressed) car.moveLeft();
    if (keys.keyRightPressed) car.moveRight();
    if (keys.keyUpPressed) car.moveUp();
    if (keys.keyDownPressed) car.moveDown();

    frame += 1;
    clearScreen();
    bg.drawBg();
    car.drawCar();

    // Obstacles
    if (frame % 120 === 0) {
      let obstacle = new Obstacle();
      obstacles.push(obstacle);
    }

    obstacles.forEach((obstacle) => {
      obstacle.drawObstacle();
      obstacle.moveDown();
      if (car.checkCollision(obstacle.x, obstacle.y)) {
        console.log("Game Over");
        gameOver();
      }
      if (obstacle.checkIfOut()) {
        obstacles.shift();
        car.score += 1;
      }
    });
    // console.log(obstacles);
    // requestAnimationFrame(refreshScreen);
  }
};

addEventListener("keydown", (key) => {
  switch (key.keyCode) {
    case 37:
      keys.keyLeftPressed = true;
      break;
    case 38:
      keys.keyUpPressed = true;
      break;
    case 39:
      keys.keyRightPressed = true;
      break;
    case 40:
      keys.keyDownPressed = true;
      break;
  }
});

addEventListener("keyup", (key) => {
  switch (key.keyCode) {
    case 37:
      keys.keyLeftPressed = false;
      break;
    case 38:
      keys.keyUpPressed = false;
      break;
    case 39:
      keys.keyRightPressed = false;
      break;
    case 40:
      keys.keyDownPressed = false;
      break;
  }
});

function clearScreen() {
  ctx.clearRect(0, 0, width, height);
}

function gameOver() {
  clearInterval(intervalId);
  setTimeout(() => location.reload(), 1000);
}
