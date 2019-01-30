window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
  }
};

var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");

var car = {
  x: 190,
  y: 540,
  moveLeft:  function() { 
    this.x -= 25 
  },
  moveRight: function() { 
    this.x += 25 
  }
}

//W3 SCHOOLS
function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
  return false;
}

var img = new Image();
img.onload = function() { 
  ctx.drawImage(img, car.x, car.y, 40, 81); 
}
img.src = "images/car.png";

function generateX(){
  return Math.floor(Math.random()*340) + 57;
}

var y = 0;
var dy = +2;

class Obstacle {
  constructor(x, width){
    this.x = x;
    this.y = 0;
    this.width = width;
  }
}

let obs1 = new Obstacle(67, 25);
let obs2 = new Obstacle(200, 35);
let obs3 = new Obstacle(67, 45);

let obstacles = [];

function createObstacle(){
  let obs = {
    x:50,
    y:0
  }
  obstacles.push(new Obstacle(Math.random()*canvas.width, Math.random()*50));
  console.log(obstacles)
}

setInterval(createObstacle, 3000);

function drawObstacle() {
  for(var i = 0; i<obstacles.length; i++){
    obstacles[i].y += 2
    ctx.fillRect(obstacles[i].x,obstacles[i].y, obstacles[i].width,100)
  }
}

let frames = 0;

animate();
function animate(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawObstacle(obstacles[1]);
  ctx.drawImage(img, car.x, car.y, 40, 81);
  window.requestAnimationFrame(animate);
  frames += 1;
}

document.onkeydown = function(e) {
  if(car.x < 80){
    switch (e.keyCode) {
      case 39: car.moveRight(); console.log('right', car); break;
    }
  }
  else if(car.x > 300){
    switch (e.keyCode) {
      case 37: car.moveLeft(); console.log('left', car); break;
    }
  }
  else{
    switch (e.keyCode) {
      case 37: car.moveLeft();  console.log('left',  car); break;
      case 39: car.moveRight(); console.log('right', car); break;
    }
  }
}

let update = () => {
  setInterval(updateCanvas, 1000);
  update();
}

function updateCanvas() {
  ctx.clearRect(0,0,1500,1700);
  draw(car);
}