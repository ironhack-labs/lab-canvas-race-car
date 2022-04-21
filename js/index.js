const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const cWidth = canvas.width;
const cHeight = canvas.height;

const player = new Component();

let frames = 0;
let intervalId = null;
let points;

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function drawBackground() {
    const backgroundImage = new Image();
    backgroundImage.src = "../images/road.png";
    ctx.drawImage(backgroundImage, 0, 0, cWidth, cHeight);
  }

  function startGame() {
    intervalId = setInterval(() => {
      updateGame();
    }, 1000 / 60);
  }

  function updateGame() {
    drawBackground();
    player.drawComponent();
    updateObstacles();
    score();
    gameOver();
  }
};

const obstacles = [];

function updateObstacles() {
  frames++;

  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].y += 1;
    obstacles[i].update();
  }

  if (frames % 200 === 0) {
    let minWidth = 100;
    let maxWidth = 250;
    let width = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);

    let minX = 100;
    let maxX = 200;
    let X = Math.floor(Math.random() * (maxX - minX) + minX);

    obstacles.push(new Obstacles(width, 30, "red", X, 0));
  }
}

function score() {
  points = 0;
  for (let i = 0; i < obstacles.length; i++) {
    if (player.y < obstacles[i].y + obstacles[i].height) {
      points += 1;
    }
  }
  ctx.font = "20px Helvetica";
  ctx.fillStyle = "white";
  ctx.fillText(`Score: ${points}`, 80, 30);
}

function gameOver() {
  for (let i = 0; i < obstacles.length; i++) {
    if (
      player.bottom() > obstacles[i].top() &&
      player.top() < obstacles[i].bottom() &&
      player.right() > obstacles[i].left() &&
      player.left() < obstacles[i].right()
    ) {
      clearInterval(intervalId);
      ctx.fillStyle = "black";
      ctx.fillRect(50, 200, 400, 250);
      ctx.font = "32px Helvetica";
      ctx.fillStyle = "red";
      ctx.fillText(`GAME OVER`, 150, 300);
      ctx.fillStyle = "white";
      ctx.fillText(`Your final score`, 135, 350);
      ctx.fillText(`${points}`, 230, 400);
    }
  }
}
