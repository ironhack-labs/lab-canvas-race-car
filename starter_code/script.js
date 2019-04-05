const canvas = document.getElementById("game-board");
const ctx = canvas.getContext("2d");

const imagenes = {
  imgBoard: "./images/board.png",
  imgCar: "./images/car.png",
  imgArrows: "./images/arrows.png",
  imgLogo: "./images/logo.png"
};

class Board {
  constructor(imgBoard) {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.imgBoard = new Image();
    this.imgBoard.src = imgBoard;
    this.imgBoard.onLoad = () => {
      this.draw();
    };
  }
  draw() {
    if (this.y > +this.height) this.y = 0;
    ctx.drawImage(
      this.imgBoard,
      this.x,
      this.y - this.height,
      this.width,
      this.height
    );
    ctx.drawImage(this.imgBoard, this.x, this.y, this.width, this.height);
    this.y++;
  }
}

class Car {
  constructor(imgCar) {
    this.x = 40;
    this.y = 20;
    this.img = new Image();
    this.img.src = imgCar;
    this.img.onload = () => {
      this.draw();
    };
  }
  moveRight() {
    this.x += 10;
  }
  moveLeft() {
    this.x -= 10;
  }
  draw() {
    ctx.drawImage(this.img, this.x, canvas.height - 20, 20, 20);
  }
}

class Obstacle {
  constructor (x, width) {
    this.x = x;
    this.y = 0;
    this.width = width;
    this.height = 10;
  }
  draw(canvasX) {
    ctx.fillRect(canvasX, 0, this.width, this.height) //Cambiar coordenadas del canvas x,y
  }
}

function getRandomX() {
  return Math.floor(Math.random() * (canvas.width - 50))
}

function getRandomCanvasX() {
  return Math.floor(Math.random() * (canvas.width - 50))
  // return canvas.width - (2 * car.width)
}

function getRandomCanvasY() {
  return Math.floor(Math.random() * canvas.height)
}

// function getRandomY() {
//   return Math.floor(Math.random() * canvas.height)
// }

const board = new Board(imagenes.imgBoard);
const car = new Car(imagenes.imgCar);
const arrayObstacles = []
for(let i = 0; i < 1; i++){
  const obstacle = new Obstacle(
    getRandomX(),
    getRandomX()
    )
  arrayObstacles.push(obstacle)
}

let interval;

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    board.draw();
    car.draw();
    arrayObstacles.pop().draw(getRandomX())
    arrayObstacles.pop().y++
    frames++;
  }

  function startGame() {
    if (interval) return;
    interval = setInterval(update, 1000 / 60);
  }

  addEventListener("keydown", e => {
    switch (e.keyCode) {
      case 37:
      if(car.x > 40) car.moveLeft() 
      break;
      case 39:
      if (car.x < canvas.width - 60)  car.moveRight() 
      break; 

    }
  });
};

