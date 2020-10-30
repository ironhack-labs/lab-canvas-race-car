window.addEventListener("load", () => {
  btn.addEventListener("click", startGame);
});

//pegando elementos do DOM
const btn = document.getElementById("start-button");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const carImg = new Image();
carImg.src = "./images/car.png";

const img = new Image();
img.src = "./images/road.png";

img.onload = function () {
  updateGame();
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

const gameArea = {
  player: null,
  obstacles: [],
  animationId: 0,
};

function startGame() {
  //para clicar o botão de start e trocar para a tela do canvas
  btn.parentElement.style.display = "none";
  canvas.style.display = "block";

  updateGame();

  gameArea.player = new Player(325, 0);
}

function updateGame() {
  backgroundImage.move();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();

  // Atualizar posição dos elementos
  gameArea.player.newPos();

  gameArea.player.draw();

  gameArea.animationId = requestAnimationFrame(updateGame);

  // updateObstacles();

  // updateScore(gameArea.score);

  // gameArea.animationId = requestAnimationFrame(updateGame);

  // checkGameOver();
}

// function updateObstacles() {
//   gameArea.frames++;

//   if (gameArea.frames % 30 === 0) {
//     gameArea.score++;
//   }

//   gameArea.obstacles.map((obstacle) => {
//     obstacle.x--;
//     obstacle.update();
//   });

//   if (gameArea.frames % 120 === 0) {
//     let x = canvas.height;
//     let minwidth = 20;
//     let maxwidth = 200;
//     let width = Math.floor(
//       Math.random() * (maxwidth - minwidth + 1) + minwidth
//     );

//     let minGap = 50;
//     let maxGap = 200;
//     let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

//     const upperObstacle = new Component(x, 0, 10, width, "red");
//     const bottomObstacle = new Component(
//       x,
//       width + gap,
//       10,
//       x - width - gap,
//       "red"
//     );

//     gameArea.obstacles.push(upperObstacle);
//     gameArea.obstacles.push(bottomObstacle);
//   }
// }

//Para criar o player
class Player {
  constructor(x, y) {
    (this.x = x),
      (this.y = y),
      (this.width = 50),
      (this.height = 100),
      (this.speedX = 0);
  }

  draw() {
    ctx.drawImage(carImg, 350, canvas.height - 60, 50, 100);
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
    if (event.key === right) {
      gameArea.player.speedX += 4;
    }

    if (event.key === left) {
      gameArea.player.speedX -= 4;
    }
    return;
  });

  document.addEventListener("keyup", (event) => {
    gameArea.player.speedX += 0;
  });
});
