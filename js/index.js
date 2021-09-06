class Board {
  constructor() {
    /**
     * Se definen las variables que vamos a utilizar en el board asi como el width & height del canvas
     * Se define la imagen a utilizar como fondo
     */
    this.x = 0;
    this.y = 0;
    this.width = $canvas.width;
    this.height = $canvas.height;
    this.img = new Image();
    this.img.src = "../images/road.png";
    this.frames = 0;
    this.looser = false;
  }

  setLooser() {
    this.looser = true;
  }

  /**
   * Se esta dibujando el Fondo repetido
   * Y moviendo conforme el usuario avanza
   */
  draw() {
    if (this.y >= $canvas.height) this.y = 0;
    this.y++;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.img, this.x, this.y - this.height, this.width, this.height);
  }
}

class Car {
  /**
   * Se definen las variables que vamos a utilizar en el car asi como el width & height del canvas
   * Se define la imagen a utilizar como car
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 91;
    this.speed = 6;
    this.img = new Image();
    this.img.src = "../images/car.png";
  }

  /**
   * Se dibuja el carrito en su posicion inicial
   */
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  move(event) {
    switch (event.key) {
      case "ArrowRight":
        this.moveRight();
        break;
      case "ArrowLeft":
        this.moveLeft();
        break;
      // case "ArrowUp":
      //   this.moveUp();
      //   break;
      // case "ArrowDown":
      //   this.moveDown();
      //   break;
      default:
        break;
    }
    this.draw();
  }

  moveLeft() {
    this.x -= this.speed;
  }
  moveRight() {
    this.x += this.speed;
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
  crashWith(obstacle) {
    return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
  }
}

class Obstacle {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;

    this.speedX = 0;
    this.speedY = 0;
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
  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
}

function updateGame() {
  clearCanvas();

  board.draw();
  carCharacter.draw();
  updateObstacles();
  checkGameOver();
}

function checkGameOver() {
  const crashed = myObstacles.some((obstacle) => {
    return carCharacter.crashWith(obstacle);
  });

  if (crashed) {
    clearInterval(gameInterval);
    board.setLooser();
  }
}

const myObstacles = [];

function updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y++;
    myObstacles[i].update();
  }

  board.frames += 1;

  if (board.frames % 120 === 0) {
    console.log(myObstacles);
    // ESTABLECEMOS EL TAMAÑO DEL TUBITO VERDE
    let minWidth = 20;
    let maxWidth = 200;
    let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);

    let minGap = 50;
    let maxGap = 200;
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

    myObstacles.push(new Obstacle(width, 10, "green", gap, 10));
  }
}

const $canvas = document.getElementById("canvas"); // Obtencion de tag <canvas></canvas>
const ctx = $canvas.getContext("2d"); //Context del canvas
const carCharacter = new Car(212.5, 600);
const board = new Board();
let gameInterval;

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame(); // Iniciando el juego cuando se de click en el boton Start Button
  };

  function startGame() {
    if (gameInterval) return;
    gameInterval = setInterval(updateGame, 1000 / 60);
  }
};

document.addEventListener("keydown", (event) => {
  if (carCharacter && board && !board.looser) {
    carCharacter.move(event);
  }
});
