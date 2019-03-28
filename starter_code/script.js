/** @type {HTMLCanvasElement} */
var canvas;


// Contexto del canvas, lo utilizamos para pintar
/** @type {CanvasRenderingContext2D} */
var ctx;
var w, h, w2, h2;
var img = new Image;
img.src = "./images/car.png";
var pressedLeft = false;
var pressedRight = false;
var posX;
var posY;
var frameID;
var score = 0;

function setup() {
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");


  document.onkeydown = handlerDown;

  document.onkeyup = handlerUp;


  window.onresize = function () {


    setCanvasDimensions()

  }

  startGame();
  /* 
    document.getElementById("start-button").onclick = function () {
      startGame();

    };
   */
}

window.onload = function () {

  setup();


};

function setCanvasDimensions() {
  w = window.innerWidth
  h = window.innerHeight
  w2 = w / 2
  h2 = h / 2
  canvas.setAttribute("height", h);
  canvas.setAttribute("width", w);

}


function startGame() {
  document.querySelector(".game-intro").style.display = "none"
  setCanvasDimensions();
  posX = w2 - 50 / 2;
  posY = h - 300 / 2;
  gameLoop();
}

function gameLoop() {
  if (Math.random()<0.02) {
    score++;
  }
  frameID =requestAnimationFrame(gameLoop);
  ctx.save();
  drawBackground();
  drawRoad();
  drawDashLine();
  drawSideLine(120);
  drawSideLine(w - 120)
  drawCar();
  createObs();
  moveObs();
  drawObs();
}

function drawBackground() {
  ctx.beginPath()
  ctx.fillStyle = "green"
  ctx.rect(0, 0, w, h)
  ctx.fill();
  ctx.closePath();
}

function drawRoad() {
  ctx.beginPath()
  ctx.fillStyle = "gray"
  ctx.rect(100, 0, w - 200, h)
  ctx.fill();
  ctx.closePath()
}

function drawDashLine() {
  ctx.beginPath();
  ctx.strokeStyle = "white"
  ctx.lineWidth = 10;
  ctx.setLineDash([0, 20, 2])
  ctx.moveTo(w2, -20 + Math.random() * 50);
  ctx.lineTo(w2, h - Math.random() * 50);
  ctx.stroke()
  ctx.closePath();
}

function drawSideLine(x) {
  ctx.restore();
  ctx.beginPath();
  ctx.strokeStyle = "white"
  ctx.lineWidth = 10;
  ctx.moveTo(x, 0);
  ctx.lineTo(x, h);
  ctx.stroke()
  ctx.closePath();
}
var arrayObst = [];

function createObs() {
  if (Math.random() < 0.01) {
    arrayObst.push(new Obst(randomPos(100,w - 200),10));
   
  }
}

class Obst{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.w = 100;
    this.h = 50;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.rect(this.x, this.y,  this.w, this.h);
    ctx.fill();
    ctx.closePath();
  }
  move() {
    this.y++;
  }
}
function drawObs() {
  arrayObst.forEach(obs => {
    obs.draw()
  })
}
function moveObs() {
  arrayObst.forEach(obs => { 
    obs.move() 
    colision(obs.x,obs.y,obs.w,obs.h)
})
}

function randomPos(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function moveCar() {
  if (pressedLeft && posX - 1 > 100) {
    posX--;
  }
  if (pressedRight && posX + 1 < w - 150) {
    posX++;
  }
}

function drawCar() {
  moveCar()
  ctx.drawImage(img, posX, posY, 50, 100)

}

function handlerDown(e) {
  if (e.keyCode === 37) {
    pressedLeft = true;
  }
  if (e.keyCode === 39) {
    pressedRight = true;
  }
}

function handlerUp(e) {
  if (e.keyCode === 37) {
    pressedLeft = false;
  }
  if (e.keyCode === 39) {
    pressedRight = false;
  }
}
function gameOver() {
  arrayObst = [];
  ctx.beginPath()
  ctx.fillStyle = "black"
  ctx.rect(0, 0, w, h)
  ctx.fill();
  ctx.closePath();
  createText();
  createScore();
  finalScore();
}
function createText() {
  ctx.font = "100px Georgia";
  ctx.fillStyle = "green"
  var medidas = ctx.measureText("Game Over!")
ctx.fillText("Game Over!!!!", w2 - medidas.width/2, h2);
}
function createScore() {
  ctx.font = "80px Georgia";
  ctx.fillStyle = "white"
  var medidas = ctx.measureText("Your final score")
  ctx.fillText("Your final score", w2 - medidas.width/2 + 50, h2 + 100 )
}
function finalScore() {
  ctx.font = "80px Georgia";
  ctx.fillStyle = "white"
  var medidas = ctx.measureText(score)
  ctx.fillText(score, w2 - medidas.width/2 + 50, h2 + 200 )
}

/* COLISION */
function colision(xObs,yObs,wObs,hObs) {
  if(xObs < posX && posX < (xObs+wObs) && (posY > yObs)&&(posY < (yObs+hObs))){
    cancelAnimationFrame(frameID);
    gameOver();
  }
}