function Obstacle() {
    this.x;
    this.y = -50;
    this.width;
    this.height = 50;
}

Obstacle.prototype.createObstacle = function() {
    this.x = this.xRandomCoordinate();
    this.width = this.randomWidth();
};

Obstacle.prototype.xRandomCoordinate = function(board, car) {
    return  Math.floor(Math.random() * (560 - 40 + 1)) + 40;
};

Obstacle.prototype.randomWidth = function() {
    return Math.floor(Math.random() * 560 - this.x -50);
};
