window.onload = function(){
  document.getElementById("start-button").onclick = function(){
    startGame();
  }
}
  function startGame() {
    
    document.getElementById("game-board").appendChild(canvas);
    canvas.width = 500;
    canvas.height = 850;
    generateScene();
    ctx.drawImage(car.picture, car.x , canvas.height - 200 , 60, 140);
    shortObstacle.drawObstacle();


}

let canvas = document.createElement('Canvas');
let ctx = canvas.getContext("2d"); 
let centerX = 250;
let centerY = 0;
//let car = new Image();
//car.src = "../starter_code/images/car.png";

class CarClass {
  constructor(x, pic, ctx) {
    this.x = x;
    this.ctx = ctx;
    this.picture = new Image();
    this.picture.src = pic;
    document.onkeydown = e => {
      switch (e.keyCode) {
        case 37:
          if (this.x <= centerX - 195 ) break;
          this.x -= 10;
          console.log("You clicked left");
          
          generateScene();
          this.ctx.drawImage(this.picture, this.x , canvas.height - 200 , 60, 140);
          break;
        case 39:
          if (this.x >= centerX + 135 ) break;
          this.x += 10;
          console.log("You clicked right");
          
          generateScene();
          this.ctx.drawImage(this.picture, this.x , canvas.height - 200 , 60, 140);
          break;
        default:
      }
    }
    document.onkeyup = e => {
   //  this.x = centerX;
     
    }
  }
} 

function generateScene(){
ctx.fillStyle = "grey"; 
    ctx.strokeStyle = "white"; 
    ctx.lineWidth = 5;
    ctx.fillRect(0 ,0,canvas.width, canvas.height);
    ctx.setLineDash([15,15]);
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX, canvas.height);
    ctx.stroke();
// Seitenstreifen on the left 
    ctx.lineWidth = 20;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(centerX - 175, centerY);
    ctx.lineTo(centerX -175, canvas.height);
    ctx.stroke();
// Seitenstreifen on the right 
ctx.setLineDash([]);
ctx.beginPath();
ctx.moveTo(centerX + 175, centerY);
ctx.lineTo(centerX +175, canvas.height);
ctx.stroke();
// Seitenstreifen on the left Green
ctx.lineWidth = 100;
ctx.strokeStyle= "green";
ctx.beginPath();
ctx.moveTo(centerX - 250, centerY);
ctx.lineTo(centerX -250, canvas.height);
ctx.stroke();

// Seitenstreifen on the right Green
ctx.beginPath();
ctx.moveTo(centerX + 250, centerY);
ctx.lineTo(centerX +250, canvas.height);
ctx.stroke();

ctx.lineWidth = 5;
ctx.strokeStyle = "white"; 
}

let car = new CarClass(centerX - 30,"../starter_code/images/car.png",ctx);

class Obstacle {
  constructor(x, width, ctx) {
    this.width = width;
    this.height = 15;
    this.color = "red";
    this.x = x;
    this.y = 0;
    this.ctx = ctx;
  }
  drawObstacle(){
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.x + this.width, this.height); 
  }

  updateObstacles(){
    this.x -= 10;
    
    generateScene();
    this.ctx.drawImage(this.picture, this.x , canvas.height - 200 , 60, 140);
    break;
  }
}

let shortObstacle = new Obstacle(Math.floor(Math.random()*100) , 100, ctx);

