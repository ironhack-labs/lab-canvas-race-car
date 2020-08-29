const canvas = document.getElementById("game-board").firstElementChild;
const ctx = canvas.getContext("2d");

class Car {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;

    const img = new Image();
    img.addEventListener("load", () => {
      // Once image loaded => draw
      this.img = img;
    });
    img.src = "../images/car.png";
  }

  update() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  newPos() {
    if (this.x >= 37 && this.x <= 407) {
      this.x += this.speedX;
    } else if (this.x < 37) {
      this.x = 37;
    } else {
      this.x = 407;
    }
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

class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }

  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
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
}

const player = new Car(60, 70, 217, 500);

const myObstacles = [];

const myGameArea = {
  frames: 0,
  start: function () {
    this.interval = setInterval(updateGameArea, 20);
  },

  stop: function () {
    clearInterval(this.interval);
  },

  score: function () {
    const points = Math.floor(this.frames / 5);
    ctx.font = "30px serif";
    ctx.fillStyle = "darkblue ";
    ctx.fillText(`Score: ${points}`, 10, 50);
  },

  clear: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  },
};

function updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 3;
    myObstacles[i].update();
  }

  myGameArea.frames += 1;
  if (myGameArea.frames % 120 === 0) {
    let minWidth = 100;
    let maxWidth = 300;
    let width = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );
    let minX = 37;
    let maxX = 467 - width;
    let x = Math.floor(Math.random() * (maxX - minX + 1) + minX);
    myObstacles.push(new Component(width, 30, "red", x, 0));
  }
}

function checkGameOver() {
  const crashed = myObstacles.some(function (obstacle) {
    return player.crashWith(obstacle);
  });

  if (crashed) {
    myGameArea.stop();
    console.log(player);
    console.log(myObstacles);
  }
}

function updateGameArea() {
  myGameArea.clear();
  player.newPos();
  player.update();
  updateObstacles();
  checkGameOver();
  myGameArea.score();
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  document.getElementById("start-button").onclick = () => {
    myGameArea.start();
  };

  function startGame() {}
  document.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
      case 37: // left arrow
        player.speedX -= 1;
        break;
      case 39: // right arrow
        player.speedX += 1;
        break;
    }
  });
  document.addEventListener("keyup", (e) => {
    player.speedX = 0;
    player.speedY = 0;
  });
};