window.onload = function () {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  document.getElementById("start-button").onclick = function () {
   var game = new Game(canvas,ctx);
   game.start();
  };
  


}
