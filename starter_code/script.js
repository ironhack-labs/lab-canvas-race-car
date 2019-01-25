// Canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
let startBtn = document.getElementById("start-button");
let musicBtn = document.getElementById("music-button");
var myObstacles = [];

//let frames

//Variables globales
let interval;
let friction = 0.9;
let keys = {};
let frames = 0;

//Clases

class Car {
  constructor() {
    this.x = 200;
    this.y = 500;
    this.width = 40;
    this.height = 90;
    this.velX = 0;
    this.image = new Image();
    this.image.src = "./images/car.png";
    this.image.onload = this.draw;
    this.draw = function() {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    };
  }
}

//Instancias
let car = new Car();

//Fondo
let street = {
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height,
  incY: 0,
  //fillRect(x,y,width,height)
  draw: function() {
    ctx.fillStyle = "darkgrey";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "darkgreen";
    ctx.fillRect(0, 0, 50, canvas.height);
    ctx.fillRect(canvas.width - 50, 0, 50, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(55, 0, 10, canvas.height);
    ctx.fillRect(335, 0, 10, canvas.height);
  }
};

let score = {
  x: 0,
  y: 0,
  draw: function() {
    ctx.fillStyle = "orange";
    ctx.fillRect(327, 0, 60, 30);
  }
};

let lineas = {
  draw: function() {
    ctx.fillStyle = "white";
    let r = 0;
    for (let i = 0; i < 10; i++) {
      ctx.fillRect(canvas.width / 2, 0 + r, 10, 60);
      r += 80;
    }
  }
};

//

//Main functions
function start() {
  if (interval) return;
  interval = setInterval(update, 60 / 1000);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  frames++;
  street.draw();
  lineas.draw();
  car.draw();
  score.draw();
  drawTime();

  move();
  console.log(keys);
}

function gameOver() {}

// Aux functions
function move() {
  car.x += car.velX;
  car.velX *= friction;

  if (car.x < 60) {
    car.x = 60;
    car.velX = 0;
  }

  if (car.x > 300) {
    car.x = 300;
    car.velX = 0;
  }

  if (keys[39]) {
    car.velX++;
  }
  if (keys[37]) {
    car.velX--;
  }
}

function drawTime() {
  ctx.fillStyle = "blue";
  ctx.fillText("Score " + Math.floor(frames / 60), 340, 20);
}

// Musica

let music = new Audio();
music.src =
  "http://66.90.93.122/ost/mario-kart-64/qrpjpnaq/01%20Mario%20Kart%2064%20Theme.mp3";

//listeners

addEventListener("keydown", e => {
  if (e.keyCode === 32) {
    console.log("start");
    start();
  }
  keys[e.keyCode] = true;
});

addEventListener("keyup", e => {
  keys[e.keyCode] = false;
});

startBtn.addEventListener("click", function() {
  console.log("start");
  start();
});

musicBtn.addEventListener("click", function() {
  if (music.paused) music.play();
  else music.pause();
});

document.querySelector("button").addEventListener("click", () => {
  start();
});
