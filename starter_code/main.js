window.onload = function() {

  document.getElementById("start-button").onclick = function() {
    var canvas = new Canvas();
    var car = new Car();
    // var obstacles = new Obstacles();

    // canvas.startGame(car, obstacles, ...);
    canvas.startGame(car);

    setInterval(function () {
      canvas.updateCanvas();
    }, 100);

    //requestAnimation Mirar
  };

};
