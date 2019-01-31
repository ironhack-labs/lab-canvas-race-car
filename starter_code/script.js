window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    animate();
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

var img = new Image();
img.onload = function() { 
  ctx.drawImage(img, car.x, car.y, 40, 81); 
}
img.src = "images/car.png";

function generateX(){
  return Math.floor(Math.random()*250) + 57;
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

//Math.random() * (max - min) + min;
// Math.random()*canvas.width

let obstacles = [];

function createObstacle(){
  let obs = {
    x:50,
    y:0
  }
  obstacles.push(new Obstacle(generateX(), Math.random()*(175-80)+80));
  console.log(obstacles)
}

setInterval(createObstacle, 3000);

function drawObstacle() {
  for(var i = 0; i<obstacles.length; i++){
    obstacles[i].y += 2
    ctx.fillRect(obstacles[i].x,obstacles[i].y, obstacles[i].width,30)
  }
}

let frames = 0;
let clearedObstacles = 0;

console.log(frames);
// animate();
function animate(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawObstacle(obstacles[1]);
  ctx.drawImage(img, car.x, car.y, 40, 81);
  window.requestAnimationFrame(animate);
  // if (Obstacle.y > window.height - 40) {
  //   $('#score').text("Score: " + points);
  //   console.log(points);
  // }
  frames += 1;
  //$('#score').text("Score: " + frames/5);
  document.getElementById('score').innerText = "Score: " + Math.floor(frames/5)
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
 if (Obstacle.y === car.y && (Obstacle.x === car.x)){
  function stop () {
    
 }}
// let clearedObstacles = 0;
// let points = clearedObstacles * 5;

// if (Obstacle.y > window.height - 40) {
//   $('#score').text("Score: " + points);
//   console.log(points);
// }