window.onload = function() {
  var canvas = document.getElementById('roadGame')
  var ctx    = canvas.getContext("2d");
  document.getElementById("start-button").onclick = function() {startGame()}

  var car = new Car('./images/car.png')
  var road = new Road()
  var obstacles = []
  var y = -100
  for (var i = 0; i < 10; i++) {
    obstacles.push(new Obstacle(road.width, Math.floor(Math.random() * 100) + 50, y))
    y -= Math.floor(Math.random() * 500) + 100
  }

  function startGame() {
    function move() {
      road.move()
      car.move()
      console.log(obstacles)
      for (var i = 0; i < obstacles.length; i++) {
        obstacles[i].move()
      }
    }

    function draw(ctx) {
      road.draw(ctx)
      car.draw(ctx)
      for (var i = 0; i < obstacles.length; i++) {
        obstacles[i].draw(ctx)
      }
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
