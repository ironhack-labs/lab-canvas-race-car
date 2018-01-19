$(document).ready(() => {
  var canvas = new GameBoard();
  var car = new CreateCarObject();
  var obstacles = new CreateObstacles(canvas.ctx);

  function gameStart() {
    car.img.src = "images/car.png";
    car.img.onload = function () {
      canvas.clean();
      canvas.drawRoad();
      car.render(canvas.ctx);
      obstacles.render(canvas.ctx);
      window.requestAnimationFrame(gameStart)
    }
  }

  $(document).keydown(function (e) {
      car.move(e.which);
    });

  $("#start-button").click(function () {
    gameStart();
  });
})
