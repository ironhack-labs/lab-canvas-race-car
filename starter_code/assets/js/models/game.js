function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.canvas.width = 400;
  this.canvas.height = window.innerHeight;
  this.ctx = this.canvas.getContext('2d');

  //car:

  this.car = new Car(this.ctx, 180, this.canvas.height - 150);
  this.car.draw(this.ctx);


  //road:

  this.road = new Road(this.ctx, this.canvas.height);
  this.road.draw(this.ctx, this.canvas.height);


}