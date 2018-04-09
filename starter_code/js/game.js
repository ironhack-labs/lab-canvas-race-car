function Game(id) {
  this.canvas = document.getElementById(id);
  this.ctx = this.canvas.getContext("2d");
  this.w = 800;
  this.h = 700;
  this.roads = [ new Road(this.canvas, this.ctx) , new Road(this.canvas, this.ctx)];
  this.car = new Car(this.canvas, this.ctx)
}

Game.prototype.start = function() {
  setInterval(function() {
    this.clear();
    this.drawRoad();
    this.car.draw()

  }.bind(this), 30)
}

Game.prototype.drawRoad = function() {
  this.roads[0].y += 10
  this.roads[0].draw()
  this.roads[1].y = this.roads[0].y - this.canvas.height;
  this.roads[1].draw()

  if (this.roads[0].y > this.canvas.height-10) {
    this.roads[0].y = 0;
  }

}
Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}
////////

window.onload = function() {
  var game = new Game("my-canvas");
  game.start();
}
