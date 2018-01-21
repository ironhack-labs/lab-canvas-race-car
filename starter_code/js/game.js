$(document).ready(() => {
  var canvas = new GameBoard();
  var car = new CreateCarObject();
  var obstacles = new CreateObstacles();

  function gameStart() {

    canvas.clean();
    canvas.drawRoad();
    car.render(canvas.ctx);
    obstacles.render(canvas.ctx);
    window.requestAnimationFrame(gameStart)

    // car.img.src = "img/car.png";
    // car.img.onload = function () {
    //   canvas.clean();
    //   canvas.drawRoad();
    //   car.render(canvas.ctx);
    //   obstacles.render(canvas.ctx);
    //   window.requestAnimationFrame(gameStart)
    // }
  }

  $(document).keydown(function (e) {
    car.move(e.which);
  });

  $("#start-button").click(function () {
    gameStart();
  });
})