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
  }

  updateBoard() {}

  /**
   * Se esta dibujando el Fondo repetido
   * Y moviendo conforme el usuario avanza
   */
  draw() {
    if (this.y >= $canvas.height) this.y = 0;
    this.y++;
    console.log(this.y);
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
    this.width = 70;
    this.height = 90;
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
      case "ArrowUp":
        this.moveUp();
        break;
      case "ArrowDown":
        this.moveDown();
        break;
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
  moveUp() {
    this.y -= this.speed;
  }
  moveDown() {
    this.y += this.speed;
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
}

function updateGame() {
  //recalcular el estado de los elementos

  //limpiar el canvas
  clearCanvas();
  //dibujar los elementos

  board.draw(); // Se dibuja el Board/Fondo
  carCharacter.draw(); // Se dibuja el carrito
}

const $canvas = document.getElementById("canvas"); // Obtencion de tag <canvas></canvas>
const ctx = $canvas.getContext("2d"); //Context del canvas
const carCharacter = new Car(0, 250);
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
  if (carCharacter && board) {
    carCharacter.move(event);
  }
});