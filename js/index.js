let bg;
let player;

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

//keys
const A_Key = 65;
const D_Key = 68;
const initialX = 350;
const initialY = 550;
let x = initialX;
let y = initialY;

function draw() {
  background(bg);

  //initial coords, x&y, boundries

  // let leftWall = 54;
  // let rightWall = 518;

  // let xc = constrain(350, leftWall, rightWall);

  image(player, x, y);

  if (keyIsDown(A_Key)) {
    x -= speed;
    console.log(x);
  }
  if (keyIsDown(D_Key)) {
    x += speed;
    console.log(x);
  }
}

//a keycode = 65
//b keycode = 68

//left wall = 54
// right wall =518
