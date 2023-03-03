function startGame() {}

//Iteration 1, 2
let img;
let car;
let carX = 0;

const initialX = 200;

function preload() {
  img = loadImage("../images/road.png");
  car = loadImage("../images/car.png");
}

function setup() {
  createCanvas(480, 740);
}

function draw() {
  background(220);
  image(img, 0, 0, 482, 741);

  //adding constrains

  let leftWall = 55;
  let rightWall = 400;

  const roadLimits = constrain(carX, leftWall, rightWall);
  image(car, roadLimits, 550, 50, 100);
}
//Iteration 3
function keyPressed() {
  console.log("Hello some key was pressed!");
  console.log(keyCode);
  console.log(UP_ARROW);

  if (keyCode === RIGHT_ARROW) {
    carX += 20;
  }

  if (keyCode === LEFT_ARROW) {
    carX -= 20;
  }
}
