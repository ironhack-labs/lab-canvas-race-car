var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// ctx.fillStyle = "green";
// ctx.fillRect(0,0,30,670)
// ctx.fillStyle = "grey";
// ctx.fillRect(30,0,10,670);
// ctx.fillRect(50,0,400,670);
// ctx.fillRect(460,0,10,670);
// ctx.fillStyle = "green";
// ctx.fillRect(470,0,30,670);
// ctx.beginPath()
// ctx.setLineDash([30,15])
// ctx.lineWidth = 3.5;
// ctx.strokeStyle = "white"
// ctx.moveTo(250,0)
// ctx.lineTo(250,670)
// ctx.stroke()

class Background{
  constructor(){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.image = new Image();
    this.image.src = "./images/Background.png"
  }
  gameOver(){
    //   // clearInterval(interval);
      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.fillText("OOPS, YOU MISSED!", 110, 325)
      score = 0;
    }
  points(){
    if(frames % 100 == 0) {score++}
    document.getElementById("score").innerHTML = "SCORE: " + score;
    if(score >= maxScore) {
      maxScore = score;
      document.getElementById("max-score").innerHTML = "MAX SCORE: " + maxScore;
    }
    // ctx.font = "20px Arial"
    // ctx.fillStyle = "white"
    // ctx.fillText("POINTS: " + score, 80, 50)
    // ctx.fillText("MAX SCORE: " + maxScore, 80, 80)
  }
  draw(){
    this.y++;
    if(this.y > +canvas.height) this.y = 0;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x, this.y - this.height, this.width, this.height)
  }
}

class Car{
  constructor(brand){
    this.brand = brand;
    this.image = new Image();
    this.image.src = "./images/car.png";
    this.x = 230;
    this.y = 500;
    this.width = 40;
    this.height = 100;
  }
  draw(){
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }
  collision(item){
    return (this.x < item.x + item.width) &&
    (this.x + this.width > item.x) &&
    (this.y < item.y + item.height) &&
    (this.y + this.height > item.y);
  }
}

class Obstacle{
  constructor(x, width){
    this.x = x;
    this.y = 0;
    this.width = width;
    this.height = 30;
  }
  draw(){
    if(frames % 500) this.y += 1;
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

var score = 0;
var maxScore = 0;
var frames = 0;
var background = new Background();
var car = new Car('BMW')
var obstacles = []

function generateObstacles() {
  if(frames % 150 == 0) {
    var obstacle = new Obstacle(Math.floor(Math.random() * 300) + 50, Math.floor(Math.random() * 100 + 50));
    obstacles.push(obstacle);
  }
}

function drawObstacles() {
  obstacles.forEach( (obstacle, index) => {
    if(obstacle.y > +canvas.height) obstacles.splice(index, 1);
    obstacle.draw()
    if(car.collision(obstacle)) {
      console.log("GAME OVER");
      background.gameOver()
    }
  }) 
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    var interval = setInterval(function(){
      frames++;
      ctx.clearRect(0,0,canvas.width,canvas.height);
      background.draw()
      car.draw()
      background.points()
      generateObstacles()
      drawObstacles()
    },1000/100 );
  };

addEventListener('keydown', function(event){
  if(event.keyCode === 37){car.x -= 80}
  if(event.keyCode === 39){car.x += 80}
  if(car.x > 390){car.x = 390}
  if(car.x < 70){car.x = 70}
  })

};