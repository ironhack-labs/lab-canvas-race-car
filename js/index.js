const lienzo = document.querySelector("canvas");
const ctx = lienzo.getContext("2d");

let interval;
let frames = 0;
const obstacles = [];

const imagen = {
    car:'images/car.png', 
    over:'images/gameOver.png'   
}

class Background {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = lienzo.width;
    this.height = lienzo.height;
    this.draw();
  }

  draw() {
    if (this.x < lienzo.width) this.x = 0;
    this.x--;
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 380, 700);
    ctx.fillStyle = "gray";
    ctx.fillRect(40, 0, 300, 900);
    ctx.fillStyle = "white";
    ctx.fillRect(50, 0, 10, 700);
    ctx.fillRect(315, 0, 10, 700);
    for (let i = 0; i <= 10; i++) {
      ctx.fillRect(200, 130 * i, 10, 700 / 10);
    }
  }
}

class Car {
  constructor() {    
    this.width = 40;
    this.height = 70;
    this.x = lienzo.width / 2 - this.width / 2;
    this.y = lienzo.height - 150;
    this.img = new Image();
    this.img.src = imagen.car;
    this.img.onload = () => {
      this.draw();
    };
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  moverDer() {
    if (this.x > lienzo.width - 100) 
    return;
    this.x += 10;
    this.move();
  }

  moverIzq() {
    if (this.x <= 25) 
    return;
    this.x -= 10;
    this.move();
  }

  move() {
    this.draw();
  }

  isTouching(obstacle) {
    return (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
    );
  }
}

class Obstacle {
  constructor(x) {
    ctx.clearRect(0, 0, lienzo.width, lienzo.height);
    this.x = x;
    this.y = 110;
    this.width = 50;
    this.height = 100;
    this.img2 = new Image();
    this.img2.src = imagen.car;
    this.img2.onload = () => {
      this.drawObstacle();
    };
  }

  drawObstacle() {
    this.y += 5;
    ctx.drawImage(this.img2, this.x, this.y, this.width, this.height);
  }
}

let carrito = new Car(0, lienzo.height - 200);
let fondo = new Background(300, 700);


function createObs() {
  if (frames % 90 === 0) {
    let rand = Math.random() * 200 + 50;
    obstacles.push(new Obstacle(rand));
  }
  frames++;
  drawObstacles();
  touch();
}

function drawObstacles() {
  fondo.draw();
  carrito.draw();
  obstacles.forEach((obstacle) => obstacle.drawObstacle());
}

function touch() {
  obstacles.forEach((aux, aux2) => {
    if (aux.y > lienzo.height) {
      obstacles.splice(aux2, 1);
    }
    carrito.isTouching(aux) ? gameOver() : null;
  });
}

function gameOver() {
  let imgGameOver = new Image();
  imgGameOver.src = imagen.over;
  imgGameOver.onload = () => {

    class Car {
    constructor() {      
      this.width = 40;
      this.height = 70;
      this.x = lienzo.width / 2 - this.width / 2;
      this.y = lienzo.height - 150;
      this.img = new Image();
      this.img.src = imagen.car
      this.img.onload = () => {
        this.draw();
      };
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  
    moverDer() {
      if (this.x > lienzo.width - 100) 
      return;
      this.x += 10;
      this.move();
    }
  
    moverIzq() {
      if (this.x <= 25) 
      return;
      this.x -= 10;
      this.move();
    }
  
    move() {
      this.draw();
    }
  
    isTouching(obstacle) {
      return (
        this.x < obstacle.x + obstacle.width &&
        this.x + this.width > obstacle.x &&
        this.y < obstacle.y + obstacle.height &&
        this.y + this.height > obstacle.y
      );
    }
  }
  
    ctx.drawImage(imgGameOver, 20, 300);
  };
  clearInterval(interval);
}

document.addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 39:     
      return carrito.moverDer();
    case 37:
      carrito.moverIzq();
  }
});

window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    fondo.draw();
    carrito = new Car();
    carrito.draw();
    interval = setInterval(createObs, 1000 / 30);
  };
};

