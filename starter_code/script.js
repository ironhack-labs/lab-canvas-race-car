window.onload = function () {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  document.getElementById("start-button").onclick = function () {
    startGame();
  };
  
  function startGame() {
    var road = new Road (canvas, ctx);
    var car = new Car (canvas, ctx, 'images/car.png');
    road.draw();
 
      car.drawImage();
  
    
  }


}
