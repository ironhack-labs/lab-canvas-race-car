window.onload = function() {
  
  var currentGame;
  var canStart = true;

  var Car = function(){
    this.x = 275;      // ------------------------------------|
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

  Car.prototype.move = function(keyCode) { // this. is whatever car we're working with.
    ctx.clearRect(this.x,this.y,this.width,this.height); // Erases the original car so there is no trail.
    switch(keyCode){ // Updates the location of the car based on the key pressed.
      case 37:
      if(this.canMove(this.x - 5,this.y)){
        this.x -= 5;
      }
        break;
      case 38:
      if(this.canMove(this.x,this.y - 5)){
        this.y -= 5;
      }
        break;
      case 39:
      if(this.canMove(this.x + 5,this.y)){
        this.x += 5;
      }
        break;
      case 40:
      if(this.canMove(this.x,this.y + 5)){
        this.y += 5;
      }
        break;
      default: 
        console.log("Oops!");
    } 
    this.drawCar();
  }

  Car.prototype.canMove = function(futureX,futureY){
    var canIMove = true;

    currentGame.obstacles.forEach(function (theObstacle){
      if((futureX >= theObstacle.x && futureX <= theObstacle.x + theObstacle.width) && 
         (futureY >= theObstacle.y && futureY <= theObstacle.y + theObstacle.height))
      {
        canIMove = false;
        console.log('ouch')
      }
    });
      return canIMove;
  };

  var Obstacle = function(x,y,width,height){ 
    //                    | |  |      |
    this.x = x;// ----------|  |      |
    this.y = y;// -----------  |      |
    this.width = width;// ------      |
    this.height = height;// -----------
  }

    Obstacle.prototype.draw = function(){ 
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    var myCanvas = document.getElementById('theCanvas');
    var ctx = myCanvas.getContext('2d');

    document.getElementById('start-button').onclick = function() {

      startGame();
  };

  function startGame() {
    if(canStart){
    currentGame = new Game();
    var theCar = new Car();
    currentGame.car = theCar; // Now we can reference out car as .car
    currentGame.car.drawCar();
    var leftWall = new Obstacle(0,0,30,700)
    var rightWall = new Obstacle(370,0,30,700)
    currentGame.obstacles.push(leftWall,rightWall);
    currentGame.obstacles.forEach(function (oneObstacle) {
        oneObstacle.draw();
      })
    };
  canStart = false;
  };

  document.onkeydown = function(event){
    var directionCode = event.which; // We need a car prototyle function that will accept movement
    currentGame.car.move(directionCode); // in order for this to work.

    if(event.which === 37 || event.which === 38 || event.which === 39 || event.which === 39){
    event.preventDefault();  // Doesn't let the page scroll. 
    } 
  };
};