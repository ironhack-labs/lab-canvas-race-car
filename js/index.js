window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {}
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var frames = 0;
let interval = setInterval(updateGameArea, 5);

//SCORE
function score() {
  const points = Math.floor(this.frames / 100);
  ctx.font = "32px Serif";
  ctx.fillStyle = "white";
  ctx.fillText(`Score: ${points}`, 80, 50);
}

// CAR IMAGE
car = new Image();
car.src = "../images/car.png";
let carX = 225;
let carY = 500;
car.onload = function () {
  ctx.drawImage(car, carX, carY, 50, 90);
};

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//Car movement
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft": // left arrow
      carX -= 20;
      console.log(carX);
      break;
    case "ArrowRight": // right arrow
      carX += 20;
      console.log(carX);
      break;
  }
});

function carUpdate() {
  car = new Image();
  car.src = "../images/car.png";
  car.onload = function () {
    ctx.drawImage(car, carX, carY, 50, 90);
  };
}

//OBJETOS OBSTÁCULOS
class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }

  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
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

var myObstacles = [];
function updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 1;
    myObstacles[i].update();
  }

  frames += 1;
  if (frames % 400 === 0) {
    let minWidth = 200;
    let maxWidth = 300;
    let width = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );
    let randomX = Math.floor(Math.random() * 300) + 50;
    //Obstáculo superior
    myObstacles.push(new Component(width, 30, "red", randomX, 0));
    //Obstáculo inferior--------------480 - height - gap
    // myObstacles.push(
    //   new Component(width, 10, "red", x, width + gap)
    // );
  }
}

//FUNÇÃO DE CRASH
function stop() {
  clearInterval(interval);
}

function checkGameOver() {
  const crashed = myObstacles.some(function (obstacle) {
    return player.crashWith(obstacle);
  });

  if (crashed) {
    stop();
  }
}

//Motor do jogo
function updateGameArea() {
  clear();
  carUpdate();
  updateObstacles();
  checkGameOver();
  score();
}

//Motor do jogo
function updateGameArea() {
  clear();
  carUpdate();
  updateObstacles();
  score();
  //   player.newPos();
  //   checkGameOver();
  //   myGameArea.score();
}
