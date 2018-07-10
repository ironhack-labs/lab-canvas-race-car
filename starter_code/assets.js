function Assets(context){
  this.ctx = context;
  this.ctx.width = 500;
  this.ctx.height = 600;
  this.imgCar = new Image();
  this.imgCar.src = 'images/car.png';
  this.carWidth = 50;
  this.carX = this.ctx.width/2 - this.carWidth/2;
  this.carY = this.ctx.height - 200;
  this.carIncrement = 15;
  this.green = "#007700";
  this.gray = "#777777";
  this.white = "#bbbbbb";
  this.red = "#bb4444";
  this.numLines = 10;
  this.lineSeparation = 30;
  this.lineHeight = 50;
  this.interval = 100;
  this.obstaclesInterval = 2000//3000;
  this.obstacleIncrement = 10;
  this.roadIncrement = this.obstacleIncrement;
  this.obstacleScore = [10, 20, 30, 40, 50, 60, 70, 80, 90];
}