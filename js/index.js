window.onload = () => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  startGame();
};

const road = {
  x: 0,
  y: 0,
  image: new Image(),
  draw() {
    context.drawImage(
      this.image,
      this.x,
      this.y,
      this.image.width * 2,
      this.image.height * 2
    );
  },
};

const car = {
  x: 180,
  y: 400,
  image: new Image(),
  draw() {
    context.drawImage(
      this.image,
      this.x,
      canvas.height - this.image.height / 2 - 10,
      this.image.width / 2,
      this.image.height / 2
    );
  },
  move(direction) {
    if (direction === "left") {
      console.log("CAR MOVING LEFT!!!!");
      this.x -= 15;
    } else if (direction === "right") {
      this.x += 15;
    }
    refreshDrawings();
  },
};

const obstacles = [];

class Obstacle {
  // 1. obstacle class
  constructor() {
    this.y = 0;
    this.height = 40;
    this.x = Math.random() * canvas.width;
    this.width = Math.random() * canvas.width * 0.6;
  }
  draw() {
    context.fillStyle = "brown";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
  move(distance) {
    this.y += distance;
  }
}
// 2. run it on a loop with setInterval
function refreshDrawings() {
  clearCanvas();
  road.draw();
  obstacles.forEach((obstacle) => obstacle.draw());
  car.draw();
}

road.image.src = "./images/road.png";
car.image.src = "./images/car.png";

function handleKeydown(event) {
  console.log("key down", event.key);
  // filter the keydown events, and call callbacks
  switch (event.key) {
    case " ":
      console.log("SPACE DOWN");
      break;
    case "ArrowLeft":
      car.move("left");
      break;
    case "ArrowRight":
      car.move("right");
      break;
  }
}

let iterationCount = 0;

function manageObstacles() {
  obstacles.forEach((obstacle) => {
    obstacle.move(5);
  });
  iterationCount++;

  if (iterationCount % 50 === 0) {
    if (Math.random() < 0.8) {
      obstacles.push(new Obstacle());
    }
  }
  refreshDrawings();
}

function startGame() {
  canvas.width = road.image.width * 2;
  canvas.height = road.image.height * 2;

  setInterval(manageObstacles, 25);

  function startGame() {}
}
refreshDrawings();
document.addEventListener("keydown", handleKeydown);

// // Last iteration - not finished
// function countPoints() {
//   const score = 0;
//   if () {
//     score++
//   }
// }
