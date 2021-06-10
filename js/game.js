class Canvas {
  constructor(width, height, canvas) {
    this.width = width;
    this.height = height;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.frames = 0;
    this.obstacles = [];
    this.score = 0;
    this.lives = 5;
    this.livesImg = null;
    this.lostLivesImg = null;
  }

  init() {
    this.createCar();
    this.createLives();
    this.createGameOverScreen();

    let id = setInterval(() => {
      if (this.frames % 100 == 0) this.createObstacle();
      if (this.obstacles.length >= 10) this.obstacles.shift();
      this.clearScreen();
      this.drawRoad();

      this.drawCar();

      this.drawObstacles();

      this.drawLives();
      this.drawScore();

      if (this.frames % 140 == 0 && this.lives <= 0) {
        const gameOver = document.querySelector("#end-game");
        gameOver.style.display = "block";
        clearInterval(id);
      }

      this.frames++;
    }, 20);
  }

  createGameOverScreen() {
    const board = document.querySelector("#game-board");
    const fragment = document.createDocumentFragment();
    const element = document.createElement("div");
    element.setAttribute("id", "end-game");
    element.appendChild(document.createElement("p"));
    element.lastChild.textContent = "game over";
    fragment.appendChild(element);
    board.appendChild(fragment);
  }

  clearScreen() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  drawRoad() {
    this.ctx.fillStyle = "#008100";
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.ctx.fillStyle = "#808080";
    this.ctx.fillRect(50, 0, this.width - 100, this.height);

    this.ctx.setLineDash([1, 0]);
    this.ctx.lineWidth = 16;
    this.ctx.strokeStyle = "#f3f3f3";

    this.ctx.beginPath();
    this.ctx.moveTo(70, 0);
    this.ctx.lineTo(70, this.height);

    this.ctx.moveTo(this.width - 70, this.height);
    this.ctx.lineTo(this.width - 70, 0);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.setLineDash([40, 60]);
    this.ctx.lineWidth = 12;
    this.ctx.moveTo(this.width / 2 - 8, 40);
    this.ctx.lineTo(this.width / 2 - 8, this.height);
    this.ctx.stroke();
    this.ctx.closePath();
  }

  createCar() {
    this.car = new Car(this.ctx, "car.png", 100, 200, this.width / 2 - 50, this.height - 210);
  }

  drawCar() {
    this.car.draw();
  }

  createObstacle() {
    this.obstacles.push(new Obstacle(this.ctx, 8, 20, 100, 300));
  }

  drawObstacles() {
    this.obstacles.forEach((el) => {
      el.draw();
      el.update(this.car, this);
    });
  }

  createLives() {
    this.livesImg = new Image();
    this.lostLivesImg = new Image();
    this.livesImg.src = `images/full-heart.png`;
    this.lostLivesImg.src = `images/empty-heart.png`;
  }

  drawLives() {
    let acc = 5;
    for (let i = 0; i < this.lives; i++) {
      this.ctx.drawImage(this.livesImg, acc, 5, 20, 20);
      acc += 25;
    }
    acc = 5;
    for (let i = 0; i < 5; i++) {
      this.ctx.drawImage(this.lostLivesImg, acc, 5, 20, 20);
      acc += 25;
    }
  }

  drawScore() {
    this.ctx.font = "40px Arial";
    this.ctx.textAlign = "right";

    this.ctx.strokeStyle = "black";
    this.ctx.lineWidth = 3;
    this.ctx.strokeText(`Score: ${this.score}`, this.width - 11, 51, this.width / 2);

    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Score: ${this.score}`, this.width - 10, 50, this.width / 2);
  }
}

class Car {
  constructor(ctx, imgUrl, width = 100, height = 100, xPosition = 0, yPosition = 0, speed = 30) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.position = { x: xPosition, y: yPosition };

    this.speed = speed;

    this.imgUrl = imgUrl;
    this.imgInstance = new Image();
    this.imgInstance.src = `images/${this.imgUrl}`;

    this.setListeners();
  }

  setListeners() {
    document.onkeydown = (e) => {
      e.key === "ArrowLeft" ? this.moveLeft() : null;
      e.key === "ArrowRight" ? this.moveRight() : null;
    };
  }

  draw() {
    this.ctx.drawImage(this.imgInstance, this.position.x, this.position.y, this.width, this.height);
  }

  moveLeft() {
    if (this.position.x > 0 + 20) this.position.x -= this.speed;
  }

  moveRight() {
    if (this.position.x < 500 - this.width - 20) this.position.x += this.speed;
  }
}

class Obstacle {
  constructor(ctx, speed = 5, height = 50, minWidth = 20, maxWidth = 100) {
    this.ctx = ctx;
    this.speed = speed;
    this.position = {
      x: Number(Math.floor(Math.random() * 440)) - 60,
      y: 0,
    };

    this.width = Number(Math.floor(Math.random() * (maxWidth - minWidth) + minWidth));
    this.height = height;

    this.collided = false;
    this.scored = false;
  }

  draw() {
    this.ctx.fillStyle = "#870007";
    this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(car, global) {
    this.position.y += this.speed;
    this.detectCollision(car, global);
  }

  detectCollision(car, global) {
    if (
      this.position.x + this.width > car.position.x &&
      this.position.x < car.position.x + car.width &&
      this.position.y + this.height > car.position.y &&
      this.position.y < car.position.y + car.height &&
      !this.collided
    ) {
      this.collided = true;
      global.lives--;
    } else if (this.position.y > car.position.y + car.height && !this.scored && !this.collided) {
      global.score += this.width;
      this.scored = true;
    }
  }
}
