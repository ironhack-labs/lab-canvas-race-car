function Obstacle(assets){
  this.assets = assets;
  this.width = Math.random()*assets.ctx.width-100;
  this.height = 50;
  this.x = Math.random() * assets.ctx.width - this.width;
  this.y = 0;
  this.score = this.assets.obstacleScore[Math.floor(Math.random()*this.assets.obstacleScore.length)];
  this.avoided = false;
}


Obstacle.prototype.drawObstacle = function(){
  this.assets.ctx.fillStyle = this.assets.red;
  this.assets.ctx.fillRect(this.x, this.y, this.width, this.height);
}
Obstacle.prototype.updatePosition = function(){
  if (this.y > this.assets.ctx.height) return;
  this.y += this.assets.obstacleIncrement;
}
Obstacle.prototype.score = function(){
  return this.score;
}