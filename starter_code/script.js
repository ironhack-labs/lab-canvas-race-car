
// Vars
var canvas;
var ctx;
var car;
var obstacles = [];
var score = 0;

// Objects
function Car() {
  this.x = 200;
  this.y = 530;
  this.width = 50;
  this.height = 100;

  this.img = new Image();
  this.img.src = "./images/car.png";
  this.img.onload = this.drawCar.bind(this);
}

Car.prototype.drawCar = function() {
  ctx.drawImage(this.img, this.x, this.y, 50, 100);
};

function Obstacle() {
  this.x = Math.floor(Math.random() * (360 - 40)) + 40;
  this.y = 0;
  this.width = Math.floor(Math.random() * (200 - 40)) + 40;
  this.height = 40;
}

Obstacle.prototype.drawObstacle = function() {
  this.y += 5;
  ctx.fillStyle = "red";
  ctx.fillRect(this.x, this.y, this.width, 40);
};


// Functions
function startGame() {
  canvas = document.getElementById("game-canvas");
  ctx = canvas.getContext("2d");

  car = new Car();
  setInterval(createObstacles, 1000);
  setInterval(calculateScore, 150);
  window.requestAnimationFrame(refreshView);
  //setInterval(moveObstacles, 500);
}

function createObstacles() {
  var o = new Obstacle();
  obstacles.push(o);
}

function calculateScore() {
  score++;
  checkColision();
}

function refreshView() {
  ctx.clearRect(0, 0, 450, 650);
  createBoard();
  car.drawCar();
  moveObstacles();
  printScore();

  window.requestAnimationFrame(refreshView);
}

function printScore(){
  ctx.font = "20px sans-serif";
  ctx.fillText("Score: "+score, 200, 30);
}

function checkColision() {
  // Detecta colisiones
  var c = car;
  var o = obstacles[0];

  if(c.x < o.x + o.width && c.x + c.width > o.x){
    if(c.y < o.y + o.height && c.y + c.height > o.y){
      console.log("colision")
    }
  }
}

function moveObstacles() {
  for (var i = 0; i < obstacles.length; i++) {
    if (obstacles[i].y > 700) {
      obstacles.splice(i, 1);
    }
    obstacles[i].drawObstacle();
  }
}

function createBoard() {
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, 40, 650); // Left grass
  ctx.fillRect(410, 0, 40, 650); // Right grass

  ctx.fillStyle = "darkgrey";
  ctx.fillRect(40, 0, 10, 650);
  ctx.fillRect(400, 0, 10, 650);
  ctx.fillRect(60, 0, 330, 650); // Big highway

  // Dotted Line
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "white";
  ctx.setLineDash([15, 15]);
  ctx.moveTo(225, 0);
  ctx.lineTo(225, 650);
  ctx.stroke();
}

function moveCarLeft(){
  var limitLeft = 40;
  if (car.x > limitLeft) {
    car.x -= 10;
  }
}

function moveCarRight(){
  var limitRight = 360;
  if (car.x < limitRight) {
    car.x += 10;
  }
}

// Events
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};

window.onkeydown = function(event) {
  if (event.keyCode == 37) {
    moveCarLeft();
  } else if (event.keyCode == 39) {
    moveCarRight();
  }
  car.drawCar();
};
