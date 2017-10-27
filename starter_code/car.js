var Car = function() {
  this.x = 225,
  this.y = 500;
};

Car.prototype.moveLeft = function() {
  if(this.x > 40){
    this.x -= 25;
  }
};

Car.prototype.moveRight = function() {
  if(this.x < 420){
    this.x += 25;
  }
};

Car.prototype.startGame = function() {
  this.drawCar(car);
  this.onKeyDown();
  updateCanvas();
};

Car.prototype.drawCar = function(car) {
  var img = new Image();   // Create new img element
  img.src = './images/car.png';
  imgScale = 158/319;
  img.onload = function() {
    ctx.drawImage(img, car.x, car.y, 100*imgScale, 100);
  };
};

Car.prototype.onKeyDown = function(e) {
  console.log();
  switch (e.keyCode) {
    case 37: car.moveLeft();  console.log('left',  car); break;
    case 39: car.moveRight(); console.log('right', car); break;
  }
  updateCanvas();
};
var car = new Car();
console.log(car);

// function updateCanvas() {
//   ctx.clearRect(0,0,1500,1700);
//   draw();
//   drawCar(car);
// }

  // updateCanvas();
