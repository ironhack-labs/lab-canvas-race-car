let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let scoreDisp = document.getElementById("score-dis");
let interval = 0,
  frames = 0;
finalScore = 0;

const colors = {
  green: "rgb(0, 126, 10)",
  gray: "rgb(127, 127, 127",
  white: "rgb(255, 255, 255)",
  brick: "rgb(143,0,14)"
};

const desplaz = 15;
const rightBoundarie = 306;
const leftBoundarie = 64;
const trackWidth = 280;
const gap = 30;
const obstacleHeight = 20;
const carWidth = 30;
const trackSpeed = 5;
const minObstacleWidth = 40;

class Background {
  draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // first green section
    ctx.fillStyle = colors.green;
    ctx.fillRect(0, 0, 40, canvas.height);
    // first gray line
    ctx.fillStyle = colors.gray;
    ctx.fillRect(40, 0, 10, canvas.height);
    // track
    ctx.fillRect(60, 0, 280, canvas.height);
    // second gray line
    ctx.fillRect(350, 0, 10, canvas.height);
    // second green section
    ctx.fillStyle = colors.green;
    ctx.fillRect(360, 0, 40, canvas.height);
    // middle line
    ctx.beginPath();
    ctx.strokeStyle = colors.white;
    ctx.lineWidth = 5;
    ctx.moveTo(200, 0);
    ctx.lineTo(200, canvas.height);
    ctx.setLineDash([20, 20]);
    ctx.stroke();
  }
}

class Car {
  constructor() {
    this.image = new Image();
    this.image.src = "./images/car.png";
    this.width = carWidth;
    this.height = 60;
    this.x = 185;
    this.y = canvas.height - this.height - 10;
  }

  collision(item) {
    return (
      this.x < item.x + item.width &&
      this.x + this.width > item.x &&
      this.y < item.y + item.height &&
      this.y + this.height > item.y
    );
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  moveRight(desplaz) {
    if (this.x + desplaz < rightBoundarie) this.x += desplaz;
  }

  moveLeft(desplaz) {
    if (this.x - desplaz > leftBoundarie) this.x -= desplaz;
  }
}

class Obstacle {
  constructor(height) {
    this.width = randomNum(trackWidth - gap, minObstacleWidth);
    this.height = height;
    this.x = randomNum(rightBoundarie, leftBoundarie);
    // starts offscreen
    this.y = 0 - this.height;
    // fix to avoid the obstacle getting biiger than the track
    if (this.width + this.x > rightBoundarie) {
      this.width = rightBoundarie - this.x + gap;
    }
  }

  draw() {
    if (frames % 10) this.y += trackSpeed;
    ctx.fillStyle = colors.brick;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

let fondo = new Background();
let auto;
let startedGame = false;
let obstacles = [];

function randomNum(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateObstacles() {
  if (frames % 100 == 0) {
    let obs = new Obstacle(obstacleHeight);
    obstacles.push(obs);
  }
}

function drawObstacles() {
  obstacles.forEach((obs, index) => {
    // remove obstacle from array
    if (obs.y > canvas.height) {
      obstacles.splice(index, 1);
      // increment score
      finalScore++;
      scoreDisp.innerText = finalScore.toString();
    }
    obs.draw();
    if (auto.collision(obs)) {
      // stop interval and put game over mesage
      clearInterval(interval);
      showScore(finalScore);
    }
  });
}

function showScore(score) {
  document.getElementById("final-score").innerText = score.toString();
  document.getElementById("game-over").classList.remove("hidden");
}

window.onload = function() {
  fondo.draw();
  // add listener
  document.addEventListener(
    "keydown",
    event => {
      if (startedGame) {
        switch (event.keyCode) {
          // right arrow
          case 39:
            auto.moveRight(desplaz);
            break;
          // left arrow
          case 37:
            auto.moveLeft(desplaz);
            break;
          default:
            break;
        }
      }
    },
    true
  );
  document.getElementById("start-button").onclick = function() {
    // as button was clicked, the focus is still on that element,
    // so either an enter or a spacebar activates it again
    this.disabled = true;
    auto = new Car();
    startGame();
  };

  function startGame() {
    startedGame = true;
    interval = setInterval(() => {
      frames++;
      fondo.draw();
      auto.draw();
      generateObstacles();
      drawObstacles();
    }, 1000 / 60);
  }
};
