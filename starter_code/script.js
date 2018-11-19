window.onload = function() {
  var canvas = $("#game")[0];
  var ctx = canvas.getContext("2d");
  var frameCounter = 0;
  var obstacleArray = [];
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
    constructor() {
      this.x = Math.floor(Math.random() * 500);
      this.y = Math.floor(Math.random() * -100);
      this.height = Math.floor(Math.random() * 100);
      this.width = Math.floor(Math.random() * 100);
    }
  }

  // var obstacle = new Obstacle();

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
    };
  }
  function updateCanvas() {
    ctx.clearRect(0, 0, 500, 600);
    ctx.drawImage(img, car.x, car.y, 80, 160);
    frameCounter++;
    if (frameCounter % 120 == 0) {
      var obstacle = new Obstacle();
      obstacleArray.push(obstacle);
      console.log(obstacleArray);
    }
    for (var i = 0; i < obstacleArray.length; i++) {
      ctx.fillRect(
        obstacleArray[i].x,
        (obstacleArray[i].y += 1),
        obstacleArray[i].width,
        obstacleArray[i].height
      );
    }
    window.requestAnimationFrame(updateCanvas);
  }
};
