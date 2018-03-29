function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.canvas.width = 1000;
  this.canvas.height = 800;

  this.ctx = this.canvas.getContext("2d");

  this.roads = [
    new Road(this.canvas, this.ctx),
    new Road(this.canvas, this.ctx)
  ]
}

Game.prototype.start = function () {
  setInterval(function () {

    this.clear();

    this.drawRoad();

  }.bind(this), 30)
}

Game.prototype.drawRoad = function () {

  var i = 7;

  if(this.roads[0].y >= this.canvas.height){
    this.roads[0].y = 0;
  }

  this.roads[0].y += i;

  this.roads[1].y = this.roads[0].y - this.canvas.height;



  this.roads[0].draw();
  this.roads[1].draw();


}

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}