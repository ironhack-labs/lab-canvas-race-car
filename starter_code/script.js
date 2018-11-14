window.onload = function() {
  var canvas = $("#game")[0];
  var ctx = canvas.getContext("2d");
  var img = new Image(); // Create new img element
  img.src = "images/car.png"; // Set source path
  var car = {
    x: 250,
    y: 430,
    moveLeft: function() {
      if (this.x > 0) {
        this.x -= 10;
      }
    },
    moveRight: function() {
      if (this.x < 420) {
        this.x += 10;
      }
    }
  };

  class Obstacle {
    constructor(x, y, height, width) {
      this.x = x;
      this.y = y;
      this.height = height;
      this.width = width;
    }
  }

  var obstacleOne = new Obstacle(100, 300, 80, 120);
  var obstacleTwo = new Obstacle(200, 200, 50, 100);
  var obstacleThree = new Obstacle(350, 10, 50, 150);
  var obstacleFour = new Obstacle(280, 100, 50, 150);
  var obstacleFive = new Obstacle(10, 10, 50, 150);
  // Test to see how to create a randomly shaped obstacle
  // function createNewObstacle() {
  //   var x = Math.floor(Math.random() * 100);
  //   var y = Math.floor(Math.random() * 100);
  //   var height = Math.floor(Math.random() * 100);
  //   var width = Math.floor(Math.random() * 100);

  //   return new Obstacle(x, y, height, width);
  // }

  document.getElementById("start-button").onclick = function() {
    ctx.drawImage(img, car.x, car.y, 80, 160);

    startGame();
    window.requestAnimationFrame(updateCanvas);
  };

  function startGame() {
    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37:
          car.moveLeft();
          console.log("left", car);
          break;
        case 39:
          car.moveRight();
          console.log("right", car);
          break;
      }
      //updateCanvas();
    };
  }
  function updateCanvas() {
    ctx.clearRect(0, 0, 500, 600);
    ctx.drawImage(img, car.x, car.y, 80, 160);
    drawObstacle();
    window.requestAnimationFrame(updateCanvas);
  }
  function drawObstacle() {
    ctx.fillRect(
      obstacleOne.x,
      (obstacleOne.y += 1),
      obstacleOne.width,
      obstacleOne.height
    );
    ctx.fillRect(
      obstacleTwo.x,
      (obstacleTwo.y += 1),
      obstacleTwo.width,
      obstacleTwo.height
    );
    ctx.fillRect(
      obstacleThree.x,
      (obstacleThree.y += 1),
      obstacleThree.width,
      obstacleThree.height
    );
    ctx.fillRect(
      obstacleFour.x,
      (obstacleFour.y += 1),
      obstacleFour.width,
      obstacleFour.height
    );
    ctx.fillRect(
      obstacleFive.x,
      (obstacleFive.y += 1),
      obstacleFive.width,
      obstacleFive.height
    );
  }
};
