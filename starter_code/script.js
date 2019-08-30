document.getElementById("start-button").onclick = function () {
  document.getElementById("game-board").style.display = "block";

  startGame();
}

const gameCanvasDOMEl = document.querySelector("#gameCanvas");
const ctx = gameCanvasDOMEl.getContext("2d");
const w = 800;
const h = window.innerHeight;
const w2 = w / 2;
const h2 = h / 2;
const speed = 20;
const speedLine = 2;
let counter = 0;
let intervalID = undefined;


let posX = w2 - 79;
let posY = h - 330;

function setCanvasDimensions() {
  // x axis
  gameCanvasDOMEl.setAttribute("width", `${w}px`);
  // y axis
  gameCanvasDOMEl.setAttribute("height", `${h}px`);
}
setCanvasDimensions();


function startGame() {

  intervalID = setInterval(() => {

    clearGame()
    drawBackground()
    drawCar()
    moveCar()
    obstacles()
    counter++
  }, 1000 / 60);
}

function clearGame() {
  ctx.clearRect(0, 0, w, h);
}

function drawBackground() {
  //ctx.save();
  //rec big
  ctx.beginPath();
  ctx.rect(40, 0, w - 80, h);
  ctx.fillStyle = `rgba(87, 87, 87, 1)`;
  ctx.fill();
  ctx.closePath();

  //line right
  ctx.beginPath();
  ctx.rect(w - 90, 0, 30, h);
  ctx.fillStyle = `rgba(255, 255, 255, 1)`;
  ctx.fill();
  ctx.closePath();

  //line left
  ctx.beginPath();
  ctx.rect(60, 0, 30, h);
  ctx.fillStyle = `rgba(255, 255, 255, 1)`;
  ctx.fill();
  ctx.closePath();

  //line middle
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.setLineDash([50, 30]);
  ctx.moveTo(w2, h + counter * speedLine);
  ctx.lineTo(w2, 0);
  ctx.lineWidth = 10;
  ctx.stroke();
  ctx.closePath();
}

function drawCar() {
  let car = new Image();
  car.src = "images/car.png";
  ctx.drawImage(car, posX, posY)
}

function moveCar() {
  window.onkeydown = function (e) {
    switch (e.key) {
      case "ArrowLeft":
        posX -= speed;
        if (posX <= 80) {
          posX = 80
        }
        break;
      case "ArrowRight":
        posX += speed;
        if (posX >= 560) {
          posX = 560
        }
        break;
    }
  }
}


function obstacles() {
  //line right
  ctx.beginPath();
  ctx.rect(w2, 0, 300, 100);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.moveTo(w2, h + counter * speed);
  ctx.closePath();
}