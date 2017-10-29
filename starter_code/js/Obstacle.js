function Obstacle() {
    var availSpace = 236; // (Road width - green lines)
    var minW = 60;
    var maxW = 125;
    this.height = 30;
    this.width = Math.floor(Math.random() * (maxW - minW + 1) + minW);
    this.x = Math.floor(Math.random() * (availSpace - this.width + 36));
    this.y = 0;
}

Obstacle.prototype.moveDown = function() {
  this.y++;
};
