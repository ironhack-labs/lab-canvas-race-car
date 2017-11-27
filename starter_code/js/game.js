function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext('2d');

  this.road = new Road();


    }

Game.prototype.draw = function() {
  this.road.draw();

};

var game = new Game("canvas");
