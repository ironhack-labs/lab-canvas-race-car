var $canvas = document.querySelector('canvas');
var context = $canvas.getContext('2d');
const width = $canvas.width;
const height = $canvas.height;

let gameIsRunning = true;
let time = 0;
const speed = 2000; //this represents 2 seconds
const car = new Car();
const obstacle = new Obstacle();

const paintBoard = () => {
  context.fillStyle = 'green';
  context.fillRect(0, 0, width, height);
  context.fillStyle = 'grey';
  context.fillRect(40, 0, 420, height);
  context.fillStyle = 'white';
  context.fillRect(50, 0, 10, height);
  context.fillStyle = 'white';
  context.fillRect(440, 0, 10, height);
  context.strokeStyle = 'white';
  context.beginPath();
  context.setLineDash([25, 15]);
  context.lineWidth = 5;
  context.moveTo(250, 0);
  context.lineTo(250, height);
  context.stroke();
};

function startGame() {
  loop();
}

const obstacles = [];

//console.log(obstacles);

const runLogic = () => {
  for (let obstacle of obstacles) {
    obstacle.runLogic();
  }
  checkCollision();
};

function draweverything() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  paintBoard();
  car.drawCar();
  for (let obstacle of obstacles) {
    //console.log('im running');
    obstacle.paint();
  }
}

const checkCollision = () => {
  const carX = car.x; //we know it is 210
  const carY = car.y;
  const carXW = car.x + car.width;
  const carYH = car.y + car.height;

  //we got an obstacles array...
  for (let i = 0; i < obstacles.length; i++) {
    const obstaclesX = obstacles[i].positionX;
    const obstaclesY = obstacles[i].positionY;
    const obstaclesXW = obstacles[i].positionX + obstacles[i].width;
    const obstaclesYH = obstacles[i].positionY + obstacles[i].height;

    if (carXW > obstaclesX && carX < obstaclesXW && carYH > obstaclesY && carY < obstaclesYH) {
      gameIsRunning = false;
    }
  }
};

const loop = timestamp => {
  draweverything();
  runLogic();
  //console.log(timestamp);
  if (time < timestamp - speed) {
    time = timestamp;
    const obstacle = new Obstacle();
    obstacles.push(obstacle);
  }
  if (gameIsRunning) {
    window.requestAnimationFrame(loop);
  }
};

document.getElementById('start-button').onclick = function() {
  startGame();
};
