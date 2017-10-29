window.onload = function() {

  document.getElementById("start-button").onclick = function() {
    var canvas = new Canvas();
    var car = new Car();
    console.log(car);
    var obstacles = new Obstacles();

    canvas.startGame(car, obstacles);

    setInterval(function () {
      canvas.updateCanvas();
    }, 100);
  };

};
