const canvas = document.getElementById("canvas");
const gameOver = document.getElementById("game-over");

const ctx = canvas.getContext("2d");
const gameOverCtx = gameOver.getContext("2d");

const gameIntro = document.getElementsByClassName("game-intro")[0];
const background = new Image();
background.src = "../images/road.png";

const car = new Image();
car.src = "../images/car.png";

const barriers = [];

let score = 0;

class Car {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = car;
    this.velocity = 17;
  }

  draw() {
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    ctx.fill();
    ctx.closePath();
  }

  right() {
    if (this.x < 380) {
      this.x += this.velocity;
    }
  }

  left() {
    if (this.x > 75) {
      this.x -= this.velocity;
    }
  }
}

class Barrier {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    this.y += 5;

    ctx.fillRect(this.x, this.y, 150, 30);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
  }
}

window.onload = () => {
  const gameCar = new Car(225, 600, 50, 80);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  document.addEventListener("keydown", (evento) => {
    switch (evento.key) {
      case "ArrowRight":
        gameCar.right();
        break;
      case "ArrowLeft":
        gameCar.left();
        break;
    }
  });

  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  let game = setInterval(() => {
    gameCar.draw();
  }, 1000 / 60);
  let obs = setInterval(() => {
    const posicionX = Math.floor(Math.random() * 300);
    if (posicionX <= 650 && posicionX >= 100) {
      const barrier = new Barrier(posicionX, 0);
      barriers.push(barrier);
    }
  }, 2000);

  function startGame() {
    gameIntro.classList.add("display-none");
    gameCar.draw();
    ctx.fillText(`score: ${score}`, 15, 20);
    barriers.forEach((barrier, barrierIndex) => {
      barrier.draw();

      if (
        barrier.y + 30 >= gameCar.y &&
        gameCar.x + 50 >= barrier.x &&
        barrier.y <= gameCar.y + 80 &&
        barrier.x + 150 >= gameCar.x
      ) {
        clearInterval(obs);
        cancelAnimationFrame(startGame);
        clearInterval(game);
        canvas.classList.add("display-none");
        gameOver.classList.remove("display-none");
        gameOver.font = "30px Arial";

        gameOverCtx.clearRect(0, 0, canvas.width, canvas.height);
        gameOverCtx.beginPath();
        gameOverCtx.fillText(`Your final score ${score}`, 15, 20);

        gameOverCtx.fillStyle = "#ffffff";
        gameOverCtx.fill();
      } else if (barrier.y + 30 >= canvas.height) {
        score++;
        barriers.splice(barrierIndex, 1);
      }
    });

    window.requestAnimationFrame(startGame);
  }
};
