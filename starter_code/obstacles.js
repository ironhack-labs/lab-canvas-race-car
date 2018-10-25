function Obstacle() {
  this.x = Math.random()*(260) - 130;
  this.y = -600;

  this.draw = function() {
    this.y += 5;
    road.fillRect(this.x, this.y, Math.random()*(240)+80, 30);
  }
} 


