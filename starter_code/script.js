window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};
let inicio,
  frames = 0,
  currentFrame = 0;

function startGame() {
  let logo = document.getElementById("logo-img"),
    startButton = document.getElementById("start-button"),
    arrowImg = document.getElementById("arrows-img"),
    text = document.getElementById("text");

  logo.style.display = "none";
  startButton.style.display = "none";
  arrowImg.style.display = "none";
  text.style.display = "none";

  inicio = setInterval(update, 1000 / 60);
}

const canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d");

canvas.height = 900;
canvas.width = 900;

class Board {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.w = canvas.width;
    this.h = canvas.height;
  }
  draw() {
    canvas.style.border = "solid 2px black";

    ctx.fillStyle = "grey";
    ctx.fillRect(this.x, this.y, this.w, this.h);

    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 80, canvas.height);

    ctx.fillStyle = "green";
    ctx.fillRect(820, 0, 80, canvas.height);

    ctx.fillStyle = "white";
    ctx.fillRect(110, 0, 20, canvas.height);

    ctx.fillStyle = "white";
    ctx.fillRect(770, 0, 20, canvas.height);

    ctx.fillStyle = "white";
    ctx.fillRect(440, 30, 10, 50);

    ctx.fillStyle = "white";
    ctx.fillRect(440, 150, 10, 50);

    ctx.fillStyle = "white";
    ctx.fillRect(440, 270, 10, 50);

    ctx.fillStyle = "white";
    ctx.fillRect(440, 390, 10, 50);

    ctx.fillStyle = "white";
    ctx.fillRect(440, 510, 10, 50);

    ctx.fillStyle = "white";
    ctx.fillRect(440, 630, 10, 50);

    ctx.fillStyle = "white";
    ctx.fillRect(440, 750, 10, 50);

    ctx.fillStyle = "white";
    ctx.fillRect(440, 870, 10, 50);
  }
}
class Car {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.img = new Image();
    this.img.src = "./images/car.png";
    this.img.onload = this.draw();
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
  moveRight() {
    if (this.x < 680) this.x += 12;
  }
  moveLeft() {
    if (this.x > 137) this.x -= 12;
  }
  moveUp() {
    if (this.y > 5) this.y -= 12;
  }
  moveDown() {
    if (this.y < canvas.height - 140) this.y += 12;
  }
}
class Obstacles {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.w = Math.random() * (+300 - +30) + +30;
    this.h = 50;
  }
  draw() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}



// function bunchOfObstacles(){
//   let obstacles = [];

// obstacles.forEach(array => array.draw());

// if ( frames % 550 === 0) obstacles.push(new Obstacles());

// }
// let obstacles = [];
// function updateObstacles() {
//   for (var i = 0; i < obstacles.length; i++) {
//     obstacles[i].draw();
//   }
//   if (frames % 1 === 0) {
//     if (obstacles.length < 5) {
//       obstacles.push(new Obstacles());
//     }
//   }
// }
// function movingObstacles() {
//   for (let i = 0; i < obstacles.length; i++) {
//     obstacles[i].movingRight();
//   }
// }

let board = new Board(),
  car = new Car(400, 700, 80, 140),
  obstacle1 = new Obstacles(140,30);
  obstacle2 = new Obstacles(540,220);
  obstacle3 = new Obstacles(140,400);
  obstacle4 = new Obstacles(140,30);

function update() {
  if (frames % 3500 === 0) {
    currentFrame = ++currentFrame % 4;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  board.draw();
  car.draw();
  //updateObstacles();
  //bunchOfObstacles();
  //movingObstacles();
  obstacle1.draw();
  obstacle2.draw();
  obstacle3.draw();
  obstacle4.draw();
}

window.addEventListener("keydown", e => {
  if (e.keyCode === 39) car.moveRight();
  if (e.keyCode === 37) car.moveLeft();
  if (e.keyCode === 38) car.moveUp();
  if (e.keyCode === 40) car.moveDown();
});
