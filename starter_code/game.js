function Game(canvasId, width, height) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext('2d');
  this.car = new Car(this.canvas, "./images/car.png");
  this.x = 0;
  this.y = 0;
  this.width = width;
  this.height = height;
  this.obstacles = [];
  this.intervl =setInterval(this.addObstacle.bind(this), 3000);
  this.points=0;
}

Game.prototype.isReady = function() {
  return this.car.isReady();
};

Game.prototype.addObstacle = function() {
  var posX = Math.floor(Math.random() * this.width);
  var posY = 0;
  var width = Math.floor(Math.random() * (this.width / 2));
  var height = 10;
  this.obstacles.push(new Obstacle(this.canvas, posX, posY, width, height));
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function() {
  this.clear();
  if (this.isReady()) {
    this.paintRoad();
    this.drawScore();
    this.car.draw();
    for (var i = 0; i < this.obstacles.length; i++) {
      // debugger
      if (this.obstacles[i].y > 500) {
        this.obstacles.splice(i, 1);
      } else {
        this.obstacles[i].draw();
        this.crashFront(i);
      }
    }

  }

  window.requestAnimationFrame(this.draw.bind(this));
};

Game.prototype.drawScore = function () {
    // points = (Math.floor(this.frames/5));
    this.points++;
    this.ctx.font = '18px serif';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText('Score: '+this.points, 350, 50);
};

Game.prototype.crashFront = function(i) {
  if (this.car.y === this.obstacles[i].y) {
    if ((this.car.x + this.car.width) > this.obstacles[i].x ){
      if((this.car.x) < (this.obstacles[i].x + this.obstacles[i].width)){
        alert("crush");
        clearInterval(this.intervl);
        this.obstacles=[];
        this.points=0;
      }
    }
  }
};
Game.prototype.paintRoad = function() {

  this.ctx.fillStyle = "rgb(62, 162, 1)";
  this.ctx.fillRect(0, 0, 25, this.height);
  this.ctx.fillRect(this.width - 25, 0, 25, this.height);
  this.ctx.fillStyle = "rgb(177, 177, 177)";
  this.ctx.fillRect(25, 0, 15, this.height);
  this.ctx.fillRect(this.width - 40, 0, 15, this.height);
  this.ctx.fillRect(50, 0, this.width - 100, this.height);
  this.ctx.fillStyle = "white";
  for (var i = 0; i < this.height; i += 120) {
    this.ctx.fillRect(225, i, 15, 60);
  }
};
