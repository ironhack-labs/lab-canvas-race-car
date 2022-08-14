let bg;
let player;

function preload() {
  player = loadImage("images/car.png");
}

function setup() {
  const canvas = createCanvas(600, 650);
  canvas.parent("game-board");
  bg = loadImage("images/road.png");
}

function draw() {
  background(bg);
  image(player, 5, 5);
}
