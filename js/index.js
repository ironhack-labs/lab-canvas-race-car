const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let frames = 0;
let requestID;
const imageObstacles = ["images/man.png", "images/woman.png"]
const obstacles = [];
let score = 0;

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    requestID = requestAnimationFrame(updateCanvas);
  }
};

class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.image = new Image();
    this.image.src = "images/road.png";
  }
  draw() {
    this.y++;
    if (this.y > canvas.height) {
      this.y = 0;
    }
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x, this.y - this.height, this.width, this.height);
  }
  gameOver() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "60px Arial";
    ctx.fillText("Game Over", 100, 350);
  }
}

const background = new Background;

class Car {
  constructor(x, y, w, h, img) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.image = new Image();
    this.image.src = img;
  }
  draw() {
    // if (frames % 10 === 0) {
    //   this.x -= 5;
    // }
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  collision(item) {
    return (
      this.x < item.x + item.width &&
      this.x + this.width > item.x &&
      this.y < item.y + item.height &&
      this.y + this.height > item.y
    )
  }
}

const car = new Car(225, 550, 50, 75, "images/car.png");

addEventListener("keydown", (event) => {
  if (event.keyCode === 37) {
    car.x -= 20;
    if (car.x < car.width) {
      car.x = car.width;
    }
  }
  if (event.keyCode === 39) {
    car.x += 20;
    if (car.x > canvas.width - car.width * 2) {
      car.x = canvas.width - car.width * 2;
    }
  }

  // if (event.keyCode === 32) {
  //     mario.y -= 60;
  //     mario.jump = true;
  // }
});

class Obstacle extends Car {
  constructor(x, y, w, h, img) {
    super(x, y, w, h, img);
  }
  draw() {
    if (frames % 10 === 0) {
      this.y += 10;
    }
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}



function generateObstacles() {
  if (frames % 300 === 0 || frames % 500 === 0) {
    let x = Math.floor(Math.random() * (400 - 50) + 50);
    let imgRand = Math.floor(Math.random() * imageObstacles.length);
    const obstacle = new Obstacle(x, 0, Math.floor(Math.random() * (300 - 100) + 100), 50, imageObstacles[imgRand])
    obstacles.push(obstacle);
  }
}

function drawObstacles() {
  //iteramos en el arreglo obstacles para poder utilizar el .draw de cada enemigo
  // item = obstacle, index = 0, arregloOriginal
  obstacles.forEach((obstacle, index_obstacle) => {
    obstacle.draw();
    if (car.collision(obstacle)) {
      console.log("Crash");
      requestID = undefined;
      background.gameOver();
    }
      // };
      //eliminar al enemigo si se sale del canvas
      // y evitar que mi browser se alente y se coma toda mi ram
      // vamos a limpiar el array de los enemigos que ya no vemos en el canvas
      if (obstacle.y - obstacle.height > canvas.height) {
        obstacles.splice(index_obstacle, 1);
        score++;
        console.log(score++);
      }
    }
  )
}

function updateCanvas() {
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background.draw();
  car.draw();
  generateObstacles();
  drawObstacles();
  drawScore();
  if (requestID) {
    requestID = requestAnimationFrame(updateCanvas);
  }
}

function drawScore(){
  ctx.font = "20px Arial";
  ctx.fillText(`Score: ${score}`,300,600);
}