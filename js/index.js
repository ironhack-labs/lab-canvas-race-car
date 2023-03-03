//Iteration 1, 2
let img;
let car;
let carX = 0;
const initialX = 200;
//obstacles
let oneRectX = 70;
let oneRectY = -50;

let twoRectX = 310;
let twoRectY = -250;

let threeRectX = 250;
let threeRectY = 100;

let fourRectX = 100;
let fourRectY = 250;

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

  // rectangle
  fill(color("#cf2558"));
  rect(oneRectX, oneRectY, 200, 20);
  rect(twoRectX, twoRectY, 100, 20);
  rect(threeRectX, threeRectY, 150, 20);
  rect(fourRectX, fourRectY, 100, 20);
  //animates the shapes in a straight line
  oneRectY++;
  twoRectY++;
  threeRectY++;
  fourRectY++;

  //moves the shapes back when they move off the canvas
  if (oneRectY > 700) {
    oneRectY = -50;
  }
  if (twoRectY > 700) {
    twoRectY = -50;
  }
  if (threeRectY > 700) {
    threeRectY = -50;
  }
  if (fourRectY > 700) {
    fourRectY = -50;
  }
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
