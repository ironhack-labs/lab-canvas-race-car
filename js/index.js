// 1. Traer los elementos del DOM.

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
}
const $canvas = document.querySelector("canvas");
const $button = document.querySelector("button");
const ctx = $canvas.getContext("2d");

// 2. Definir variables globales.

let frames = 0;

  // 3. Definir las clases del juego con propiedades y métodos.

class Board {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = $canvas.width;
    this.height = $canvas.height;
    this.image = new Image();
    this.image.src = "/images/road.png"
  }
  draw() {
    this.y++;
    if (this.y > $canvas.height) this.y = 0;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.x,
      this.y -
      this.height,
      this.width,
      this.height)
    }
  }

class Character {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 60
    this.height = 100
    this.image = new Image()
    this.image.src = "/images/car.png"
    this.move = 10;
  }
  // va a dibujar una imagen
  draw() {
    // su posición es a la derecha
    this.y++;
    // para que no se salga del margen inferior
    if (this.y > $canvas.height - this.height)
      this.y = $canvas.height - this.height;
    // para que no se salga del margen lateral derecho
    if (this.x > $canvas.width - this.width)
      this.x = $canvas.width - this.width;
    // para que no se salga del margen lateral izquierdo
    if (this.x < 0)
      this.x = 0;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  // métodos de movimientos
  moveLeft() {
    this.x -= this.move;
  }
  moveRigth() {
    this.x += this.move;
  }
  // método para el toque con los obstáculos.
  isTouching(obstacle) {
    return (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
    );
  } 
}

class Obstacle extends Character {
  constructor(x, y) {
    super(x, y)
    this.image.src = "/images/pngegg.png";
    this.height = 30
    this.width = 200
  }
  draw() {
    this.y++;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

class Score {
  constructor () {
    this.x = 250
    this.y = 100
    this.score = 0
  };
  draw() {
    ctx.font = "40px sans-serif";
    ctx.strokeText (this.score, 250, 100)
    ctx.fillText = "black"
  }
  scoreIncrement() {
    this.score++
  }
}

// 4. Instancias de clase.

// Una instancia, un objeto creado a partir de una clase.
const car1 = new Character(220,600);
const board = new Board();
const allObstacles = [];
let isGameOver = false;
let intervalId;
let score = new Score

// 5. Funciones del flujo del juego.

function startGame() {
  if (intervalId) return
    intervalId = setInterval(() => {
    update();
  }, 1000 / 60);
}

function gameOver() {
  if (isGameOver) {
    ctx.font = "40px sans-serif";
    ctx.strokeText("Game Over", $canvas.width / 3, $canvas.height / 2);
  }
}

// 6. Funciones de apoyo

function soundInitial () {
  if (frames = 0) soundBegin ();
}

function generateObstacle() {
    if (frames % 200 === 0) {
    const x = Math.floor(Math.random() * 380);
    const obstacle = new Obstacle(x, 0);
      allObstacles.push(obstacle);
      // que limpie el array de los obstáculos.
      allObstacles.forEach((obstacle, index) => {
        if (obstacle.x + obstacle.width < 0) allObstacles.splice(1,index);
      });
  }
}

function drawObstacle() {
  allObstacles.forEach((obstacle) => {
    obstacle.draw()
  })
}

function checkCollitions() {
  allObstacles.forEach((obstacle) => {
    if (car1.isTouching(obstacle)) {
      clearInterval(intervalId);
      isGameOver = true;
    }
  });
}

function drawScore() {
  allObstacles.forEach((obstacle) => {
    if(obstacle.y + obstacle.height > car1.y + car1.height) {
      score.scoreIncrement ()
    }
  })
  score.draw()
}

// 7. Funciones de interacción con el usuario.

// modifica el estado del personaje
function checkKeys() {
  document.onkeydown = (event) => {
    switch (event.key) {
      case "ArrowLeft":
        car1.moveLeft();
      break;
      case "ArrowRight":
        car1.moveRigth();
      break;

      default:
      break;
    }
  };
}

// 8. Inicializar el juego.

function update() {
  frames++;
  //recalculamos el estado de nuestro programa
  checkKeys();
  //genera obstáculos
  generateObstacle();
  //limpia el canvas
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  // dibuja el fondo
  board.draw();
  //dibuja al personaje
  car1.draw()
  // dibuja el obstáculo
  drawObstacle();
  // alerta de choque
  checkCollitions()
  // game over
  gameOver()
  // score
  drawScore()
}
$button.onclick = startGame;