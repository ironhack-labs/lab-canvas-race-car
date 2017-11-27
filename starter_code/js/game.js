function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext('2d');


    }

Game.prototype.draw = function() {
  this.road.draw();
  this.car.draw();
};

var game = new Game("canvas");
