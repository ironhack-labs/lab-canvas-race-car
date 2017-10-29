function Obstacles () {
  this.items = [];

  setInterval(this.updateObstacles.bind(this), 300);
  setInterval(this.createObstacle.bind(this), 3000);
}

Obstacles.prototype.updateObstacles = function () {
  this.items.forEach(function (obstacle) {
    obstacle.updatePosition();
  });

  this.clearObstacles();
};

Obstacles.prototype.createObstacle = function () {
  var obstacle = new Obstacle();
  this.items.push(obstacle);
};

Obstacles.prototype.clearObstacles = function () {
  this.items = this.items.filter(function (obstacle) {
    return obstacle.y < 600;
  });
};

Obstacles.prototype.getObstacles = function () {
  return this.items;
};
