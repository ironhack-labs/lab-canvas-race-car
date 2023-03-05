window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {
    preload();
    setup();
    gameStarted = true;
    timer = setInterval(()=> {
      if(gameStarted){
        timePassed++;
        points++
      }
    }, 1000);
  }
};

let roadImage;
let carImage;
let obstacles = [];
let x = 100;
let y = 200;
let carX = 260;
let timer;
let timePassed = 0;
let gameOver = false;
let gameStarted = false;
let points = 0;

function preload() {
  roadImage = loadImage('images/road.png');
  carImage = loadImage('images/car.png');
}

function setup() {
  let canvas = createCanvas(400, 700);
  canvas.position(windowWidth / 2 - 1, windowHeight / 2 - 650);
}
function draw() {
  background(255);
  image(roadImage, x, y);
  roadImage.resize(282, 500);
  image(carImage, carX, 600);
  carImage.resize(50,75)
  if(keyIsDown(LEFT_ARROW)){
    carX -=5;
    carX = constrain(carX, x+10, x + 282 - 10 - 80);
  }else if (keyIsDown(RIGHT_ARROW)){
    carX += 5;
    carX = constrain(carX, x + 10, x + 282 - 10 - 80)
  }
  if (random(1) < 0.01){
    obstacles.push(new Obstacle());
  }
  for(let i = obstacles.length - 1; i >= 0; i--){
    obstacles[i].move();
    obstacles[i].draw();
    if (obstacles[i].y > height){
      obstacles.splice(i, 1);
    } else if (
      carX + 50 > obstacles[i].x &&
      carX < obstacles[i].x + obstacles[i].width &&
      600 + 75 > obstacles[i].y &&
      600 < obstacles[i].y + obstacles[i].height
    ){
      gameOver = true;
    } 
  }
  if (gameOver) {
    fill(255, 0, 0);
    textSize(32);
    textAlign(CENTER);
    text('Game Over!', width /2, height /2);
    noLoop();
    fill(0);
    textSize(24);
    textAlign(CENTER);
    text(`points: ${timePassed}`,200, 400);
  } else {
    points ++;
    fill(0);
    textSize(24);
    textAlign(LEFT);
    text(`points: ${points}`, 10, 30);
  }
}
class Obstacle {
  constructor(){
    this.x = random(50, 350);
    this.y = 0;
    this.speed = 2;
    this.width = random (30, 80);
    this.height = 20;
  }
  move(){
    this.y += this.speed;
  }
  draw(){
    fill(255, 0, 0);
    rect(this.x, this.y, this.width, this.height);
  }
}
;
