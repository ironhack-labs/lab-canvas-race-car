window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  document.getElementById("start-button").onclick = function() {
    //var car = new Car();
    car.startGame(ctx);
  };

};
