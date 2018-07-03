window.onload = function() {
  var currentGame:

  var Car = function(){
    this.x = 240;
    this.y = 600;
    this.width = 50;
    this.height = 85;
    this.img = 'images/car.png';
  }

  Car.prototype.drawCar = (){
    var that = this;
    var theImage = new Image();
    theImage.onload = function(){
      theImage.src = that.img;
      ctx.drawImage(theImage)
    }
  }

  document.getElementById("start-button").onclick = function() {
    // startGame();
    var theCar = new Car;
  };

  function startGame() {

  }
};
