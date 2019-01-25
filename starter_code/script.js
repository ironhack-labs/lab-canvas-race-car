let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let interval;
let frames = 0;
let images = {};
let friction = 0.85;
let keys = {};
let gamestarted = false;
let speed = 3; //pixels per frame

class Car {
  constructor() {
    this.x = 280; //canvas.width-this.width/2
    this.y = 750; //canvas.length-150
    this.height = 100;
    this.width = 40;
    this.velX = 0;
    this.image = new Image();
    this.image.src = "./images/car.png";
    this.image.onload = this.draw;
  }
}
class Obstacle {
  constructor() {
    this.x = Math.floor(Math.random()*375)+100
    this.y = -20
    this.height = 20
    this.width =Math.min(500-this.x,Math.floor(Math.random()*200))
  }
}

let car = new Car();
let obstacle = new Obstacle();

//main functions
function startGame() {
  interval = setInterval(update, 1000 / 60);
}
function drawBackground() {
  let x = speed * (frames % 60);
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "grey";
  ctx.fillRect(100, 0, 400, canvas.height);
  ctx.setLineDash([0, 0]);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;
  ctx.strokeRect(110, -5, 380, canvas.height + 10);

  ctx.beginPath();
  ctx.moveTo(300, x - canvas.height - 60);
  ctx.setLineDash([30, 30]);
  ctx.lineTo(300, canvas.height + 60);
  ctx.stroke();
  ctx.closePath();
}
function drawCar() {
  ctx.fillStyle = "orange";
  ctx.drawImage(car.image, car.x, car.y, car.width, car.height);
}
function drawObstacles(){
  ctx.fillRect(obstacle.x,obstacle.y,obstacle.width,obstacle.height)
  console.log(obstacle)
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  frames++;
  drawBackground();
  drawCar();
  drawObstacles()
  move();
}
function gameOver() {}

//aux functions

//forces
function move() {
  //left & right
  if (car.x + car.velX <= 0) {
    car.x = 1
    car.velX *= -1
    console.log('left correction')
  } else if (car.x + car.velX >= canvas.width-car.width) {
    car.x = canvas.width-car.width-1
    car.velX *= -1
    console.log('right correction')
  } else { 
    car.x += car.velX;
    car.velX *= friction;
  }
  //horizontal
  if (keys[39]) {
    car.velX++;
  }
  if (keys[37]) {
    car.velX--;
  }
  if (keys[38] && frames % 10 === 0) {
    if (speed >= 20) {speed = 20} else {speed++}
  }
  if (keys[40]&& frames % 10 === 0) {
    if (speed <= 3) {speed = 3} else {speed--}
  }

  //obstacle
  obstacle.y += speed
}

//listeners
document.getElementById("start-button").onclick = function() {
  if (!gamestarted) {
    gamestarted = true;
    // let canvas = document.createElement('canvas')
    // canvas.setAttribute('id','canvas')
    // canvas.setAttribute('width',600)
    // canvas.setAttribute('height',900)
    // document.getElementById("game-board").appendChild(canvas)
    // canvas = ""
    // canvas = document.getElementById("canvas");
    // ctx = canvas.getContext("2d");
    startGame();
  }
};
addEventListener("keydown", e => {
  if (gamestarted) {
    keys[e.keyCode] = true;
  }
});

addEventListener("keyup", e => {
  if (gamestarted) {
    keys[e.keyCode] = false;
  }
});
