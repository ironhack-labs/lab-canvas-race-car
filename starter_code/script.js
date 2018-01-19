window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = new Image();

  // var img = new Image();
  img.src = "images/car.png";

  document.getElementById("start-button").onclick = function() {
    road(ctx);
    startGame(ctx,img);
    //ctx.drawImage(img, blueCar.y, blueCar.x, 35, 60);
  };
};
 
var blueCar = new Car();
//var street = new road();

function startGame(ctx,img) {
 
  // var img = new Image();
  // img.src = "images/car.png";
  ctx.drawImage(img, blueCar.y, blueCar.x, 35, 60);

  window.requestAnimationFrame(startGame);
}
$(document).ready(function() {
  document.onkeydown = function(e) {
    blueCar.move(e);
  };
});

function road(ctx) {
  ctx.strokeRect(0, 0, 800, 330);
  ctx.fillStyle = "#008400";
  ctx.fillRect(0, 0, 330, 750);
  ctx.fillStyle = "#666666";
  ctx.fillRect(10, 0, 280, 750);
  ctx.fillStyle = "white";
  ctx.fillRect(15, 0, 7, 750);
  ctx.fillStyle = "white";
  ctx.fillRect(277, 0, 7, 750);
  ctx.beginPath();
  ctx.setLineDash([10, 20]);
  ctx.moveTo(150, 0);
  ctx.lineTo(150, 700);
  ctx.strokeStyle = "white";
  ctx.stroke();

  // var img = new Image();
  // img.src = "images/car.png";
  // ctx.drawImage(img, blueCar.y, blueCar.x, 35, 60);

}
