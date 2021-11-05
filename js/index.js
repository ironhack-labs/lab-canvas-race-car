const $canvas = document.querySelector("canvas");
const $button = document.querySelector("button");
const ctx = $canvas.getContext ("2d");
const board = new Board();
const p1 = new Character(0,0);
const obstacle = new Obstacle(500, 413);

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

class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 50;
    this.image = new Image();
    this.move = 8;
    this.image.src = "/images/car.png";
  }

  draw() {
    this.x++;
    if (this.x > $canvas.width - this.width)
      this.x = $canvas.width - this.width;
    
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    this.x -= this.move;
  }
  moveRigth() {
    this.x += this.move;
  }
  isTouching(obj){
    return (
      this.y < obj.y + obj.height &&
      this.y + this.height > obj.y;
      this.x < obj.x + obj.width &&
      this.x + this.width > obj x)
  }
}

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
  checkKeys();
  generateObstacle();
  
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);

  board.draw();
  p1.draw()
  drawObstacle();

}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    update();
  
    setInterval(() => {
      update();
    }, 1000/60);
  }
};

$button.onclick = startGame;
