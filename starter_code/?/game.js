// var myCanvas;
// var ctx;

window.onload = function() { // Waits for the HTML to load before looking for canvas.
  var Car = function() {
    this.x = "240";
    this.y = "400";
    this.width = 50;
    this.height = 85;
    this.img = "images/car.png";
  };
  
  Car.prototype.drawCar = function () {
    var theImage = new Image(); // Image constructor exists in the canvas library.
    theImage.src = this.img; // Adds car.png as the image source. 
    ctx.drawImage(theImage,this.x,this.y,); // 
  }
  var myCanvas = document.getElementById('theCanvas');
  var ctx = myCanvas.getContext('2d');
  
  
  var Game = function () {
    // var theGame = new Game();
    this.car = new Car();
    this.startGame();
    // this.obstacles = [];
  };

  Game.prototype.startGame = function () {
    this.car.drawCar(); // Draws the car once the game starts.
  }

  // -------------------------------------

}; // END WINDOW.ONLOAD