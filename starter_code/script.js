var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

class Background{
  constructor(){
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.image = new Image()
    this.image.src = './images/runway.png'
  }
  gameOver(){
    clearInterval(interval);
    ctx.fillStyle = "black"
    ctx.fillRect(70, 140, 220, 60);
    ctx.font = "30px Monospace";
    ctx.fillStyle = "white";
    ctx.fillText ("GAME OVER", 95, 180);
    clearInterval(score);
    ctx.clearRect(160, 30, 35, 15);
    ctx.fillStyle = "black"
    ctx.fillRect(160, 30, 35, 15);
    ctx.font = "10px Monospace";
    ctx.fillStyle = "white";
    ctx.fillText("FINAL SCORE", 145, 40);
  }
  draw(){
    this.y++;
    if(this.y > +canvas.height) this.y = 0;
    ctx.drawImage(this.image, this.x, this.y ,this.width, this.height); 
    ctx.drawImage(this.image, this.x, this.y - this.height , this.width, this.height); 
    ctx.fillStyle = "black"
    ctx.fillRect(140, 0, 75, 50);
    ctx.font = "10px Monospace";
    ctx.fillStyle = "white";
    ctx.fillText("SCORE", 162, 40);
  }
}

class Car{  
  constructor (){
    this.x = 160;
    this.y = 470;
    this.width = 35;
    this.height = 70;
    this.image = new Image();
    this.image.src = './images/car.png';
  }
  collision(item){
    return (this.x < item.x + item.width) &&
        (this.x + this.width > item.x) &&
        (this.y < item.y + item.height) &&
        (this.y + this.height > item.y);
  }
  draw(){
    ctx.drawImage(this.image, this.x, this.y, this.width,this.height);
  }
}

class Obstacle {
  constructor() {
    this.width = randomNum(150, 40);
    this.height = 20;
    this.x = randomNum(200, 40);
    this.y = 0 - this.height;
  }
  draw() {
    if (frames % 10) this.y += 2
    ctx.fillStyle = "#870007";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

var background = new Background();
var car = new Car();
var frames = 0;
var obstacles = [];
var interval;
let startedGame = false;

function randomNum(max, min){
  return Math.floor(Math.random() * (max - min) + min);
}

function generateObstacles(){
  if (frames % 500 == 0 || frames % 200 == 0) {
    var obstacle = new Obstacle();
    obstacles.push(obstacle);
  }
}

function drawObstacles(){
  obstacles.forEach((obstacle, index) => {
    if (obstacle.y > canvas.height) obstacles.splice(index, 1);
    obstacle.draw();
    if(car.collision(obstacle)){
      background.gameOver();
    }
  });
}

window.onload = function(){
  function startGame() {
    startedGame = true;
    interval = setInterval(function(){
      frames++;
      ctx.clearRect(0,0,canvas.width,canvas.height);
      background.draw();
      car.draw();
      generateObstacles();
      drawObstacles();
    }, 1000 / 250);
  }

  document.getElementById("start-button").onclick = function() {
    startGame();
    var l = document.getElementById("number");
    var n = 1;
    score = setInterval(function(){
      l.innerHTML = n;
      n++;
    },750);
  };

  document.addEventListener("keydown", function(event){
    if(event.keyCode === 37 && car.x >= 40){
      car.x -= 25;
    }else if (event.keyCode ===39 && car.x <= 280){
      car.x += 25;
    }
  });
}; 