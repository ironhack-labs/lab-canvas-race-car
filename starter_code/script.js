
/** @type {HTMLCanvasElement} */
var canvas = document.querySelector("#game");
/** @type {CanvasRenderingContext2D} */
var ctx = canvas.getContext('2d');

var w, h, w2, h2;
var carImg = new Image;
carImg.src = "./images/car.png";
var arrowLeftOn = false;
var arrowRightOn = false;
var posX;
var posY;
var frameID;
var score = 0;

window.onload = function () {
  document.onkeydown = pressingDown;
  document.onkeyup = freeUp;
};

window.onresize = function () {
  setCanvasDimensions()
}

document.getElementById("start-button").onclick = function() {  
  startGame();
};


function setCanvasDimensions() {
  w = window.innerWidth/2;
  h = window.innerHeight;
  w2 = w / 2;
  h2 = h / 2;

  canvas.setAttribute("height", h);
  canvas.setAttribute("width", w);
}


function startGame() {
  setCanvasDimensions();
  posX = (w-50)/2 ;
  posY = h - 300 / 2;
  gameProcess();
}

function gameProcess() {
  //Iteration 1
  frameID =requestAnimationFrame(gameProcess);
  ctx.save();
  drawRoad();
  drawMovingLine();
  drawExternalLines(115);
  drawExternalLines(w - 115)
  //Iteration 2
  drawCar();
}


//Iteration 1
function drawRoad() {
  ctx.beginPath()
  ctx.fillStyle = "#0E8014"
  ctx.rect(0, 0, w, h)
  ctx.fill();
  ctx.closePath();

  ctx.beginPath()
  ctx.fillStyle = "#808080"
  ctx.rect(100, 0, w - 200, h)
  ctx.fill();
  ctx.closePath()
}

function drawMovingLine() {
  var offset = Math.random();
  ctx.beginPath();
  ctx.strokeStyle = "#FFFFFF"
  ctx.lineWidth = 10;
  ctx.setLineDash([0, 20, 2])
  ctx.moveTo(w2, -20 + offset * 50);
  ctx.lineTo(w2, h + offset * 50);
  ctx.stroke()
  ctx.closePath();
}

function drawExternalLines(x) {
  ctx.restore();
  ctx.beginPath();
  ctx.strokeStyle = "#FFFFFF"
  ctx.lineWidth = 10;
  ctx.moveTo(x, 0);
  ctx.lineTo(x, h);
  ctx.stroke()
  ctx.closePath();
}

//Iteration 2

function drawCar() {
  carWheel();
  ctx.drawImage(carImg, posX, posY, 50, 100);
}

function carWheel() {
  if (arrowLeftOn && posX - 1 > 100) {
    posX--;
  }
  if (arrowRightOn && posX + 1 < w - 150) {
    posX++;
  }
}

function pressingDown(e) {
  if (e.keyCode === 37) {
    arrowLeftOn = true;
  }
  if (e.keyCode === 39) {
    arrowRightOn = true;
  }
}

function freeUp(e) {
  if (e.keyCode === 37) {
    arrowLeftOn = false;
  }
  if (e.keyCode === 39) {
    arrowRightOn = false;
  }
}