const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//id de los RequestAnimation Frame.
var id1;

//Road. Actúa como frame del juego
const road = {
  img: null,
  x: 0,
  y: 0,
  width: 0,
  height: 0,

  inicialize: function () {
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = "images/road.png";
    this.img.onload = () => ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

  },
  update: function () {
    ctx.drawImage(this.img, 0, this.y, this.width, this.height);
    ctx.drawImage(this.img, 0, this.y - this.img.height, this.width, this.height);
    this.y += 1;
    if (this.y >= this.img.height) {
      this.y = 0;
    }
  }

};

//Car. Actúa como Player.
const car = {

  img: null,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  speedX: 0,
  speedY: 0,
  points: 0,

  inicialize: function () {
    this.x = canvas.width / 2 - 25;
    this.y = canvas.height - 120;
    this.width = 50;
    this.height = 319 / 158 * this.width;
    this.img = new Image();
    this.img.onload = () => ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    this.img.src = 'images/car.png';
  },

  newPos: function () {
    this.x += this.speedX;
    if (this.x >= road.width - this.width) {
      this.x = road.width - this.width;
    }
    if (this.x <= 0) {
      this.x = 0;
    }
  },

  left: function () {
    return this.x;
  },

  right: function () {
    return this.x + this.width;
  },

  top: function () {
    return this.y;
  },

  bottom: function () {
    return this.y + this.height;
  },

  update: function () {
    ctx.drawImage(this.img, this.x, this.y, 50, 319 * 50 / 158);
  },

  score: function () {
    this.points = Math.floor(frames / 20);
    ctx.font = "24px Verdana";
    ctx.fillStyle = "gold";
    ctx.fillText("Score: " + this.points, canvas.width - 200, 50);
  },

  crashWith: function (obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
};

//Cálculo si la tecla <- o -> ha sido pulsada y aumento el desplazamiento acorde
document.onkeydown = function (e) {
  switch (e.which) {
    case 37: // left arrow
      car.speedX -= 1;
      break;
    case 39: // right arrow
      car.speedX += 1;
      break;
  }
};

//Si las telas <- o -> se dejan de pulsar se para el desplazamiento lateral
document.onkeyup = function (e) {
  car.speedX = 0;
  car.speedY = 0;
};

//Clase para generar los obstáculos
class Obstacule {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
  }

 update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
}
//Creación de la array donde se guardaran todos los obstáculos creados
var myObstacles = [];
//frames para hacer avanzar los obstáculos
let frames = 0;

//función para actualizar la posición de cada uno de los obstáculos
function updateObstacles() {

  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 1;
    myObstacles[i].update();
  }
  frames += 1;
  if (frames % 200 === 0) {
    var y = 0;
    var minWidth = 20;
    var maxWidth = 200;
    var width = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );
    var x = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );
    myObstacles.push(
      new Obstacule (width, 20, "orangered", x, y));
  }
}

//Checkeo si el coche ha chocado con el obstáculo
function checkGameOver() {
  var crashed = myObstacles.some(function (obstacle) {
    return car.crashWith(obstacle);
  });
  if (crashed) {
    console.log(crashed);
    cancelAnimationFrame(id1);
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "40px Verdana";
    ctx.fillStyle = "red";
    ctx.fillText("GAME OVER!", canvas.width*0.26, canvas.height*0.4);
    ctx.fillStyle = "gold";
    ctx.fillText("Score: " + car.points + " points", canvas.width*0.25, canvas.height*0.5);
  }
}

//Inicializo Carretera y Coche
function startGame() {
  road.inicialize();
  car.inicialize();
}

//Actualizo todos los componentes del juego
function updateGame() {
  road.update();
  car.newPos();
  car.update();
  car.score();
  updateObstacles();
  id1 = requestAnimationFrame(updateGame);
  checkGameOver();
}


//Lanzo el juego cuando se pulsa el start-button
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    updateGame();
    id1 = requestAnimationFrame(updateGame);
  };
};