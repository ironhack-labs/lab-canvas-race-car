window.onload = function () {

  var canvas = new Canvas("myCanvas");
  var myCar = new Car(canvas.canvas, 150, 500,70,160, 5, 5, "images/car.png");
  canvas.drawBackground();
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {
    myCar.drawCar();
    canvas.lineAnimation();
   
  }
};
