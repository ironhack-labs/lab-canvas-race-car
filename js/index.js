const canvasElement = document.querySelector('#canvas');
canvasElement.style.background = 'green';

// // Drawing background by adding image // ?? For some reason this is not working, logo.png does work
// let bg = new Image();
// bg.src = '../images/road.png'
// ctx.drawImage(bg, 0, 0);

// Draw the game board;
// Create context
const ctx = canvasElement.getContext('2d'); 

// Opening text
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.font = "40px Arial";
ctx.fillText(`Are you ready?`, 125, 250);
ctx.closePath();

// Global variables
let carX = 100, carY = 525, carWidth = 60, carHeight = 120;
let keyLeft = false;
let keyRight = false;
let animationId = null;
let obstacleIntervalId = null;
let gameOver = false;
let obstacles = [];
let score = 0;

// Obstacle class
class Obstacle {
  constructor() {
    this.x =  randomX();
    this.y = 0;
    this.width = randomWidth(this.x);   //randomWidth();
    this.height = randomHeight();
  }
}

// Randomizer functions for creating random sized and positioned obstacles
function randomX() {
  return Math.floor(Math.random() * (canvas.width - 100) ) + 50;
}

const randomWidth = (x) => {
  if (x >= 130) {
    return Math.floor(Math.random() * (canvas.width - x - 50));
  }
  else {
    return Math.floor(Math.random() * (canvas.width - x - 50 - 80));  // 80 because car is 60 wide, not entirely clear -80 should happen in a conditional
  }
}

function randomHeight() {
  return Math.floor(Math.random() * 75 ) + 25;
}

// Create a new obstacle every 2 seconds
const createObstacle = () => {
  obstacleIntervalId = setInterval(() => {
    let newObstacle = new Obstacle;
    obstacles.push(newObstacle)
  }, 2000)
}


const checkCollision = obstacle => {
  if ( obstacle.y + obstacle.height > carY && obstacle.y + obstacle.height < carY + carHeight ) {    
    if ( !(carX + carWidth < obstacle.x  ||   obstacle.x + obstacle.width < carX) ) {
      gameOver = true;
    }
  }
}

const incrementScore = obstacle => {
  if (obstacle.y == canvas.height - 50) {
    score++;
  }   
}

// Draw all shapes
const drawAllObstacles = () => {
  // TO DO: could create conditional loop first that loops over array and deletes objects and deletes objects from the array 
  for (let i = 0; i < obstacles.length; i++) {
    checkCollision(obstacles[i])
    incrementScore(obstacles[i])
    drawObstacle(obstacles[i])
    obstacles[i].y += 2;
  }
}

const drawObstacle = (obstacle) => {
  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  ctx.closePath();
}

const drawRoad = () => {
  // Draw the road background
  ctx.fillStyle = 'grey';
  ctx.fillRect(25, 0, canvas.width - 50, canvas.height);
  
  // Draw the outer white lines
  ctx.beginPath();
  ctx.setLineDash([0]);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 10;
  
  ctx.moveTo(40, 0);
  ctx.lineTo(40, canvas.height);
  ctx.stroke();
  
  ctx.moveTo(canvas.width - 40, 0);
  ctx.lineTo(canvas.width - 40, canvas.height);
  ctx.stroke();
  
  // Draw the middle line
  ctx.moveTo((canvas.width / 2)-2.5, 10)
  ctx.lineTo(canvas.width / 2, canvas.height)
  ctx.lineWidth = 5;
  ctx.setLineDash([25]);
  ctx.stroke();
}

const drawCar = () => {
  // carX, carY are the top left coordinates of the car, car is 60 x 120 in size;
  drawWheel(carX, carY + 20)
  drawWheel(carX, carY + 80)
  drawWheel(carX + carWidth, carY + 20)
  drawWheel(carX + carWidth, carY + 80)
  ctx.fillStyle = 'blue';
  ctx.fillRect(carX, carY, carWidth, carHeight);
}

function drawWheel(x, y) {
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.strokeStyle = 'black';
  ctx.lineCap = 'round';
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + 20);
  ctx.stroke();
  ctx.closePath()
}

const drawScore = () => {
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.font = "25px Arial";
  ctx.fillText(`Score: ${score}`, 90, 100);
  ctx.closePath();
}

const animate = () => {
  drawRoad();
  drawCar();
  drawAllObstacles();
  drawScore();
  
  // Move the car
  if (keyLeft) {
    if (carX > 50) {
      carX -= 20;
      keyLeft = false; 
    }
  }
  if (keyRight) {
    if (carX < canvas.width - carWidth - 50) {
      carX += 20;
      keyRight = false;       
    }
  }
  
  if (gameOver) {
    cancelAnimationFrame(animationId);
    clearInterval(obstacleIntervalId)
  }
  else {
    animationId = requestAnimationFrame(animate);
  }
}

const startGame = () => {
  gameOver = false;
  animationId = null;
  obstacles = [];
  score = 0;
  animate();
  createObstacle();
}

window.onload = () => {
  document.addEventListener('keydown', (event) => {
    if (event.code === "ArrowLeft") {
      keyLeft = true;
      keyRight = false;
    }
    if (event.code === "ArrowRight") {
      keyRight = true;
      keyLeft = false;
    }
  })

  document.getElementById('start-button').onclick = () => {
    startGame();
  };
};
