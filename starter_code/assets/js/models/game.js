function Game(canvasId) {
  
  this.canvas = document.getElementById(canvasId);
  this.canvas.width = Math.floor(window.innerWidth / 2);
  this.canvas.height = window.innerHeight;
  this.ctx = this.canvas.getContext("2d");

  this.gameBoard = new GameBoard(this.ctx, this.canvas.width, this.canvas.height);
  this.car = new Car(this.ctx, this.canvas.width, this.canvas.height);
  

  document.addEventListener("keydown", this.onKeyEvent.bind(this));
  document.addEventListener("keyup", this.onKeyEvent.bind(this));

  this.obstacles = [];
  this.points = 0;
  this.drawIntervalCount = 0;
  this.drawIntervalId = undefined;
}

Game.prototype.start = function () {
  
  if (!this.isRunning()) {
     this.drawIntervalId = setInterval(function () { 
      this.drawIntervalCount++;
      this.clear();

      if (this.drawIntervalCount % OBSTACLE_INTERVAL === 0) {
        this.addObstacle();
        this.drawIntervalCount = 0;
      }
      
      if (this.isGameOver()) {
        this.stop();
        alert("GAME OVER!!\n\n\tYou final score is: " + this.points);
      }

      this.draw();
     }.bind(this), DRAW_INTERVAL_MS);
  }
}

Game.prototype.isGameOver = function() {
  
  return this.obstacles.some(function(obstacle) {
    return this.car.collideWithObstacle(obstacle);
  }.bind(this));
}
  
Game.prototype.isRunning = function() {
  
  return this.drawIntervalId !== undefined;
}

Game.prototype.stop = function () {
  
  clearInterval(this.drawIntervalId);
  this.drawIntervalId = undefined;
}

Game.prototype.onKeyEvent = function(event) {
  
  this.car.onKeyEvent(event);
}

Game.prototype.addObstacle =  function() {
  
  var widthObst = Math.floor(Math.random() * (this.canvas.width - GRASS_RIGHT - GRASS_LEFT - CAR_WIDTH - GAP));
  var randomX = Math.floor(Math.random() * (this.canvas.width - GRASS_RIGHT - widthObst - GRASS_LEFT) + GRASS_LEFT);
  this.obstacles.push(new Obstacle(this.ctx, randomX, 0, widthObst));
}

Game.prototype.draw = function () {
  
  this.gameBoard.draw(); 
  this.car.draw();
  this.obstacles.forEach(function(obstacle) {
    if (obstacle.y > this.canvas.height) {
      this.obstacles.shift();
      this.points++;
    }
    obstacle.draw();
  }.bind(this));
}

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}