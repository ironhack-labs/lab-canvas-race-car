window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var board = new Board(400, 550);
  var car = new Car(175, 440, board.limitLeft, board.limitRight);

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
    car.move();
  }

  function draw(ctx) {
    board.draw(ctx);
    car.draw(ctx);
  }
};
