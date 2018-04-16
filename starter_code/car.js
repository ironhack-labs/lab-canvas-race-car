console.clear('Console cleared');
window.onload = function() {
  var currentGame;
  var canStart = true;

  /**
   ************  Car Constructor ****************
   */
  var Car = function() {
    //   // this is coming from my Car constructor function.
    //   // The prototype inherits anything from the constructor func but I can add original values that only belong to this prototype and not my Constructor func. Can I change values in my
    //   // Constructor via this prototype?
    this.x = 240;
    this.y = 600;
    this.width = 50;
    this.height = 85;
    this.img = 'images/car.png';
  };

  /**
   ************  Car Prototype -- drawCar ****************
   */
  Car.prototype.drawCar = function() {
    var theImage = new Image();
    theImage.src = this.img;

    ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
  };

  /**
   ************  Car Prototype -- Move ****************
   */

  Car.prototype.move = function(magicalNum) {
    // erases the car
    ctx.clearRect(this.x, this.y, this.width, this.height);
    // Updates the car
    switch (magicalNum) {
      case 37:
        if (this.canMove(this.x - 5, this.y)) {
          this.x -= 5;
        }
        break;
      case 38:
        if (this.canMove(this.x, this.y - 5)) {
          this.y -= 5;
        }
        break;
      case 39:
        if (this.canMove(this.x + 5, this.y)) {
          this.x += 5;
        }
        break;
      case 40:
        if (this.canMove(this.x, this.y + 5)) {
          this.y += 5;
        }
        break;
      default:
    }
    // draws the updated car w/ the new values.
    this.drawCar();
  };

  /**
   ************  Car Prototype -- canMove ****************
   */
  Car.prototype.canMove = function(futureX, futureY) {
    var canIMove = true;

    currentGame.obstacles.forEach(function(theObstacle) {
      if (
        futureX >= theObstacle.x &&
        futureX <= theObstacle.x + theObstacle.width &&
        (futureY >= theObstacle.y &&
          futureY <= theObstacle.y + theObstacle.height)
      ) {
        canIMove = false;
        console.log('ouch');
      }
    });
    return canIMove;
  };

  // var theObstacle = currentGame.obstacles[0];

  /**
   ************  Obstacle Constructor ****************
   */
  var Obstacle = function(x, y, width, height) {
    // Try removing the value if its named the same.
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  };

  /**
   ************  Obstacle Prototype -- Draw ****************
   */
  Obstacle.prototype.draw = function() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  var myCanvas = document.getElementById('theCanvas');
  var ctx = myCanvas.getContext('2d');
  document.getElementById('start-button').onclick = function() {
    startGame();
  };

  function startGame() {
    if (canStart) {
      currentGame = new Game();
      var theCar = new Car();
      currentGame.car = theCar;
      currentGame.car.drawCar();
      var leftWall = new Obstacle(0, 0, 30, 700);
      var rightWall = new Obstacle(470, 0, 30, 700);
      // leftWall.draw();
      // rightWall.draw(); Replaced both of these calls w/ the forEach below
      currentGame.obstacles.push(leftWall, rightWall);
      currentGame.obstacles.forEach(oneObstacle => {
        oneObstacle.draw();
      });
      canStart = false;
    }
  }

  document.onkeydown = function(event) {
    if (
      event.which === 37 ||
      event.which === 38 ||
      event.which === 39 ||
      event.which === 40
    ) {
      event.preventDefault();
    }
    var directionCode = event.which;
    currentGame.car.move(directionCode);
  };
};
