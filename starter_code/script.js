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
  // Metodo de colision - comparamos el x y con el otro elemento regresa true o false
  collision(item) {
    return (this.x < item.x + item.width) &&
      (this.x + this.width > item.x) &&
      (this.y < item.y + item.height) &&
      (this.y + this.height > item.y);
  }
}

//  OBSTACLES CLASS
class Obstacle {
  constructor() {
    this.x = Math.floor((Math.random() * 300) + 1);;
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
var setInterval;
function startGame() {
   setInterval = setInterval(function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    roadPaint();
    drawObstacles();
    raceCar.draw();
  }, 1000 / 60);

}

// -------- CLICK IZQ-DER ----------
addEventListener('keydown', function (e) {
  // TECLA IZQUIERDA
  if (e.keyCode === 37) {
    raceCar.x -= 5;
    if (raceCar.x < 35) raceCar.x = 35; //Limite del carril
  }
  // TECLA DERECHA
  if (e.keyCode === 39) {
    raceCar.x += 5;
    if (raceCar.x > 215) raceCar.x = 215; //Limite del carril
  }
})

// Generar obstaculos
var obstacles = [];
setInterval(function () {
  var obstacle = new Obstacle();
  obstacles.push(obstacle);
}, 3000);
console.log(obstacles);

function drawObstacles() {
  obstacles.forEach(function (obstacle) {
    obstacle.draw();
    // Colision
    if (raceCar.collision(obstacle)) {
      gameOver();
      // console.log("CUAZZZZ");
    }
  })

}


// gameOver
var gameOver = function () {
  // Definimos el tamaño y fuente de nuestro texto
  context.font = "40px Avenir";
  // Dibujamos el texto en el canvas.
  context.fillText("CRASH¡¡¡¡", 60, 100);

  // Detenemos la ejecución del intervalo
  clearInterval(setInterval);
}
// };