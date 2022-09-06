document.getElementById("start-button").onclick = () => {
    startGame();
  };

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Object {
  constructor(x, y, width, height, img) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = img;
    this.speedX = 0;
    this.speedY = 0;
  }

  position() {
    this.x += this.speedX;

  

    if (this.x <= this.width - 10) {
      this.x = this.width - 10;
    }

    if (this.x >= canvas.width - (this.width + 40)) {
      this.x = canvas.width - (this.width + 40);
    }

    this.y += this.speedY;
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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

  crash(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}

class BackgroundImage extends Object {
  constructor(x, y, width, height, img) {
    super(x, y, width, height, img);
    this.speedY = 3;
  }

  position() {
    this.y += this.speedY;
    this.y %= canvas.height;
  }

  draw() {
    ctx.drawImage(this.img, 0, this.y, this.width, this.height);
    ctx.drawImage(this.img, 0, this.y - canvas.height, this.width, this.height);
  }
}

class Obstacle extends Object {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.speedY = 3;
  }

  draw() {
    ctx.fillStyle = "darkred";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class Game {
  constructor(background, car) {
    this.background = background;
    this.car = car;
    this.obstacles = [];
    this.frames = 0;
    this.score = 0;
    this.animationId;
  }

  start = () => {
    this.updateGame();
  };

  updateGame = () => {
    this.clear();

    this.background.position();
    this.background.draw();

    this.car.position();
    this.car.draw();

    this.updateObstacles();

    this.generateScore();

    this.animationId = requestAnimationFrame(this.updateGame);

    this.checkGameOver();
  };

  updateObstacles = () => {
    this.frames++;

    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].position();
      this.obstacles[i].draw();
    }

    if (this.frames % 120 === 0) {
      const originY = 0;

      const minX = 50;
      const maxX = 100;
      const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;

      const minWidth = 50;
      const maxWidth = 200;
      const randomWidth =
        Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;

      const obstacle = new Obstacle(randomX, originY, randomWidth, 20);

      this.obstacles.push(obstacle);

      this.score+=100;
    }
  };

  checkGameOver = () => {
    const crashed = this.obstacles.some((obstacle) => {
      return this.car.crash(obstacle);
    });

    if (crashed) {
      

      cancelAnimationFrame(this.animationId);

      this.gameOver();
    }
  };

  generateScore() {
    ctx.font = "20px Sans";
    ctx.fillStyle = "white";
    ctx.fillText(`Score: ${this.score}`, 80, 40);
  }

  gameOver() {
    ctx.fillStyle = "black";
    ctx.fillRect(50, 190, 410, 320);

    ctx.fillStyle = "red";
    ctx.font = "60px Arial";
    ctx.fillText("Game Over!", 90, 300);

    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Your Final Score: ${this.score}`, 130, 400);
  }

  clear = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
}

function startGame() {
  
  const roadImage = new Image();
  roadImage.src = "./images/road.png";

  const carImage = new Image();
  carImage.src = "./images/car.png";

  const background = new BackgroundImage(0,0,canvas.width,canvas.height,roadImage);
  
  const car = new Object(225, 580, 50, 100, carImage);

  const game = new Game(background, car);

  game.start();

  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
      game.car.speedX = -4;
    } else if (event.code === "ArrowRight") {
      game.car.speedX = 4;
    }
  });

  document.addEventListener("keyup", () => {
    game.car.speedX = 0;
  });
}







