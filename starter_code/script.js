/** @type {HTMLCanvasElement} */
var canvas;


// Contexto del canvas, lo utilizamos para pintar
/** @type {CanvasRenderingContext2D} */
var ctx;
var w, h, w2, h2;

function setup() {
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");

 

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
  gameLoop();
}

function gameLoop() {
  ctx.save();
  drawBackground();
  drawRoad();
  drawDashLine();
  drawSideLine(120);
  drawSideLine(w-120)
  requestAnimationFrame(startGame);

}

function drawBackground() {
  ctx.beginPath()
  ctx.fillStyle = "green"
  ctx.rect(0,0,w,h)
  ctx.fill();
  ctx.closePath();
}
function drawRoad() {
  ctx.beginPath()
  ctx.fillStyle = "gray"
  ctx.rect(100,0,w-200,h)
  ctx.fill();
  ctx.closePath()
}
function drawDashLine() {
  ctx.beginPath();
  ctx.strokeStyle = "white"
  ctx.lineWidth = 10;
  ctx.setLineDash([0, 20, 2])
  ctx.moveTo(w2,0);
  ctx.lineTo(w2,h);
  ctx.stroke()
  ctx.closePath();
}
function drawSideLine(x) {
  ctx.restore();
  ctx.beginPath();
  ctx.strokeStyle = "white"
  ctx.lineWidth = 10;
  ctx.moveTo(x,0);
  ctx.lineTo(x,h);
  ctx.stroke()
  ctx.closePath();
}
