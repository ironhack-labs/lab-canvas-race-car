// window.onload = function() {
//   document.getElementById("start-button").onclick = function() {
//     startGame();
//   };

//   function startGame() {

//   }
// };

var myGameArea = {}

var canvas = document.getElementById("prueba");
var ctx = canvas.getContext("2d");

ctx.fillStyle = '#008c1d';
ctx.fillRect(0, 0, 40, 400);
ctx.fillStyle = '#7f7f7f';
ctx.fillRect(40, 0, 10, 400);
ctx.fillStyle = 'white';
ctx.fillRect(50, 0, 10, 400);
ctx.fillStyle = '#7f7f7f';
ctx.fillRect(60, 0, 180, 400);
ctx.fillStyle = 'white';
ctx.fillRect(240, 0, 10, 400);
ctx.fillStyle = '#7f7f7f';
ctx.fillRect(250, 0, 10, 400);
ctx.fillStyle = '#008c1d';
ctx.fillRect(260, 0, 40, 400);
var img = document.getElementById("bluecar");
ctx.drawImage(img, 150, 400, 20, 30)
// ctx.moveTo(150, 0);
// ctx.strokeStile = 'white';
// ctx.lineTo(150, 20);
// ctx.moveTo(150, 40);
// ctx.strokeStile = 'white';
// ctx.lineTo(150, 60);
// ctx.moveTo(150, 80);
// ctx.strokeStile = 'white';
// ctx.lineTo(150, 100);

// function draw(car) {
//   var img = new Image();
//   img.onload = function() {
//     ctx.drawImage(img, 30, 10, 50, 50);
//   }
//   img.src = "images/car.png";
// }
