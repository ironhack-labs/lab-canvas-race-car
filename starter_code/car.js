function Car (x,y,width,height){
  this.x=x;
  this.y=y;
  this.width=width;
  this.height=height;
}
Car.prototype.moveLeft=function (){
  this.x-=10;
};
Car.prototype.moveRigth=function (){
  this.x+=10;
};
