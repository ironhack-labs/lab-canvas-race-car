function Canvas () {
  this.canvas = document.getElementById("canvas");
  this.ctx = canvas.getContext("2d");
}

Canvas.prototype.startGame = function (car) { //obstacles, etc
  this.car = car;
  // this.obstacles = obstacles;
};

Canvas.prototype.drawRoad = function () {
  //canvas board
  this.ctx.fillStyle = "green";
  this.ctx.fillRect(5, 0, 500, 600);
  this.ctx.fillStyle = "grey";
  this.ctx.fillRect(50, 0, 400, 600);
  this.ctx.fillStyle = "white";
  this.ctx.fillRect(60, 0, 20, 600);
  this.ctx.fillRect(420, 0, 20, 600);

//dash line
  this.ctx.strokeStyle = "white";
  this.ctx.beginPath();
  this.ctx.setLineDash([15, 6]);
  this.ctx.moveTo(250, 0);
  this.ctx.lineTo(250, 600);
  this.ctx.stroke();
};

Canvas.prototype.drawCar = function() {
  var img = new Image();   // Create new img element
  img.src = './images/car.png';
  imgScale = 158/319;
  img.onload = function() {
    this.ctx.drawImage(img, this.car.x, this.car.y, 100*imgScale, 100);
  }.bind(this);
};

// Canvas.prototype.drawObstacles = function(){
//    this.obstacles.getObstacles().forEach(function (obstacle) {
//      this.ctx.drawImage(img, obstacle.x, obstacle.y, 100*imgScale, 100);
//    }.bind(this))
// };

Canvas.prototype.updateCanvas = function () {
  this.ctx.clearRect(0,0,1500,1700);
  this.drawRoad();
  this.drawCar();
  // this.drawObstacles();
};
