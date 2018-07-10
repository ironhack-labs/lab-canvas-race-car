function Game(context){
  this.ctx = context;
  this.assets = new Assets(this.ctx);
  this.car = new Car(this.assets);
  this.canvas = new Canvas(this.assets);
  this.obstacles = [];
  this.loopId;
  this.obstaclesId;
}

Game.prototype.startGame = function(draw) {
  this.loopId = setInterval(draw, this.assets.interval);
  this.obstaclesId = setInterval(this.addObstacle, this.assets.obstaclesInterval);
}

Game.prototype.stopGame = function(){
  clearInterval(this.loopId);
  clearInterval(this.obstaclesId);
  this.gameOver();
}

Game.prototype.addObstacle = function(){
  this.obstacles.push(new Obstacle(this.assets));
}

Game.prototype.gameOver = function(){
  this.ctx.font = "50px Arial";
  this.ctx.fillStyle = "black";
  this.ctx.fillText("GAME OVER", this.ctx.width/2 - 150, this.ctx.height/2);
}

// Game.prototype.score = function(objectObstacle){
//   this.ctx.font = "30px Arial";
//   this.ctx.fillStyle = "black";
//   var score = objectObstacle.score;
//   this.ctx.fillText(score + " points!", this.ctx.width/2 - 150, this.ctx.height/2);
// }