let imgRoad;
let imgCar;
let imgGameOver;
let carX;
let obstacles = [];
let road;
let car = {
  x:250,
  y:550,
  w:50,
  h:100
}
let scoreCounter = 0;

function preload() {
  imgRoad = loadImage('/images/road.png');

  imgCar = loadImage('/images/car.png');

  imgGameOver = loadImage('/images/gameover.jpg');
}


function setup() {
  createCanvas(480, 650);
  
}

function draw() {
  background(220);
  image(imgRoad, 0, 0, 482, 741);

  // score counter while game on
  textSize(32);
  fill(255,255,255);
  text('Score: ', 75, 10, 20, 40);
  text(scoreCounter, 180, 10, 20, 40);
  

  // adding constrain, drawing a car and obstacles
  let leftWall = 55;
  let rightWall = 380;

  car.x = constrain (car.x, leftWall, rightWall);
  image(imgCar, car.x, car.y, car.w, car.h);

  for (obstacle of obstacles) {
    obstacle.y += 2;

    fill(255, 0, 0);
    rect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
    collide(car, obstacle);
  }
}

//collision and game over 
function collide(rect1, rect2) {
  if (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.h + rect1.y > rect2.y
  )  {
    gameOver();
    return true;
  }
  return false;
}

function gameOver () {
  redraw();
  background(0, 0, 0);
  text('! GAME OVER !', 130, 160, 300, 300);
  text('Your score is:', 150, 190, 300, 300);
  text(scoreCounter, 230, 225, 20, 40);
  image(imgGameOver, 80, 300, 320, 213);
  noLoop();
}


function createObstacle () {
  let obstacleW = random(20, 200);
  let obstacle = {
        x: random(55, 380 - obstacleW), // this way our car doesn't go past the rightWall
        y: random(-200, 0),
        w: obstacleW,
        h: 40,
      }
      obstacles.push(obstacle);
    }
    setInterval(createObstacle, 2500); //this "produces" an obstacle every 2,5 sec

    function increaseScore () {
      scoreCounter++;
    }
    setInterval(increaseScore, 1000);


// key controls for the car
function keyPressed() {

  if (keyCode === RIGHT_ARROW) {
    console.log("Go right!!!");
    car.x += 40;
  }

  if (keyCode === LEFT_ARROW) {
    console.log("Go left!!!");
    car.x -= 40;
  }
}
