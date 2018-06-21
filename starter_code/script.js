var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  }
}

function Car() {
  this.x = 300;
  this.y = 800;
  this.maxX = 600;
  this.minX = 0;
  this.img = new Image();
  this.img.src = "images/car.png";
}
Car.prototype.moveRight = function() {
  this.x += 20;
  if (this.x > this.maxX) {
    this.x = this.maxX;
  }
};
Car.prototype.moveLeft = function() {
  this.x -= 20;
  if (this.x < this.minX) {
    this.x = this.minX;
  }
};
var car = new Car();

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37: car.moveLeft(); 
    case 39: car.moveRight();
  }
}
function drawRoad() {
  ctx.fillStyle = "green";
}

function startGame() {
  ctx.clearRect(0, 0, 1000, 1000);
  window.requestAnimationFrame(updateCanvas);
  drawRoad()
}

window.requestAnimationFrame(updateCanvas);
