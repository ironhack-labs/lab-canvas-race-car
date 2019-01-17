function drawMap(ctx){
  ctx.beginPath();
  ctx.rect(0, 0, 20, 500); 
  ctx.fillStyle = "green";
  ctx.fill();

  ctx.beginPath();
  ctx.rect(280, 0, 20, 500); 
  ctx.fillStyle = "green";
  ctx.fill();

  ctx.beginPath();
  ctx.rect(20, 0, 260, 500); 
  ctx.fillStyle = "gray";
  ctx.fill();

  ctx.beginPath();
  ctx.rect(25, 0, 10, 500); 
  ctx.fillStyle = "white";
  ctx.fill();

  ctx.beginPath();
  ctx.rect(265, 0, 10, 500); 
  ctx.fillStyle = "white";
  ctx.fill();
  
  ctx.beginPath();
  ctx.lineWidth = "2";
  ctx.strokeStyle = "white";
  ctx.setLineDash([5, 2]);
  ctx.rect(150, 0, 0, 500); 
  ctx.stroke();
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  const canvas = document.getElementById('my-canvas');
  var ctx = canvas.getContext('2d');

  drawMap(ctx);

  function startGame() {
    var carImg = new Image();
    imgScale = 0.5;
    carImg.onload = function() {
    ctx.drawImage(carImg, 130, 390, 80*imgScale, 80);
    };
    carImg.src = './images/car.png';
  }
};

const moveDist = 30; 

var playerCar = {
  x: 130,
}

function moveRight(){
  if(playerCar.x < 220){
    playerCar.x += moveDist;
    console.log(playerCar.x);
  }
}

function moveLeft(){
  if(playerCar.x > 40){
    playerCar.x -= moveDist;
    console.log(playerCar.x);
  }
}

function drawCar(){

  const canvas = document.getElementById('my-canvas');
  var ctx = canvas.getContext('2d'); 
  
  var carImg = new Image();
    imgScale = 0.5;
    carImg.src = './images/car.png';

  ctx.clearRect(0, 0, 300, 500);
  drawMap(ctx)
  ctx.drawImage(carImg, playerCar.x, 390, 80*imgScale, 80);
}

document.onkeydown = function(e){
  switch(e.keyCode){
    case 37:
      moveLeft();
      drawCar();
      break;
    case 39:
      moveRight();
      drawCar();
      break;
  }
}

var obstacles = [];

function Obstacle(x){
  this.y = 0;
  this.x = x;
}

function xObstacle(){
  return 50 + Math.floor(Math.random() * 6) * 30;
}

setInterval(function(){
  const myObstacle = new Obstacle(xObstacle());
  obstacles.push(myObstacle);
}, 2000)

setInterval(function(){
  const canvas = document.getElementById('my-canvas');
  var ctx = canvas.getContext('2d'); 
  
  ctx.clearRect(0, 0, 300, 500);
  drawMap(ctx)
  drawCar();

  for(let i = 0; i < obstacles.length; i++){
    obstacles[i].y += 1;
    ctx.rect(obstacles[i].x, obstacles[i].y, 20, 20);
    ctx.fillStyle = "red";
    ctx.fill();
  }
}, 10)