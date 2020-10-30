window.addEventListener("load", () => {
  btn.addEventListener("click", startGame);
});

//pegando elementos do DOM
const btn = document.getElementById("start-button");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const carImg = new Image();
carImg.src = "../images/car.png";

const img = new Image();
img.src = "./images/road.png";

const gameArea = {
  player: null,
  obstacles: [],
  frames: 0,
  animationId: 0,
};

const backgroundImage = {
  img: img,
  x: 0,
  y: 0,
  speed: 4,

  move() {
    this.y += this.speed;
    this.y %= canvas.height;
  },

  draw() {
    ctx.drawImage(this.img, 0, this.y, 500, 960);
    if (this.speed < 0) {
      ctx.drawImage(this.img, 0, this.y + this.img.height, 500, 960);
    } else {
      ctx.drawImage(this.img, 0, this.y - canvas.height, 500, 960);
    }
  },
};

//Para criar o Player
class Player {
  constructor(x, y, width, height, color) {
    (this.x = x),
      (this.y = y),
      (this.width = width),
      (this.height = height),
      (this.speedX = 0),
      (this.color = color);
  }

  draw() {
    ctx.drawImage(carImg, 225, canvas.height - 110, 50, 100);
  }

  newPos() {
    this.x += this.speedX;
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

  isCrashedWith(obstacle) {
    const condition = !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );

    return condition;
  }
}

function startGame() {
  //para clicar o botão de start e trocar para a tela do canvas
  btn.parentElement.style.display = "none";
  canvas.style.display = "block";
  // canvas2.style.display = "block";

  gameArea.player = new Player(225, canvas.height - 25, 50, 100, "black");
  console.log(gameArea.player);
  updateGame();
}

function updateGame() {
  backgroundImage.move();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();
  gameArea.player.newPos();
  gameArea.player.draw();

  // requestAnimationFrame(updateGame);

  // Atualizar posição dos elementos

  updateObstacles();

  // updateScore(gameArea.score);

  gameArea.animationId = requestAnimationFrame(updateGame);

  // checkGameOver();
}

function updateObstacles() {
  gameArea.frames++;

  if (gameArea.frames % 30 === 0) {
    gameArea.score++;
  }

  gameArea.obstacles.map((obstacle) => {
    obstacle.x--;
    obstacle.update();
  });

  if (gameArea.frames % 120 === 0) {
    let x = canvas.height;
    let minwidth = 20;
    let maxwidth = 200;
    let width = Math.floor(
      Math.random() * (maxwidth - minwidth + 1) + minwidth
    );

    let minGap = 50;
    let maxGap = 200;
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

    const upperObstacle = new Obstacle(x, 0, 10, width, "red");
    const bottomObstacle = new Obstacle(
      x,
      width + gap,
      10,
      x - width - gap,
      "red"
    );

    gameArea.obstacles.push(upperObstacle);
    gameArea.obstacles.push(bottomObstacle);
  }
}

//Para criar Obstaculos com paredes
class Obstacle extends Player {
  constructor(x, y, width, height, color) {
    super(x, y);
    this.width = width;
    this.height = height;
    this.color = color;
    this.speedY = 0;
  }

  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  newPos() {
    this.y += this.speedY;
  }
}

window.addEventListener("load", () => {
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      gameArea.player.speedX += 4;
    }

    if (event.key === "ArrowLeft") {
      gameArea.player.speedX -= 4;
    }
  });

  document.addEventListener("keyup", (event) => {
    gameArea.player.speedX += 0;
  });
});
