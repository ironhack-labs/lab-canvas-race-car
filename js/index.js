const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const backgroundImg = new Image();
backgroundImg.src = "./images/road.png";

const carImg = new Image();
carImg.src = "./images/car.png"

const carWidth = carImg.width / 2;
const carHeight = carImg.height / 2;

const car = {
  width: carWidth,
  height: carHeight,
  x: canvasWidth / 2 - carWidth / 2,
  y: (canvas.height * 0.95) - carHeight,
}

const restart = 3
let score = restart;

const scoring = () => {
  context.fillStyle = "red";
  context.font = "25px Arial"
  context.fillText(`Score: ${score}`, 100, 50);
}

let x1Obst = Math.random() * canvasWidth + 40;
let x2Obst = Math.random() * canvasWidth + 40;
let x1Width = Math.random() * canvasWidth / 3 + 40;
let x2Width = Math.random() * canvasWidth / 3 + 40;
let y1Obst = -250;
let y2Obst = 0;

const obstacle = () => {
  context.strokeStyle = 'purple';
  context.lineWidth = 25;

  context.beginPath();
  if (
    (car.x + car.width >= x1Obst && car.x < x1Obst + x1Width) &&
    (Number(Math.trunc(car.y) === y1Obst + 25)) ||
    (car.x + car.width > x2Obst && car.x < x2Obst + x2Width) &&
    (Number(Math.trunc(car.y) === y2Obst + 25))) {
    if (score > 0) {
      score--;
    } else {
      context.clearRect(0, 0, canvasWidth, canvas.height);
      context.drawImage(backgroundImg, 0, 0)
    }
  }

  if (y1Obst <= canvasHeight) {
    context.moveTo(x1Obst, y1Obst);
    context.lineTo(x1Obst + x1Width, y1Obst);
    y1Obst++
  } else {
    y1Obst = 0;
    x1Obst = Math.random() * canvasWidth;
    x1Width = Math.random() * canvasWidth / 2;
  }
  if (y2Obst <= canvasHeight) {
    context.moveTo(x2Obst, y2Obst);
    context.lineTo(x2Obst + x2Width, y2Obst);
    y2Obst++
  } else {
    y2Obst = 0;
    x2Obst = Math.random() * canvasWidth;
    x2Width = Math.random() * canvasWidth / 2;
  }
  context.stroke();
}

let firstImageY = -canvas.height;
let nextImageY = 0;

const drawBackground = () => {
  firstImageY++;
  if (firstImageY >= canvas.height) {
    firstImageY = -canvas.height;
  }
  nextImageY++;
  if (nextImageY >= canvas.height) {
    nextImageY = -canvas.height;
  }
  context.drawImage(backgroundImg, 0, firstImageY, canvasWidth, canvas.height);
  context.drawImage(backgroundImg, 0, nextImageY, canvasWidth, canvas.height);
}

const drawCar = () => {
  context.drawImage(carImg, car.x, car.y, car.width, car.height);
}


const drawingInLoop = () => {
  context.clearRect(0, 0, canvasWidth, canvas.height);
  drawBackground();
  obstacle();
  scoring();
  drawCar();
  if (score > 0) {
    requestAnimationFrame(drawingInLoop);
  }
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    score = restart;
    startGame();
  };

  function startGame() {
    drawingInLoop();
    document.addEventListener('keydown', (event) => {
      const code = event.code;
      switch (code) {
        case 'ArrowRight':
        case 'KeyD':
          if (car.x <= canvasWidth - 40 - car.width) {
            car.x += 5;
          }
          break;
        case 'ArrowLeft':
        case 'KeyA':
          if (car.x >= 40) {
            car.x -= 5;
          }
          break;
      }
    })
  }
};