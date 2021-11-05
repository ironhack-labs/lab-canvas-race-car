const $canvas = document.querySelector("canvas");
const $button = document.querySelector("button");
const ctx = document.getElementById('canvas'). $canvas.getContext ("2d");
const obstacle = new Obstacle(500, 413);
const board = new Board();

let frames = 0;

// Iteración 1. Crear el tablero.
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
    if (this.y > +$canvas.height) this.y = 0;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.x,
      this.y - this.height,
      this.width,
      this.height)
  } 
}

class Character{
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 30
    this.height = 50
    this.image = new Image()
    this.image.src = "/images/car.png"
    this.move = 8;
    
  }
  // va a dibujar una imagen
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    // su posición es a la derecha
    this.x++;
    // para que no se salga del margen
    if (this.x > $canvas.width - this.width)
      this.x = $canvas.width - this.width;
    
  }
  // métodos de movimientos
  moveLeft() {
    this.x -= this.move;
  }
  moveRigth() {
    this.x += this.move;
  }
  //isTouching(obj){
  //  return (
  //    this.y < obj.y + obj.height &&
   //   this.y + this.height > obj.x;
   //   this.x < obj.x + obj.width &&
     // this.x + this.width > obj y)
  }
// Una instancia, un objeto creado a partir de una clase.
  const p1 = new Character(500,700);

class Obstacle extends Character {
  constructor(x, y) {
    this.image.src = "/images/pngegg.png";
  }
  draw() {
    this.y--;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

function generateObstacle() {
  if (frames % 200 === 0) {
    const x = Math.floor(Math.random() * 380);
    const obstacle = new Obstacle (x, 500);
    obstacle.push(obstacle);
  }
}

function drawObstacle(){
  obstacle.forEach((obstacle) => obstacle.draw());
}

function checkCollitions() {
  obstacle.forEach((obstacle) => {
    if (p1.isTouching(obstacle)) {
      alert("Chocaste");
    }
  });
}
// modifica el estado del personaje
function checkKeys() {
  document.onkeydown = (event) => {
    switch (event.key) {
      case "ArrowLeft":
        p1.moveLeft();
        break;
      case "ArrowRight":
        p1.moveRigth();
        break;

      default:
        break;
    }
  };
}

function update() {
  frames++;
  //recalculamos el estado de nuestro programa
  checkKeys();
  generateObstacle();
  
  //limpia el canvas
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);

  //dibuja al personaje
  p1.draw()
  board.draw();
  drawObstacle();

}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    setInterval(() => {
      update();
    }, 1000/60);
  }
};

$button.onclick = startGame;
