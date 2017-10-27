 function Car(){
  this.x = 148;
  this.y = 90;

}

Car.prototype.moveLeft(){
  return this.x -=1;
}

Car.prototype.moveRight(){
  return this.x +=1;
}
