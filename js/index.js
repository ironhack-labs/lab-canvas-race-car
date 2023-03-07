let gameStarted = false;
let gameOver = false;

window.addEventListener('load', () => {

  let startButton = document.getElementById('start-button');
  startButton.addEventListener('click', startGame);

  function startGame() {
    if (!gameStarted) {
      document.getElementById('game-startscreen').remove();    // remove the HTML start screen
    }
    gameStarted = true;
    gameOver = false;
    const scoreInterval = setInterval(function() {
      score++;
    },650)
    const obstaclesInterval = setInterval(function() {
      for (let i = 0; i < 10; i++){
        obstacles.push(new Obstacle());
      }
    },10000)
  }
});

// declare the variables we will be using
let roadBoundaries = 40;
let carImg;
let car;
let carSpeed = 5;
let canvasWidth = 451;
let canvasHeight = 705;
let carWidth = 60;
let carHeight = 122;
let obstacles = [];
let score = 0;

// preload the images
function preload() {
  roadImg = loadImage('../images/road-stripeless.png');
  roadStripes = loadImage('../images/road-stripes.png');
  carImg = loadImage('../images/car.png');
}

// create a class for car with the coordinates it needs
class Car {
  constructor(){
    this.x = canvasWidth - carWidth - 100;
    this.y = canvasHeight - carHeight - 10;
    this.carWidth = carWidth;
    this.carHeight = carHeight;
  }
  draw() {
    image(carImg, this.x, this.y, this.carWidth, this.carHeight);
  }
}

class Obstacle {
  constructor() {
    this.x = random(roadBoundaries, width - 160);
    this.y = 0 - random(0, height) + 120;
    this.height = 10;
    this.width = random(60,160);
  }
  
  draw() {
    push();
    fill(200,0,0);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
  
  move() {
    this.y += 1.5;
  }
  
  collide() {
    let distToCar = dist(this.x, this.y, car.x, car.y);
    if (distToCar <= 10) {
      carImg = loadImage('../images/car-crashed.png');
      gameOver = true;
    }
  }
}

// setup the canvas and variables
function setup() {
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('game-board');
  background(50);

  car = new Car;
}

// draw the elements
function draw() {
  image(roadImg, 0, 0, canvasWidth, canvasHeight, 0, 0, 0, 0, CONTAIN);
  image(roadStripes, 0, 0, canvasWidth, canvasHeight, 0, 0, 0, 0, CONTAIN);
  car.draw();

  // draw the score counter
  fill(255,255,255);
  text('score \n' + score, canvasWidth - 100, 30);
  textAlign(CENTER);
  textSize(20);

  if (gameStarted === true && keyIsDown(LEFT_ARROW) && car.x >= roadBoundaries) {
    car.x -= carSpeed;
  }
  if (gameStarted === true && keyIsDown(RIGHT_ARROW) && car.x <= (canvasWidth - carWidth - roadBoundaries*1.5)) {
    car.x += carSpeed;
  }

  if (gameOver) {
    background(0,0,0,175);
    textFont('Verdana');
    textAlign(CENTER, CENTER);
    textSize(85);
    textStyle(BOLDITALIC);
    text('GAME\nOVER!', canvasWidth / 2, canvasHeight / 2 - 60);
    textSize(30);
    text('\n\n\nyour score: ' + score, canvasWidth / 2, canvasHeight / 2 + 10);
    gameStarted = false;
    clearInterval(this.obstaclesInterval);
    clearInterval(scoreInterval);
  } else {
    for (let i = 0; i < obstacles.length; i++) {
      obstacles[i].collide();
      obstacles[i].draw();
      obstacles[i].move();
    }
  }
}


// // add the key functions
// function keyPressed() {
//   if (keyCode === LEFT_ARROW && car.x >= roadBoundaries) {
//     car.x -= carSpeed;
//   }
//   if (keyCode === RIGHT_ARROW && car.x <= (canvasWidth - carWidth - roadBoundaries*1.5)) {
//     car.x += carSpeed;
//   }
//   if (keyIsDown(LEFT_ARROW)) {
//     car.x -= 10;
//   }
//   if (keyIsDown(RIGHT_ARROW)) {
//     car.x += 10;
//   }
// }