

var canvas; 
var ctx;

// Car 

function Car () {
  this.x;
  this.y;
  this.image;  
  this.speed = 10;
}

Car.prototype.moveLeft = function() {
  if (this.x >= 20 && this.x <= 300) {
    this.x -= 10;
  }; 
}

Car.prototype.moveRight = function() {
  if (this.x >= 0 && this.x <= 230) {
  this.x += 10;
  };
}

var car = new Car();

  // Road 

function drawRoad () {
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, 300, 600);
  ctx.fillStyle = "gray";
  ctx.fillRect(20, 20, 260, 560);
  ctx.clearRect(35, 20, 5, 560);
  ctx.clearRect(260, 20, 5, 560);
  ctx.strokeStyle = "white";
  ctx.setLineDash([20,20]);
  ctx.beginPath();
  ctx.moveTo(150,20);
  ctx.lineTo(150,580);
  ctx.stroke();
}

var frames = 0;
var obstacles = [];

// Load Canvas

window.onload = function() {

  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext('2d');

  document.getElementById("start-button").onclick = function() {
    startGame();
  };
}


// Start Game 

function startGame() {

  drawRoad();

 
  car.image = new Image (50,90);  
  car.x = (canvas.width/2)-25;
  car.y = canvas.height-110;
  car.image.onload = function drawImage () {
    updateCanvas();
  } 
  car.image.src = "images/car.png";

};

  
// Update Canvas

function updateCanvas() {
  frames++;

  if(frames % 100 === 0) {
    obstacles.push(new Obstacle());
  }

  ctx.clearRect(0, 0, 300, 600);
  drawRoad();
  ctx.drawImage(car.image , car.x, car.y, car.image.width, car.image.height);

  for(var i = 0; i < obstacles.length; i++) {
      obstacles[i].draw();
      obstacles[i].y += 5;
  }

  window.requestAnimationFrame(updateCanvas);
}
    

   // Moving the car
  
  window.onkeydown = function(e) {
    switch(e.keyCode) {
      case 37:
        car.moveLeft();
        console.log("You moved left");
        break;
      case 39:
        car.moveRight();
        console.log("You moved right");
        break;
      }
  };



// Obstacles

  function Obstacle() { 
    this.x = Math.random() * canvas.width;
    this.y = 0;
    this.height = 20;
    this.width = 80;
    this.draw = function () {
      ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    
    }
  }
