// array of obstacles
let obstaclesPosition = [];

// define general configuration
const myGameArea = {
  canvas: document.createElement('canvas'),
  frames: 0,
  start: function () {
    this.canvas.width = 400;
    this.canvas.height = 510;
    this.context = this.canvas.getContext('2d');
    // create the canvas in html
    let divBoardGame = document.getElementById('game-board');
    divBoardGame.insertBefore(this.canvas, divBoardGame.childNodes[0]);
    this.interval = setInterval(updateGame, 20);
  },
}

// create car object
const car = {
  x: 180,
  y: 400,
  // speed properties
  speedX: 0,
  speedY: 0,
  update() {
    let ctx = myGameArea.context;
    let carImage = new Image();
    carImage.src = './images/car.png';
    carImage.onload = () => {
      ctx.drawImage(carImage, this.x, this.y, 0.3 * carImage.width, 0.3 * carImage.height);
    }
  },
  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  },
}

// create obstacles constructor

class Obstacles {
  constructor(x, y, color, width, height) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;
  }
  update() {
    let ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

let allObstacles = new Obstacles();

// create background
function setBackground() {
  // defining context
  let ctx = myGameArea.context;

  // getting the canvas height
  let backgroundHeight = myGameArea.canvas.height;

  // getting the canvas width
  let backgroundWidth = myGameArea.canvas.width;

  // defining proportion of colours
  let backgroundDivision = backgroundWidth / 8;
  let backgroundDivisionGreen = (backgroundDivision / 3) * 2;
  let backgroundDivisionWhiteAndGray = (backgroundDivision / 3) / 2;
  let backgroundDivisionGrayRoad = backgroundDivision * 6;

  // defining a counter to start the next element
  let nextX = 0;

  // cleaning the background before drawing
  ctx.clearRect(0, 0, backgroundWidth, backgroundHeight);

  // start drawing from left to right
  ctx.fillStyle = 'green';
  ctx.fillRect(nextX, 0, backgroundDivisionGreen, backgroundHeight);
  nextX += backgroundDivisionGreen;
  ctx.fillStyle = 'gray';
  ctx.fillRect(nextX, 0, backgroundDivisionWhiteAndGray, backgroundHeight);
  nextX += backgroundDivisionWhiteAndGray;
  ctx.fillStyle = 'white';
  ctx.fillRect(nextX, 0, backgroundDivisionWhiteAndGray, backgroundHeight);
  nextX += backgroundDivisionWhiteAndGray;
  ctx.fillStyle = 'gray';
  ctx.fillRect(nextX, 0, backgroundDivisionGrayRoad, backgroundHeight);
  nextX += backgroundDivisionGrayRoad;
  ctx.fillStyle = 'white';
  ctx.fillRect(nextX, 0, backgroundDivisionWhiteAndGray, backgroundHeight);
  nextX += backgroundDivisionWhiteAndGray;
  ctx.fillStyle = 'gray';
  ctx.fillRect(nextX, 0, backgroundDivisionWhiteAndGray, backgroundHeight);
  nextX += backgroundDivisionWhiteAndGray;
  ctx.fillStyle = 'green';
  ctx.fillRect(nextX, 0, backgroundDivisionGreen, backgroundHeight);
  nextX += backgroundDivisionGreen;

  // draw central line
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 3;
  ctx.setLineDash([20, 20]);
  ctx.beginPath();
  ctx.moveTo(backgroundWidth / 2, 40);
  ctx.lineTo(backgroundWidth / 2, backgroundHeight);
  ctx.stroke();
}

// update obstacles
function updateObstacles() {
  for (let i = 0; i < obstaclesPosition.length; i += 1) {
    obstaclesPosition[i].y += 1;
    obstaclesPosition[i].update();
  }
  myGameArea.frames += 1;
  if (myGameArea.frames % 120 === 0) {
    let y = myGameArea.canvas.height;
    let x = myGameArea.canvas.width;
    let minWidth = 20;
    var maxWidth = 100;
    var width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
    var minGap = 50;
    var maxGap = 100;
    var gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    obstaclesPosition.push(new Obstacles(50, 0, 'red', width, 10));
    obstaclesPosition.push(new Obstacles((x - 50) - width - gap, 0, 'green', width + gap, 10));
  }
}

// start the game, starting canvas and setting the game
function startGame() {
  myGameArea.start();
  setBackground();
  car.update();
}

// updating the game
function updateGame() {
  setBackground();
  car.newPos();
  car.update();
  updateObstacles();
}

document.getElementById("start-button").onclick = function () {
  console.log('hey button');
  // updateGameArea();
  startGame();
};

document.onkeydown = function (e) {
  switch (e.keyCode) {
    // left arrow
    case 37:
      car.speedX -= 1;
      break;
      // right arrow
    case 39:
      car.speedX += 1;
      break;
  }
}

document.onkeyup = function (e) {
  car.speedX = 0;
  car.speedY = 0;
}

// if starting with the following lines the script in the HTML don't have to be necessarily in the bottom
// window.onload = function() {
// }