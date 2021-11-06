window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {
      update();
  }

};

const $canvas = document.querySelector('canvas');
const $button = document.querySelector('button');
const ctx = $canvas.getContext('2d');

let frames = 0;
const walls = [];

class Road {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = $canvas.width;
        this.height = $canvas.height;
        this.image = new Image();
        this.image.src =
            '/images/road.png';
    }

    draw() {
        this.y++;
      if (this.y > this.height) this.y = 0;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(
            this.image,
            this.x,
            this.y - this.height,
            this.width,
            this.height,
        );
    }
}

class Car {
  constructor(x, y) {
    this.x = 235;
    this.y = 350;
    this.width = 60;
    this.height = 100;
    this.image = new Image();
    this.move = 8;
    this.image.src = "/images/car.png";
  }
  draw() {
    //this.y--;
    if (this.y < -this.height) this.y = 0;
      ctx.drawImage(
        this.image,
        this.x,
        this.y + this.height,
        this.width,
        this.height,
    );
  }
    moveLeft() {
      this.x -= this.move;
    }
    moveRight(){
      this.x += this.move;
    }
  
}

class Wall extends Car {
  constructor(x, y) {
    super(x, y);
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 60;
    this.image.src ="/images/brick.png"
  }
  draw() {
    this.y++;
    ctx.drawImage(this.image,this.x,this.y, this.width,this.height)
  }

}


const road = new Road();
const car = new Car();

function start() {
    // setInterval(() => {
    update();
    // }, 1000 / 60);
}

function update() {
    // 1. calcular o recalcular el estado de nuestro programa
    frames++;
  generateWalls();
    // 2. Limpiar el canvas
    ctx.clearRect(0, 0, $canvas.width, $canvas.height);
    // 3. Dibujar los elementos
    road.draw();
    car.draw();
    drawWalls();
    checkKeys();
    requestAnimationFrame(update);
}


// Funciones de apoyo

function generateWalls() {
  if (frames % 200 === 0) {
    const x = Math.floor(Math.random() * 251)+ 50;
    console.log(x);
    const wall = new Wall(x, 100);
    console.log(wall);
    walls.push(wall);
  }
}

function drawWalls() {
  walls.forEach((wall) => wall.draw());
}

function checkKeys() {
  document.onkeydown = (event) => {
    switch (event.key) {
      case "ArrowLeft":
        car.moveLeft();
        break;
      case "ArrowRight":
        car.moveRight();
        break;

      default:
        break;
    }
   
  };
   
}

$button.onclick = start;
