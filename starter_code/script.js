window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/** @type HTMLCanvasElement */
let canvasDOMEl = document.getElementById('canvas');

/** @type CanvasRenderingContext2D */
let ctx = canvasDOMEl.getContext("2d");

let w = window.innerWidth * 1;
let h = window.innerHeight * 1;
let adj = 2.5;

function setCanvasDimensions() {
  canvasDOMEl.setAttribute("height", h);
  canvasDOMEl.setAttribute("width", w / adj);
}

window.onresize = setCanvasDimensions;

setCanvasDimensions();

let coords = {
  x: (w / adj) / 2 - 40,
  y: h - h / 4
}

let roadSpeed = 10;
let carSteering = 10;
let fr = 1000 / 60;
let limLeft = w / 20;
let limRight = w / adj - w / 20 - w / 80;
let counter = 0;

function startGame() {
  setInterval(() => {
    ctx.clearRect(0, 0, w, h);

    ctx.beginPath();
    ctx.fillStyle = "#008100";
    ctx.fillRect(0, 0, w / adj, h);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#808080";
    ctx.fillRect((w / adj - w / (adj * 1.2)) / 2, 0, w / (adj * 1.2), h)
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(limLeft, 0, w / 80, h);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(limRight, 0, w / 80, h);
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.setLineDash([30, 15]);
    ctx.moveTo(w / adj / 2, 0);
    ctx.lineTo(w / adj / 2, h);
    ctx.strokeStyle = "white";
    ctx.stroke();

    var carImg = new Image();
    carImg.src = 'images/car.png'

    window.onkeydown = function (e) {
      switch (e.key) {
        case "ArrowRight":
          coords.x += carSteering;
          break;
        case "ArrowLeft":
          coords.x -= carSteering;
          break;

      }
    }

    let car = new Rectangles(coords.x, coords.y, 50, 50);
    ctx.drawImage(carImg, car.x, car.y, 80, 160)
    carImg.onload = function () {
      ctx.beginPath();
      ctx.fillStyle = "red";
      // ctx.fillRect(car.x, car.y, 80, 160);
      ctx.closePath();
    }

    // createObstacles(limLeft + randomInt(limLeft, limRight), 300, limLeft - limLeft + randomInt(limLeft, limRight), 40, "#870006", roadSpeed)

    // function createObstacles(x, y, w, h, clr, spd) {
    //   //timeout para cambiar frecuencia de obstaculos
    //   let obstacle = new Rectangles(x, y, w, h, clr, spd);
    
    //   ctx.beginPath();
    //   ctx.fillStyle = obstacle.color;
    //   ctx.fillRect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
    //   ctx.closePath();
    
      // moveDown();
  

  }, fr);
}
