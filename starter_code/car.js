function Car(maxSpeed, x, y) {
    this.maxSpeed = maxSpeed;
    this.pos = { X: x, Y: y };
    this.speed = 0;

}
Car.prototype.move = function(direction){
    console.log("moving");
     this.speed = this.maxSpeed * direction;
  }

  Car.prototype.stop = function(){
    this.speed = 0;
}
Car.prototype.render = function(delta){
    this.pos.X += this.speed/1000*delta;
    ctx.fillRect(this.pos.X, this.pos.Y, 100, 200);
 }
 
