const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

//background class
class Background {
  constructor() {
    this.width = width;
    this.height = height;
    this.bckImg = new Image();
    this.bckImg.src = "images/road.png";
  }

  drawBck() {
    ctx.drawImage(this.bckImg, 0, 0, this.width, this.height);
  }
}

let background = new Background();

//car class
class Player {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.img.src = "./../images/car.png";
  }

  drawPlayer() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  // clearCanvas() {
  //   ctx.clearRect(0, 0, this.width, this.height);
  // }

  // car moves
  moveRight() {
    // this.clearCanvas();
    this.x += 30;
    // this.drawPlayer();
  }

  moveLeft() {
    // this.clearCanvas();
    this.x -= 30;
    // this.drawPlayer();
  }

  move(key) {
    switch (key) {
      case "ArrowLeft":
        if (this.x > 0) {
          this.moveLeft();
        }
        break;
      case "ArrowRight":
        if (this.x < 490 - this.width) {
          this.moveRight();
        }
        break;
    }
  }
}

let player1 = new Player(205, 500, 75, 150);

//player 1 moves
document.addEventListener("keydown", (keyboardEvent) => {
  player1.move(keyboardEvent.key);
});

//Obstacle class
class Obstacles {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.dy = -4;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  drawObst() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveObst() {
    this.y -= this.dy;
  }
}

let obstacles = [];
let obstFreq = 0;

function createObst() {
  let randoX = Math.round(Math.random() * canvas.width);

  let createObst = new Obstacles(randoX, canvas.height, 150, 20, "red");
  obstacles.push(createObst);
}

//start game funcion - it's called on window.onload
//should load the background road image & player
function startGame() {
  updateAll();
}

//update all
function updateAll() {
  ctx.clearRect(0, 0, width, height);
  background.drawBck();
  player1.drawPlayer();

  //obstacles
  obstFreq++;

  if (obstFreq % 400 === 1) {
    createObst();
  }

  obstacles.forEach((obstacle) => {
    obstacle.moveObst();
    obstacle.drawObst();
  });

  requestAnimationFrame(updateAll);
}
