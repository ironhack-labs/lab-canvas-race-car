const startScreen = document.querySelector(".game-intro");
const gameScreen = document.querySelector(".game-board");
const gameOverScreen = document.querySelector(".game-over");

let car;
let sound; // does not work
let firstObstacle;
let obstacles = [];
let obstaclePosition = Math.floor(Math.random()* 400);
let obstcaleWidth = Math.floor(Math.random()* 100 + 100);

function preload() {
  roadImg = loadImage("/lab-canvas-race-car/images/road.png");
  carImg = loadImage("/lab-canvas-race-car/images/car.png");
  //sound = loadSound('/lab-canvas-race-car/assets/568139__zerono1__slow-down-brake-crash.mp3');
};

function setup() {
  car = new Racecar;
  obstacles.push(new Obstacle(obstaclePosition, obstcaleWidth));
  frameRate(60);
  createCanvas(500, 700);
};

function createObstacles () {
  // every 10 seconds new obstacle in array:
  interval = setInterval(() => {
    obstacles.push(new Obstacle(obstaclePosition, obstcaleWidth));
  }, 1000);
  // Alternative solution could be: if-statement: if first obstacle moves out of canvas 
  // push new instance of obstacle to the array
};


class Obstacle {
  constructor(position, width) {
    this.y = 10;
    this.x = position;
    this.height = 20;
    this.width = width;
  }

  draw() {
    let red = color(138, 3, 3);
    fill(red);
    rect(this.x, this.y, this.width, this.height);
    this.y++;
  }
}

class Racecar {
  constructor() {
    this.x = 240;
    this.y = 600;
    this.width = 60;
    this.height = 100;
  }

  draw() {
    image(carImg, this.x, this.y, this.width, this.height); // is carImg at the right place?

    // Moving car left and right - w/o moving it off the board:
    //  RIGHT:
    if (keyIsDown(39)) {
      if (this.x <= 405) {    
        this.x += 3;
      };
    };

    //  LEFT:
    if (keyIsDown(37)) {     
      if((this.x >= 45)) {
        this.x -= 3;
      };
    };
  };
}

function stopGame() {
  //if game over -> hide canvas
  startScreen.style.display = "none";
  gameScreen.style.display = "none";
  gameOverScreen.style.display = "block";

  //make sound of crash - Does not work...
  // sound.play();
}

function collision(car, obstacle) {
  //CAR SHAPE:
  const leftOfCar = car.x;
  console.log(leftOfRect1);
  const rightOfCar = car.x + car.width;
  const topOfCar = car.y;
  const bottomOfCar = car.y + car.height;

  //Obstacle SHAPE:
  const leftOfObstacle = obstacle.x;
  const rightOfObstacle = obstacle.x + obstacle.width;
  const topOfObstacle = obstacle.y;
  const bottomOfObstacle = obstacle.y + obstacle.height;

  const collidingInXDirection =
  rightOfCar > leftOfObstacle && rightOfObstacle > leftOfCar;

  const collidingInYDirection =
  bottomOfCar > topOfObstacle && bottomOfObstacle > topOfCar;

  return collidingInXDirection && collidingInYDirection;
}

let points = 10;
function pointCountDown() {
  const obstaclesTheCarCollidedWith = obstacles.filter((obstacle) => { 
    //this checks probably collision with EVERY obstacle, not just the one on display...
    return collision(car, obstacle);  //what value is here returned????
  }); 

  // Collision results in minus-points:
  if (obstaclesTheCarCollidedWith.length >= 1) {
    points -= 1;
  };

  //if no points left: Game stops:
 if (points <= 0) {
  stopGame();
 }
}

function draw() {
  //start and stop the car here
  image(roadImg, 0,0, 500, 700);
  car.draw();

  //call Obstacles with setTImer/
  interval = setInterval(() => {
    let randomObstacleFromArray = Math.floor(Math.random() * obstacles.length);
    obstacles[randomObstacleFromArray].draw();  //always returns undefined...wrong method probably, but its late...
  }, 6000);
}

window.onload = () => {
  gameScreen.style.display = "none"; // does mot do anything????
  document.getElementById('start-button').onclick = () => {
    startGame(pointCountDown);
  };

  function startGame() {
    startScreen.style.display = "none";
    gameOverScreen.style.display = "none"; //does not work!!

    createObstacles(); // or inside draw-function??

    //display the points on screen:
    /* const pointContainer = document.querySelector("points")
    let pointElement = document.createElement('p');
    pointElement.innerText = `${points} POINTS`;
    pointContainer.appendChild(pointElement); */
  };

  //should the stopGame- function be included down here???
}

