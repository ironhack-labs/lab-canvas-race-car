function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.canvas.width = 1000;
  this.canvas.height = 400;
  this.ctx = this.canvas.getContext('2d');

  this.road = new Road();


    }

Game.prototype.draw = function() {
  this.road.draw();

};
