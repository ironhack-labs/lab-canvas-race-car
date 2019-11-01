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

let roadSpeed = 2;
let carSteering = 10;
let fr = 1000 / 60;
let limLeft = w / 20;
let limRight = w / adj - w / 20 - w / 80;
let counter = 0;
let obstacles = [];


let linesIn = 0;
function linesMovement() {
  linesIn += roadSpeed;
  return linesIn;
}

function createObstacles(x, y, w, h, clr, spd) {
  obstacles.push(new Rectangles(x, y, w, h, clr, spd));
}

let j= 0
for (let i = 0; i < 60; i++) {
  createObstacles((randomInt(limLeft, limRight - 300)), j , randomInt(150, 250), 40, "#870006", roadSpeed);
  j -= 400;
}

let grass = new Rectangles(0, 0, w/adj ,h, "#008100");
let road = new Rectangles((w / adj - w / (adj * 1.2)) / 2, 0, w / (adj * 1.2), h, "#808080");
let lineLeft = new Rectangles(limLeft, 0, w / 80, h, "white");
let lineRight = new Rectangles(limRight, 0, w / 80, h, "white");
let midLine = new Rectangles(0,0,0,0,"white",0,[w / adj / 2, -h + counter - 5000], [w / adj / 2, h + counter])
// let car = new Rectangles(coords.x, coords.y, 50, 50);
// console.log(car);
// console.log(car.drawCar())

function startGame() {
  var intervalID = setInterval(() => {
    ctx.clearRect(0, 0, w, h);

    grass.drawRectangle();    

    road.drawRectangle();

    lineLeft.drawRectangle();

    lineRight.drawRectangle();

    // midLine.drawLines();
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.setLineDash([30, 15]);
    ctx.moveTo(w / adj / 2, -h + counter - 5000);
    ctx.lineTo(w / adj / 2, h + counter);
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
      ctx.closePath();
    }

    obstacles.forEach(obstacle => {
        ctx.beginPath();
        ctx.fillStyle = obstacle.color;
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
        ctx.closePath();
        obstacle.moveDown();
    })

    counter = counter + 2;

    obstacles.forEach(obstacle =>{
      if(car.x + 80 > obstacle.x &&
        car.x < obstacle.x + obstacle.w &&
        car.y < obstacle.y + obstacle.h &&
        car.y + 160 > obstacle.y){
        clearInterval(intervalID);
        let overlayDOMEl = document.querySelector("#overlay");
        overlayDOMEl.style.display= "flex";
        }
    })
    



  }, fr);
}
