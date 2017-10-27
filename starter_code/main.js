function Carretera(){
  this.canvas;
  this.canvasWidth = 450;
  this.canvasHeigth = 490;
};

Carretera.prototype.getCanvas = function(){
  return this.canvas;
};

Carretera.prototype.getCanvasHeight = function(){
  return this.canvasHeigth;
};

Carretera.prototype.getCanvasWidth = function(){
  return this.canvasWidth;
};

Car.prototype = Object.create(Carretera.prototype);
Car.prototype.constructor = Car;

function Car(speed){
  this.speed = 20;
  this.x = 210;
  this.y = 412;
  this.points = 0;
  this.img;
  this.imgSrc = 'images/car.png';
  this.boom = ['boom00.png','boom01.png','boom02.png',
               'boom03.png','boom04.png','boom05.png',
               'boom06.png','boom07.png','boom08.png'];
  this.width = 31;
  this.height = 63;
};

Car.prototype.addPoints = function(){
  this.points += 10;
  return this.points;
};

Car.prototype.explode = function(){
  // I know that you want to see this ;)
};

Car.prototype.moveLeft = function(){
  this.x -= 10;
};

Car.prototype.moveRight = function(){
  this.x += 10;
};

Obstacle.prototype = Object.create(Carretera.prototype);
Obstacle.prototype.constructor = Obstacle;
function Obstacle(){
  this.width = Math.round(Math.random()* (250 -100 +1) + 100);
  this.height = 40; // All 40 height
  this.x = Math.round(Math.random()* (350));// width 0-350
  this.y = -40;
  this.color = '#FFFFFF';
};

Obstacle.prototype.goDown = function(){
  this.y +=1;
};
