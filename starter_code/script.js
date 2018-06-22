window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var board = new Board(400, 550);
  var car = new Car(175, 440, board.limitLeft, board.limitRight);
  var obstacles = [];

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        car.moveLeft();
        break;
      case 39:
        car.moveRight();
        break;
    }
  };

  function startGame() {
    updateCanvas();

    (function loop() {
      var rand = Math.round(Math.random() * (5000 - 2000)) + 2000;
      setTimeout(function() {
        createObstacle();
        loop();
      }, rand);
    })();
  }

  function updateCanvas() {
    // Resetear el canvas
    ctx.clearRect(0, 0, board.width, board.height);

    move();
    draw(ctx);

    window.requestAnimationFrame(updateCanvas);
  }

  function move() {
    board.move();
    obstacles.forEach(function(o, index) {
      if (!o.move()) {
        // Remove the obstacle from the array when reach the bottom of the canvas
        obstacles.splice(index, 1);
      }
    });
  }

  function draw(ctx) {
    board.draw(ctx);
    car.draw(ctx);
    obstacles.forEach(function(o) {
      o.draw(ctx);
    });
  }

  function createObstacle() {
    var maxWidth = board.limitRight - board.limitLeft - car.width - 20;
    obstacles.push(new Obstacle(board.limitLeft, board.limitRight, board.height, maxWidth));
  }
};
