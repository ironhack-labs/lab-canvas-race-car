// window.onload = function() {

// Llamada al canvas del html
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// Primer linea verde
context.beginPath();
context.rect(0, 0, 25, 500);
context.fillStyle = 'green';
context.fill();

// Primer linea blanca
context.beginPath();
context.rect(35, 0, 10, 500);
context.fillStyle = 'white';
context.fill();

//  linea central
context.beginPath();
context.setLineDash([5,15,25]);
context.moveTo(145, 0);
context.lineTo(145, 500);
context.strokeStyle='white';
context.lineWidth="5";
context.stroke();

// Segund linea blanca
context.beginPath();
context.rect(255, 0, 10, 500);
context.fillStyle = 'white';
context.fill();

// Segunda linea verde
context.beginPath();
context.rect(275, 0, 25, 500);
context.fillStyle = 'green';
context.fill();

document.getElementById("start-button").onclick = function () {
  startGame();
};

function startGame() {

}
// };