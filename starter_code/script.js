var canvas = document.getElementById("game-board");
var ctx = canvas.getContext('2d');
var frames = 0;

class Player{
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 150;
    this.y = 400;
    this.width = 30;
    this.height = 60;
    this.score = 0;
    this.img = new Image();
    this.img.src = 'images/car.png';
  }

  move(direction) {
    var xMin = 0;
    var xMax = this.ctx.canvas.width - this.width;
    switch (direction) {
      case "right":
      if (this.x >= xMax){
      } else{
        this.x += 5;  
      }
      break;
      case "left":
      if (this.x <= xMin){
      } else {
        this.x -= 5;
      }
        break;
    }
  }

  draw(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

document.onkeydown = function (event) {
  event.preventDefault()
  switch (event.code) {
    case "ArrowRight":
      p1.move("right")
      break
    case "ArrowLeft":
      p1.move("left")
      break
  }
}

var p1 = new Player(ctx);

class Obstacle{
  constructor(ctx, width, x){
    this.cts = ctx;
    this.width = width;
    this.x = x;
    this.y = 20;
  }
}

let obstacles = [];

function drawObstacle(obstacles){
  for(let i =0; i< obstacles.length; i++){
    ctx.fillStyle = "chartreuse";
    ctx.fillRect(obstacles[i].x,obstacles[i].y, obstacles[i].width,10);
    obstacles[i].y += 2;
    if (obstacles[i].y > 500) {
      obstacles.shift()
      p1.score++;
    }
  }
}

function score(ctx, p1){
  ctx.font = '30px serif';
  ctx.fillStyle = 'white';
  ctx.fillText('Score: '+ p1.score, 200, 100);
}



function startGame() {
  var img = new Image();
  img.src = 'images/road.jpg';
  ctx.drawImage(img, 0, 0, 300, 500);
}

function addObst(){
  frames++;
  if (frames % 120 === 0) {
    minX = 0;
    maxX = 150;
    x = Math.floor(Math.random()*(maxX-minX+1)+minX)
    minWidth = 20;
    maxWidth = 200;
    width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
    obstacles.push(new Obstacle(ctx, width, x));
  }
}

function update(intervalId) {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  startGame();
  p1.draw();
  addObst();
  drawObstacle(obstacles);
  if (crash(intervalId)){
    clearInterval(intervalId);
  }
  score(ctx, p1);
}

function crash(){
  let checkCrash = false;
  for(let i = 0; i<obstacles.length; i++){
    if (p1.y <= obstacles[i].y && p1.x > obstacles[i].x && p1.x <obstacles[i].x+obstacles[i].width){
      checkCrash = true;
    }
  }
  return checkCrash;
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    let intervalId = setInterval(function(){
      update(intervalId);
    }, 1000/50);
  };
};
