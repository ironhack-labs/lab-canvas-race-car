//KEYS left: 37, right: 39

var canvas, ctx;
var w = window.innerWidth;
var h = window.innerHeight;
var ditchWidth = 50;
var lineWidth = 10;
var asphaltWidth = 500;
var canvasW = ditchWidth * 2 + asphaltWidth;
var speed = 5;
var counter = 0;

//Refactor this:
var carWidth = 60;
var carHeight = 100;

var timer = 0;

var car = {
  width: 60,
  height: 100,
  x: canvasW / 2 - carWidth / 2,
  y: h - carHeight * 2
};
//End of refactor
var obstacles = [];
var img;

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};

window.onkeydown = function(e) {
  switch (e.keyCode) {
    //LEFT KEY
    case 37:
      moveCarToLeft();
      break;
    //RIGHT KEY
    case 39:
      moveCarToRight();
      break;
  }
};

function startGame() {
  var gameboard = document.querySelector("#game-board");
  canvas = document.createElement("canvas");
  canvas.width = canvasW;
  canvas.height = this.innerHeight - 70;
  ctx = canvas.getContext("2d");
  gameboard.appendChild(canvas);
  generateObstacle();

  setInterval(function (){
    refresh();
  }, 10);
}

function refresh() {
  ctx.clearRect(0, 0, canvasW, h);
  paintRoad();
  paintMiddleLine();
  paintCar();
  obstacles.forEach((obstacle) => paintObstacle(obstacle));

  if(timer >= 300) {
    generateObstacle();
    timer = 0;
  }

  timer++;

}

function paintRoad() {
  var ditchWidth = 50;
  var lineWidth = 10;
  var asphaltWidth = 500;

  //1st Green Line
  ctx.beginPath();
  ctx.fillStyle = "rgb(0,255,0)";
  ctx.fillRect(0, 0, ditchWidth, h);
  ctx.closePath();

  //Asphalt
  ctx.beginPath();
  ctx.fillStyle = "#808080";
  ctx.fillRect(ditchWidth, 0, asphaltWidth, h);
  ctx.closePath();

  //2st Green Line
  ctx.beginPath();
  ctx.fillStyle = "rgb(0,255,0)";
  ctx.fillRect(asphaltWidth + ditchWidth, 0, ditchWidth, h);
  ctx.closePath();

  //Continuous lines
  ctx.beginPath();
  ctx.strokeStyle = "#fff";
  ctx.setLineDash([0]);
  ctx.lineWidth = lineWidth / 2;
  ctx.moveTo(ditchWidth + lineWidth, 0);
  ctx.lineTo(ditchWidth + lineWidth, h);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = "#fff";
  ctx.setLineDash([0]);
  ctx.lineWidth = lineWidth / 2;
  ctx.moveTo(asphaltWidth + ditchWidth - lineWidth, 0);
  ctx.lineTo(asphaltWidth + ditchWidth - lineWidth, h);
  ctx.stroke();
  ctx.closePath();
}

function paintMiddleLine() {
  var dottedLineHeight = 10;

  ctx.beginPath();
  ctx.strokeStyle = "#fff";
  ctx.setLineDash([dottedLineHeight, dottedLineHeight]);
  ctx.lineDashOffset = counter -= 4;
  ctx.lineWidth = lineWidth / 2;
  ctx.moveTo(asphaltWidth / 2 + ditchWidth, 0);
  ctx.lineTo(asphaltWidth / 2 + ditchWidth, h);
  ctx.stroke();
  ctx.closePath();
}

function paintCar() {
  img = new Image();
  img.onload = function() {
    ctx.drawImage(img, car.x, car.y, car.width, car.height);
  };
  img.src = "./images/car.png";
}

function moveCarToLeft() {
  if (car.x - speed > ditchWidth) {
    car.x -= speed;
  }
  requestAnimationFrame(refresh, 100);
}

function moveCarToRight() {
  if (car.x + speed < asphaltWidth) {
    car.x += speed;
  }
  requestAnimationFrame(refresh, 100);
}

function getRandomFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateObstacle() {
  var obstacle = { 
    x: getRandomFromRange(ditchWidth, asphaltWidth) - car.width,
    y: 0,
    width: getRandomFromRange(car.width, asphaltWidth),
    height: 60
  };

  obstacles.push(obstacle);
}

function paintObstacle(obstacle) {
  obstacle.y++;
  ctx.beginPath();
  ctx.fillStyle = "#891C05";
  ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  ctx.closePath();
}
