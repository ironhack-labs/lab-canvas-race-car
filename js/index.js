let bg;
let player;
let obstacles = [];
let obstacle;

let gravity = 180.0;

function preload() {
  player = loadImage("images/car.png");
}

function setup() {
  const canvas = createCanvas(600, 650);
  canvas.parent("game-board");
  bg = loadImage("images/road.png");
  player.resize(40, 80);
  speed = 4;
}

//keys, initial coords, x&y, boundries, all kinds of things!
const A_Key = 65;
const D_Key = 68;
const initialX = 350;
const initialY = 550;
let x = initialX;
let y = initialY;

let leftWall = 54;
let rightWall = 516;

let leftRectX = 0;
let leftRectY = 20;

function draw() {
  background(bg);
  image(player, x, y);

  const obstaclesOn = true;

  noStroke();
  fill("brown");

  let leftRectLength = random(200, 250);
  if (obstaclesOn) {
    leftRectY = leftRectY + 1;
  }

  if (leftRectY > 660) {
    leftRectY = 20;
    leftRectLength = random(200, 250);
  }

  let leftRect = rect(leftRectX, leftRectY, leftRectLength, 40);

  if (keyIsDown(A_Key)) {
    x -= speed;
    if (x < leftWall) {
      x = leftWall;
    }
  }
  if (keyIsDown(D_Key)) {
    x += speed;
    if (x > rightWall) {
      x = rightWall;
    }
  }
}

class Obstacle {
  constructor() {
    if (obstaclesOn) {
      this.width = 5 + random(40);
      this.height = 10 + random(40);
    }
  }
}

//a keycode = 65
//b keycode = 68

//left wall = 54
// right wall =516
