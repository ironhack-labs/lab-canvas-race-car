var canvas, ctx, road;

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

};
function startGame() {
  canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d');
  road = new Road();
  road.render();
  car = new Car();
  car.render();
 }
