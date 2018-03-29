function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.canvas.width = 1000;
  this.canvas.height = 800;

  this.ctx = this.canvas.getContext("2d");

  this.roads = [
    new Road(this.canvas, this.ctx),
    new Road(this.canvas, this.ctx)
  ]

  this.car = new Car(this.canvas, this.ctx, "images/car.png");

  this.obstacles = [];
}

Game.prototype.start = function () {
  setInterval(function () {

    this.clear();

    this.drawRoad();
    this.car.draw();
    this.drawObstacles();

    this.checkCollisions();

  }.bind(this), 30)

  setInterval(this.addObstacle.bind(this), 10000)
}

Game.prototype.drawRoad = function () {

  var i = 7;

  if(this.roads[0].y >= this.canvas.height){
    this.roads[0].y = 0;
  }

  this.roads[0].y += i;

  this.roads[1].y = this.roads[0].y - this.canvas.height;

  this.roads[0].draw();
  this.roads[1].draw();
}

Game.prototype.addObstacle = function() {
  this.obstacles.push(new Obstacles(this.canvas, this.ctx));
}

Game.prototype.drawObstacles = function() {
   
  var aux = 1;

  for(var i=0; i<this.obstacles.length; i++){
    this.obstacles[i].y += aux;
    this.obstacles[i].draw();
  }
}

Game.prototype.checkCollisions = function() {
  for(var i=0; i<this.obstacles.length; i++){
    if(this.obstacles[i].isCollision(this.car)){
      alert("Game Over!");
      break;
    }
  }
}

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}