
var redColor = 'rgb(136, 0, 0)';

function Obstacle(width, position){
  this.obstacles = [];
  this.x=position;
  this.y=0;
  this.height = 40;
  this.width = width;
  this.maxWith = 300;
  this.speed = 3;
}

Obstacle.prototype.draw = function(context){
  context.fillStyle = redColor;
  context.fillRect(this.x, this.y, this.width, this.height);
};

Obstacle.prototype.move = function(){
  this.y += this.speed;
};
