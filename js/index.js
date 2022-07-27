const myGameArea = {
  canvas: document.createElement("canvas"),
  frames: 0,
  start: function () {
    this.canvas.width = 500;
    this.canvas.height = 700;
    this.context = this.canvas.getContext("2d");
    this.interval = setInterval(updateGameArea, 5);
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    var audio = new Audio("./music/untitled.mp3");
    audio.play();
  },
  clear1: function () {
    const gameIntro = document.getElementById("game-intro");
    const gameBoard = document.getElementById("game-board");
    gameIntro.remove();
    gameBoard.remove();
  },
  clear2: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  backLoop: function () {
    const backGround = new Image();
    backGround.src = "./images/road.png";
    this.context.drawImage(backGround, 0, 0, 500, 700);
  },
  score: function () {
    const points = Math.floor(this.frames / 5);
    this.context.font = "18px serif";
    this.context.fillStyle = "black";
    this.context.fillText(`Score: ${points}`, 350, 50);
  },
  stop: function () {
    let n = 0;
    clearInterval(this.interval);
    this.canvas.remove();
    const gameOverPanl = document.createElement("canvas");
    return (n += 1);
  },
};

function checkGameOver() {
  const crashed = myObstacles.some(function (obstacle) {
    return newCar.crashWith(obstacle);
  });
  if (crashed) {
    myGameArea.stop();
  }
}

let isGameOver = false;

class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.speedX = 0;
  }

  update() {
    const ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  newPos() {
    this.x += this.speedX;
  }

  carImg() {
    const ctx = myGameArea.context;
    const carImg = new Image();
    carImg.src = "./images/car.png";
    ctx.drawImage(carImg, this.x, this.y, this.width, this.height);
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }

  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}

const newCar = new Component(
  50,
  100,
  "transparent",
  myGameArea.canvas.height,
  myGameArea.canvas.width + 250
);

function updateGameArea() {
  myGameArea.clear2();
  newCar.newPos();
  newCar.update();
  myGameArea.backLoop();
  newCar.carImg();
  updateObstacles();
  checkGameOver();
  myGameArea.score();
}

const myObstacles = [];

function updateObstacles() {
  myGameArea.frames += 1;
  if (myGameArea.frames % 120 === 0) {
    let y = 0;
    let minHeight = 10;
    let maxHeight = 150;
    let width = Math.floor(
      Math.random() * (maxHeight - minHeight + 1) + minHeight
    );
    let whichBorder = Math.floor(Math.random() * 500);

    myObstacles.push(new Component(width, 20, "lightgrey", whichBorder, y));
  }
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 1;
    myObstacles[i].update();
  }
}

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft": // left arrow
      newCar.speedX -= 1;
      break;
    case "ArrowRight": // right arrow
      newCar.speedX += 1;
      break;
  }
});

document.addEventListener("keyup", (e) => {
  newCar.speedX = 0;
});

//MAIN FUNCTION
window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    myGameArea.clear1();
    myGameArea.start();

    if (myGameArea.stop() === 1) {
      console.log("hwhw");
      myGameArea.start();
    }
  }
};
