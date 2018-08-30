window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  document.onkeydown = function(e) {
    switch(e.keyCode) {
      case 37:
      moveLeft();
      break;
      case 39:
      moveRight();
      break; 
    }
  }

  
  
};

var frames = 1;

function startGame() {
  createCanvas();
  createTrack();
  setInterval(function() { updateCanvas(xCar), moveObstacles(), frames++}, 20);
}

function createCanvas() {
  var html = document.createElement("canvas");
  html.id = "track";
  html.setAttribute("height", "500px");
  html.setAttribute("width", "400px");
  var container = document.getElementById("game-board");
  container.appendChild(html);
}

function createTrack() {
  var c = document.getElementById("track");
  var ctx = c.getContext("2d");
  drawLines(ctx, c);
  createCar(ctx, 175);
}


function createCar(ctx, x) {
  var img = new Image();
  img.src = "images/car.png";
  img.onload = function () {
    ctx.drawImage(img, x, 340, img.width * 0.31, img.height * 0.31);
  }
}

function drawLines(ctx, c) {
  ctx.fillStyle = "#008100";
  ctx.fillRect(0, 0, 20, c.height);
  ctx.fillRect(380, 0, 20, c.height);
  ctx.fillStyle = "#808080";
  ctx.fillRect(20, 0, 10, c.height);
  ctx.fillRect(40, 0, 320, c.height);
  ctx.fillRect(370, 0, 10, c.height);
  for (var i = 0; i < 15; i++) {
    ctx.fillStyle = "#FFF";
    ctx.fillRect(196, 13 + 33 * i, 8, 20);
  }
  for (var j = 0; j < myObstacles.length; j++){
    ctx.fillStyle = "#880001";
    ctx.fillRect(myObstacles[j].x, myObstacles[j].y, myObstacles[j].width, myObstacles[j].height);
  }
}


var xCar = 175;

function moveLeft() {
  xCar -= 4;
}


function moveRight() {
  xCar += 4 ;
}



var maxHeight = 150;
var minHeight = 100;
var minPosition = 40;
var maxPosition = 320;
var HEIGHT = 20;
var myObstacles = [new Obstacles(100, HEIGHT, 100, 20)];


function createObstacles(maxHeight, minHeight, maxPosition, minPosition) {
  var width = Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);
  var x = Math.floor(Math.random() * (maxPosition - width - minPosition) + minPosition);
  myObstacles.push(new Obstacles(width, HEIGHT, x, 20));
}


function Obstacles(width, height, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
}

function moveObstacles() {
  for(var i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 2;
  }
}

function objectCreator() {
  if(frames % 140 === 0){
    createObstacles(maxHeight, minHeight, maxPosition, minPosition);
  }
}



function updateCanvas(x) {
  var c = document.getElementById("track");
  var ctx = c.getContext("2d");
  createCar(ctx, x);
  drawLines(ctx, c);
  objectCreator();
}



