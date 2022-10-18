window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class GameObject {
  constructor(x, y, width, height, img) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = img;
    this.speedX = 0;
    this.speedY = 0;
  }

  updatePosition() {
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

  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}

class BackgroundImage extends GameObject {
  constructor(x, y, width, height, img) {
    super(x, y, width, height, img);
    this.speedY = 4;
  }

  updatePosition() {
    this.y += this.speedY;
    this.y %= canvas.height;
  }

  draw() {
    ctx.drawImage(this.img, 0, this.y, this.width, this.height);
    ctx.drawImage(this.img, 0, this.y - canvas.height, this.width, this.height);
  }
}

class Obstacle extends GameObject {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.speedY = 3;
  }

  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class Game {
  constructor(background, player) {
    this.background = background;
    this.player = player;
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

    this.background.updatePosition();
    this.background.draw();

    this.player.updatePosition();
    this.player.draw();

    this.updateObstacles();

    this.updateScore();

    this.animationId = requestAnimationFrame(this.updateGame);

    this.checkGameOver();
  };

  updateObstacles = () => {
    this.frames++;

    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].updatePosition();
      this.obstacles[i].draw();
    }

    if (this.frames % 120 === 0) {
      const originY = 0;

      const minX = 50;
      const maxX = 100;
      const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;

      const minWidth = 50;
      const maxWidth = 240;
      const randomWidth =
        Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;

      const obstacle = new Obstacle(randomX, originY, randomWidth, 20);

      this.obstacles.push(obstacle);

      this.score++;
    }
  };

  checkGameOver = () => {
    const crashed = this.obstacles.some((obstacle) => {
      return this.player.crashWith(obstacle);
    });

    if (crashed) {

      cancelAnimationFrame(this.animationId);

      this.gameOver();
    }
  };

  updateScore() {
    ctx.font = "30px Verdana";
    ctx.fillStyle = "white";
    ctx.fillText(`Score: ${this.score}`, 80, 40);
  }

  gameOver() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red";
    ctx.font = "60px Verdana";
    ctx.fillText("Game Over!", canvas.width / 6, 200);

    ctx.font = "30px Verdana";
    ctx.fillStyle = "white";
    ctx.fillText(`Your Final Score: ${this.score}`, canvas.width / 6, 400);
  }

  clear = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
}

function startGame() {
  const bgImg = new Image();
  bgImg.src = "./images/road.png";

  const carImg = new Image();
  carImg.src = "./images/car.png";

  const backgroundImage = new BackgroundImage(
    0,
    0,
    canvas.width,
    canvas.height,
    bgImg
  );
  const player = new GameObject(250 - 25, canvas.height - 120, 50, 100, carImg);

  const game = new Game(backgroundImage, player);

  game.start();

  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
      game.player.speedX = -3;
    } else if (event.code === "ArrowRight") {
      game.player.speedX = 3;
    }
  });

  document.addEventListener("keyup", () => {
    game.player.speedX = 0;
  });
}

window.onload = () => {
  
  document.getElementById("start-button").onclick = () => {
    startGame();
  } }