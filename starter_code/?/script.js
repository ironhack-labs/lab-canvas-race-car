window.onload = function() {
  var Car = function(){
    this.x = 240;      // ------------------------------------|
    this.y = 600;      // ------------------------------------|
    this.width = 50;  // -------------------------------------|
    this.height = 85; // -------------------------------------|
    this.img = 'images/car.png';  //                          |
    //                  |                                     |
    //                  |                                     |
  }//                   |                                     |
  //                     ------------------                   |
  Car.prototype.drawCar = function(){ //   |                  |
    var theImage = new Image();  //        |                  |
    theImage.src = this.img; //-------------                  |
    //                          ________________________________
    //                          |     |           |           |
    ctx.drawImage(theImage, this.x, this.y, this.width, this.height)
  }
    var myCanvas = document.getElementById('theCanvas');
    var ctx = myCanvas.getContext('2d');
    document.getElementById("start-button").onclick = function() {
      startGame();
    };
    function startGame() {
      var currentGame = new Game();
      var theCar = new Car();
      currentGame.car = theCar;
      currentGame.car.drawCar();
    }
  };
  