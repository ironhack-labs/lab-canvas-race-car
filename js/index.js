//initial declarations
let bg, player;

//preload & setup
function preload() {
  player = loadImage("images/car.png");
}

function setup() {
  const canvas = createCanvas(600, 650);
  canvas.parent("game-board");
  bg = loadImage("images/road.png");
  player.resize(40, 80);
  speed = 3;
  obst = new Obstacle();
  r = random(200, 600);
  // frameRate(30);
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

//draw
function draw() {
  background(bg);
  image(player, x, y);

  const obstaclesOn = true;

  obst.fall();
  // obst.randomize();
  obst.show((rLength = r));

  //car movement
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

function Obstacle() {
  this.x = 0;
  this.y = -20;

  this.fall = function () {
    this.x = this.x;
    this.y = this.y + 1;

    if (this.y > 660) {
      this.y = -5;
    }
  };

  // this.randomize = function () {};

  this.show = function () {
    rect(this.x, this.y, rLength, 40);
    fill("brown");
    noStroke();
  };
}
