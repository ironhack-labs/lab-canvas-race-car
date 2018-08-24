// window.onload = function() {

// Llamada al canvas del html
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var roadPaint = function () {
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
  context.setLineDash([5, 15, 25]);
  context.moveTo(145, 0);
  context.lineTo(145, 500);
  context.strokeStyle = 'white';
  context.lineWidth = "5";
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
}
// dibujo auto
// var image = new Image();
// image.src = "./images/car.png";
// image.onload = function () {
//   context.drawImage(image, 120, 350, 50, 80);
// }

// -------- CLASS`s---- -----------
class RaceCar {
  constructor() {
    this.x = 120;
    this.y = 350;
    this.width = 50;
    this.height = 80;
    this.image = new Image();
    this.image.src = "./images/car.png";
  }
  draw() {
    // if (frames % 10 === 0) this.x -= 1;
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
// ----------END CLASS`s------------


// Instanciamos el objeto
var raceCar = new RaceCar();


// ---------- CLICK START GAME ---------
document.getElementById("start-button").onclick = function () {
  startGame();
};

var frames = 0;

function startGame() {

  setInterval = setInterval(function () {
    // frames++;
    context.clearRect(0, 0, canvas.width, canvas.height);
    roadPaint();
    raceCar.draw();
  }, 1000 / 60);

}


// -------- CLICK IZQ-DER ----------
addEventListener('keydown', function (e) {
  // TECLA IZQUIERDA
  if (e.keyCode === 37) {
    raceCar.x -= 4;
  }
  if (e.keyCode === 39) {
    raceCar.x += 4;
  }



})

// };