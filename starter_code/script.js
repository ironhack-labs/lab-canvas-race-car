// window.onload = function() {

// Llamada al canvas del html
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// ------- ROAD ------
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
//  RACECAR CLASS 
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
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

//  OBSTACLES CLASS
class Obstacle {
  constructor() {
    this.x = 150;
    this.y = 0;
    this.width = 120;
    this.height = 25;
    this.image1 = new Image();
    this.image1.src = "./images/obstacle1.png";
  }
  draw() {
    this.y += 2;
    context.drawImage(this.image1, this.x, this.y, this.width, this.height);
  }
}

// ----------END CLASS`s------------


// Instanciamos el objeto y variables globales
var raceCar = new RaceCar();
var obstacle = new Obstacle();


// ---------- CLICK START GAME ---------
document.getElementById("start-button").onclick = function () {
  startGame();
};

function startGame() {
  setInterval = setInterval(function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    roadPaint();
    obstacle.draw();
    raceCar.draw();
  }, 1000 / 60);

}

// -------- CLICK IZQ-DER ----------
addEventListener('keydown', function (e) {
  // TECLA IZQUIERDA
  if (e.keyCode === 37) {
    raceCar.x -= 4;
    if (raceCar.x < 35) raceCar.x = 35; //Limite del carril
  }
  // TECLA DERECHA
  if (e.keyCode === 39) {
    raceCar.x += 4;
    if (raceCar.x > 215) raceCar.x = 215; //Limite del carril
  }
})

// };