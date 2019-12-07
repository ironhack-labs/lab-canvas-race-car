// define general configuration
const myGameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = 400;
    this.canvas.height = 510;
    this.context = this.canvas.getContext('2d');
    // create the canvas in html
    let divBoardGame = document.getElementById('game-board');
    divBoardGame.insertBefore(this.canvas, divBoardGame.childNodes[0]);
  },
}

// create car object
const car = {
  x: 180,
  y: 400,
  update: function () {
    let ctx = myGameArea.context;
    let carImage = new Image();
    carImage.src = './images/car.png';
    console.log(carImage);
    carImage.onload = () => {
      ctx.drawImage(carImage, this.x, this.y, 0.3 * carImage.width, 0.3 * carImage.height);
    }
  }
}

// create obstacles
// class Obstacles {
  //   constructor(x, y, width, height) {
  //     this.x = x;
  //     this.y = y;
  //     this.width = width;
  //     this.height = height;
  //   }
  //   update() {
  //   }
  // }


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

// start the game, starting canvas and setting the game
function startGame() {
  myGameArea.start();
  setBackground();
  car.update();
}

// updating the game
function updateGame() {
  setBackground();
}

document.getElementById("start-button").onclick = function () {
  console.log('hey button');
  // updateGameArea();
  startGame();
};

// if starting with the following lines the script in the HTML don't have to be necessarily in the bottom
// window.onload = function() {
// }