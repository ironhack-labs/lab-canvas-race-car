function Car(assets){
  this.assets = assets;
  this.carX = this.assets.carX; //coordenada de més a l'esquerra
  this.carY = this.assets.carY;
  this.carWidth = this.assets.carWidth;
}

Car.prototype.moveRight = function(){
  if(this.carX < this.assets.ctx.width-this.assets.carIncrement-this.assets.carWidth) this.carX += this.assets.carIncrement;
}
Car.prototype.moveLeft = function(){
  if(this.carX > this.assets.carIncrement) this.carX -= this.assets.carIncrement;
}
Car.prototype.drawCar = function(){
  this.assets.ctx.drawImage(this.assets.imgCar, this.carX, this.carY, this.assets.carWidth, 100);
}
Car.prototype.hasCollided = function(objectObstacle){
  if ((this.carY >= objectObstacle.y) 
    && (this.carY <= objectObstacle.y + objectObstacle.height)
    && (this.carX <= objectObstacle.x + objectObstacle.width 
      || this.carX + this.width >= objectObstacle.x))
  {
    return true;
  }
  return false;
}
// Car.prototype.hasAvoided = function(objectObstacle){
//   if(this.carY >= objectObstacle.y)
//   {
//     objectObstacle.avoided = true;
//     return true;
//   }
//   return false;
// }