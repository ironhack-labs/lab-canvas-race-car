const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const cWidth = canvas.width;
const cHeight = canvas.height;

const car = new Components(225, 590);
let frames = 0;
let intervalId = null;

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

function drawBg() {
  const img = new Image();
  img.src = "../images/road.png";
  ctx.drawImage(img, 0, 0, cWidth, cHeight);
}

function startGame() {
  intervalId = setInterval(() => {
    updateGame();
  }, 1000 / 60);
}

function updateGame() {
  drawBg();
  car.drawCar();
  updateObstacles();
  score();
}

function score() {
  const points = Math.floor(frames / 5);
  ctx.font = "20px serif";
  ctx.fillStyle = "white";
  ctx.fillText(`Your score is: ${points}`, 70, 50);
}

//obstacles
const obstacles = [];

function updateObstacles() {
  frames++;

  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].y += 1;
    obstacles[i].update();

    if (
      car.bottom() > obstacles[i].top() &&
      car.top() < obstacles[i].bottom() &&
      car.right() > obstacles[i].left() &&
      car.left() < obstacles[i].right()
    ) {
      clearInterval(intervalId);

      ctx.fillStyle = "black";
      ctx.fillRect(100, 200, 300, 100);
      ctx.font = "25px serif";
      ctx.fillStyle = "white";
      ctx.fillText(`GAME OVER YOU LOSE!!`, 105, 250);
    }
  }

  if (frames % 150 === 0) {
    let minWidth = 100;
    let maxWidth = 300;
    let width = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);

    let minXPosition = 50;
    let maxXPosition = 200;
    let xPosition = Math.floor(
      Math.random() * (maxXPosition - minXPosition) + minXPosition
    );

    obstacles.push(new Obstacles(width, 20, "red", xPosition, 0));
  }
}
