function Canvas(id) {
  this.canvas = document.getElementById(id);
  this.ctx = this.canvas.getContext("2d");
  this.w = 600;
  this.h = 750;

  this.road = new Road(this.canvas, this.ctx);
  /* [
    new Road(this.canvas, this.ctx),
    new Road(this.canvas, this.ctx)
  ]; */
  this.car = new Car(this.canvas, "./images/car.png", this.ctx);
}

Canvas.prototype.start = function() {
  
  setInterval(
    function() {
      this.clear();
      this.drawRoad();
      this.car.draw();
    }.bind(this),
    30
  );
};

Canvas.prototype.drawRoad = function(){
  
/*   var d = 7;
  this.road[0].y += d;

  if(this.road[0].y > this.canvas.height){
    this.road[0].y = 0;
  }

  debugger;
  this.road[1].y = this.road[0].y - this.canvas.height;

  this.road[0].drawRoad();
  this.road[1].drawRoad(); */

  this.road.drawRoad();
};

Canvas.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.w, this.canvas.height);
};
