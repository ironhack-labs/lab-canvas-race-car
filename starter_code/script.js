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

  document.getElementById("start-button").onclick = function () {
    startGame();

  };

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
  ctx.fillStyle = "black"
  requestAnimationFrame(startGame());

}