window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() { }
};

const game = {
  frames: 0,
  obstacles: [],
  start: () => {
    interval = setInterval(() => {
      updateCanvas();
    }, 10);
  },
  clear: () => {
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  },
  score: () => {
    const points = Math.floor(game.frames / 5);
    context.font = "14px Arial";
    context.fillStyle = "black";
    context.fillText(`Score ${points}`, 200, 50)
  },
  stop: () => {
    clearInterval(interval);
  }
}


const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");


class Player {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;

    const img = new Image();
    img.src = "./images/car.png";
    img.onload = () => {
      this.Image = img;
      this.draw();
    };
  }
  left() {
    return this.x;
  }

  right() {
    return this.x + 50;
  }

  top() {
    return this.y;
  }
  bottom() {
    return this.y + 70;
  }
  draw() {
    context.drawImage(this.Image, this.x, this.y, 50, 70)
  }
}


class Component {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speedY = 0;
    this.speedX = 0;
  }

  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.y = 1;
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
  crashWith(player) {
    return !(
      this.bottom() < player.top() ||
      this.top() > player.bottom() ||
      this.left() > player.right() ||
      this.right() < player.left()
    );
  }
}

const player = new Player(225, 600);


function updateCanvas() {
  game.clear();
  player.draw();
  drawObstacles();
  checkGameOver();
  game.score();
}

function checkGameOver() {
  const crashed = game.obstacles.some((obstacle) => {
    return obstacle.crashWith(player) === true;
  })
  if (crashed) {
    game.stop();
  }

}

function drawObstacles() {
  game.obstacles.forEach((obstacle) => {
    obstacle.y += 1;
    obstacle.draw();
  })

  game.frames++;

  if (game.frames % 120 === 0) {
    const minWidth = 200;
    const maxWidth = 250;
    const randomWidth = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);


    //Create right obstacle
    randomX = Math.floor(Math.random() * 500);




    //Create left obstacle
    const obstacleLeft = new Component(randomX, 0, randomWidth, 30, "green");

    setInterval(() => {
      game.obstacles.push(obstacleLeft);
    }, 100);
  }
}


document.addEventListener("keydown", (e) => {
  console.log(e);
  switch (e.key) {
    case "ArrowLeft":
      player.x -= 10;
      break;
    case "ArrowRight":
      player.x += 10;
      break;
  }
});

startButton = document.getElementById("start-button");
startButton.addEventListener("click", game.start);