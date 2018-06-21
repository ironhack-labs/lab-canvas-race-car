window.onload = function() {
  var canvas = document.getElementById('roadGame')
  var ctx    = canvas.getContext("2d");
  document.getElementById("start-button").onclick = function() {startGame()}

  var car = new Car('./images/car.png')
  var road = new Road()

  function startGame() {
    console.log('prueba')


    function move() {
      road.move()
      car.move()
    }

    function draw(ctx) {
      road.draw(ctx)
      car.draw(ctx)
    }

    function updateCanvas() {
      ctx.clearRect(0, 0, road.width, road.height);
      move();
      draw(ctx);
      window.requestAnimationFrame(updateCanvas);
    }

    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37:
          car.moveLeft()
          break;
        case 39:
          car.moveRight()
          break;
      }
    }

    window.requestAnimationFrame(updateCanvas);
  }
};
