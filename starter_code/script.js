window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = new CarCanvas();
    var car = new NewCar();
    var obstacle = new Obstacles();
    // Create the canvas and add the car.
    canvas._CreateRoad();
    var points = 0;
    canvas._AddPoints(points);
    car._AddCar(canvas);
    obstacle._CreateObstacles(canvas);
    // Call the setInterval to move obstacles.
    var x = setInterval (function(){
      obstacle._MoveObstacles();
      points+= 1;
      canvas._UpdateCanvas(car, obstacle, x, points);
    },200);
    // Call the functions from canvas.car when pressing left or right.
    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37:
          car.moveLeft();
          break;
        case 39:
          car.moveRight();
          break;
      }
      // Update the canvas every movement.
      canvas._UpdateCanvas(car, obstacle, x, points);
    };
  }

};
