startButton = document.getElementById("start-button");

let animationID, context;
const roadImage = new Image();
const carImage = new Image();

roadImage.src = "../images/road.png";
carImage.src = "../images/car.png";

roadImage.onload = function () {
  carImage.onload = function () {
    const canvas = document.querySelector("#canvas");
    context = canvas.getContext("2d");
    context.font = "35px sans-serif";
  };
};

const road = {
  img: roadImage,
  x: 0,
  y: 0,
  speed: 5,
  frames: 0,
  move: function () {
    this.y += this.speed;
    this.y %= canvas.height;
  },
  draw: function () {
    context.drawImage(this.img, 0, this.y, canvas.width, canvas.height);
    this.speed < 0
      ? context.drawImage(
          this.img,
          0,
          this.y + canvas.height,
          canvas.width,
          canvas.height
        )
      : context.drawImage(
          this.img,
          0,
          this.y - canvas.height,
          canvas.width,
          canvas.height
        );
  },
};

class Obstacles {
  constructor() {
    this.height = canvas.height / 20;
    this.width = carImage.width / 2 + Math.random() * ((1 * canvas.width) / 5);
    this.x = canvas.width / 12 + Math.random() * ((1 / 2) * canvas.width);
    this.y = 0;
  }
  draw() {
    context.fillStyle = "red";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
  move() {
    this.y += road.speed;
  }
  top() {
    return this.y + this.height;
  }
  bottom() {
    return this.y;
  }
  right() {
    return this.x + this.width;
  }
  left() {
    return this.x;
  }
}

const car = {
  img: carImage,
  x: canvas.width / 2,
  y: (3 * canvas.height) / 5,
  speed: 1,
  score: 0,
  moveRight: function () {
    this.x += this.speed;
  },
  moveLeft: function () {
    this.x -= this.speed;
  },
  draw: function () {
    context.drawImage(this.img, this.x, this.y);
  },
  top: function () {
    return this.y + carImage.height;
  },
  bottom: function () {
    return this.y;
  },
  right: function () {
    return this.x + carImage.width;
  },
  left: function () {
    return this.x;
  },
};

const obstaclesList = [];

function updateBackground() {
  road.frames++;
  road.move();
  road.draw();
  car.draw();
  obstaclesRender(road.frames);
  obstaclesList.forEach((obstacle, index) => {
    obstacle.draw();
    obstacle.move();
    if (obstacle.y > canvas.height) {
      obstaclesList.splice(index, 1);
    }
  });
  printScore();
  animationID = requestAnimationFrame(updateBackground);
  checkIfGameOver();
}

function obstaclesRender(frames) {
  if (frames % 120 === 0) {
    obstaclesList.push(new Obstacles());
    car.score++;
  }
}

function checkIfGameOver() {
  let getOffRoad = car.right() > canvas.width || car.left() < 0;
  let crashed = obstaclesList.some((obstacle) => {
    return (
      obstacle.bottom() < car.top() &&
      obstacle.top() > car.bottom() &&
      obstacle.right() > car.left() &&
      obstacle.left() < car.right()
    );
  });
  if (crashed || getOffRoad) {
    window.cancelAnimationFrame(animationID);
    GameOver();
    startButton.disabled = false;
  }
}

function printScore() {
  context.fillStyle = "white";
  context.fillText(
    `Score: ${car.score}`,
    (3 * canvas.width) / 5,
    canvas.height / 12
  );
}

function GameOver() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "red";
  context.textAlign = "center";
  context.font = "90px sans-serif";
  context.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 50);
  context.fillStyle = "black";
  context.font = "50px sans-serif";
  context.fillText(
    `Final Score: ${car.score}`,
    canvas.width / 2 - 15,
    canvas.height / 2
  );
}

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowRight":
      car.moveRight();
      car.speed++;
      break;
    case "ArrowLeft":
      car.moveLeft();
      car.speed++;
      break;
  }
});

document.addEventListener("keyup", (event) => {
  car.speed = 1;
});

function startGame() {
  obstaclesList.splice(0, obstaclesList.length);
  car.frames = 0;
  car.score = 0;
  road.x = 0;
  road.y = 0;
  car.x = canvas.width / 2;
  car.y = (3 * canvas.height) / 5;
  updateBackground();
}

startButton.onclick = () => {
  startGame();
  startButton.disabled = true;
};
