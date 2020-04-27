"use strict";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

function startGame() {
  road.inicialize();
  road.show();
  car.inicialize();
  car.show();
  // Iteration 3: Make the car move right and left
  document.addEventListener("keydown", event => {
    switch (event.key) {
      case "ArrowRight":
        if (car.x < 450) {
          car.x += 40;
          break;
        }

      case "ArrowLeft":
        if (car.x > 30) {
          car.x -= 40;
          break;
        }
    }
  });
  updateGame();
}

// Iteration 1: Draw the game board
const road = {
  image: null,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  rollY: 0,

  inicialize: function() {
    this.image = new Image();
    this.image.src = "/images/road.png";
    this.width = canvas.width;
    this.height = canvas.height;
  },

  show: function() {
    context.drawImage(this.image, this.x, this.rollY, this.width, this.height);
    context.drawImage(
      this.image,
      this.x,
      this.rollY - canvas.height,
      this.width,
      this.height
    );
    this.rollY++;

    if (this.rollY >= canvas.height) {
      this.rollY = 0;
    }
  }
};

// Iteration 2: Draw the car
const car = {
  image: null,
  x: 330,
  y: 550,
  width: 0,
  height: 0,

  inicialize: function() {
    this.imageCar = new Image();
    this.imageCar.src = "/images/car.png";
    this.width = (158 / 319) * this.height;
    this.height = 80 * 1.7;
  },

  show: function() {
    context.drawImage(this.imageCar, this.x, this.y, this.width, this.height);
  }
};

// Iteration 4: Create obstacles
var obstacles = {
  obstacles: [],
  frames: 0,

  createObstacle: function() {
    if (this.frames % 240 == 0) {
      let minWidth = canvas.width / 6;
      let maxWidth = canvas.width / 4;

      let newObstacle = {
        x: 0,
        y: 0,
        width: Math.random() * maxWidth + minWidth,
        height: 50
      };

      newObstacle.x = Math.random() * canvas.width;
      this.obstacles.push(newObstacle);
    }
  },
  //Iteration 5: Move the obstacles
  show: function() {
    this.frames++;
    this.obstacles = this.obstacles.map(obstacle => {
      obstacle.y += 1;
      return obstacle;
    });
    this.obstacles.forEach(obstacle => {
      context.save();
      context.fillStyle = "red";
      context.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      context.restore();
    });
  }
};

//Iteration 6: Points, points, points
var score = {
  points: 0,

  show: function() {
    context.save();
    context.font = "24px Impact";
    context.fillStyle = "white";
    context.fillText(`SCORE: ${this.points}`, 70, 40);
    context.restore();
  },

  addPoints: function() {
    this.points++;
  }
};

// Update the game canvas
function updateGame() {
  if (!checkColision()) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    road.show();
    score.show();
    score.addPoints();
    car.show();
    obstacles.createObstacle();
    obstacles.show();
    requestAnimationFrame(updateGame);
  } else if (checkColision()) {
    gameOver();
  }
}

// Check if the car collides
function checkColision() {
  return obstacles.obstacles.some(obstacle => {
    if (
      obstacle.y + obstacle.height >= car.y &&
      obstacle.y <= car.y + car.height
    ) {
      if (
        obstacle.x + obstacle.width >= car.x &&
        obstacle.x <= car.x + car.width
      ) {
        console.log("colision");
        return true;
      }
    }
    return false;
  });
}

//  Game over and final score
function gameOver() {
  context.save();
  context.fillStyle = "black";
  context.fillRect(0, 0, 500, 700);
  context.restore();

  context.save();
  context.font = "62px Impact";
  context.fillStyle = "red";
  context.textAlign = "center";
  context.fillText("Game Over", canvas.width / 2, canvas.height / 2.5);
  context.restore();

  context.save();
  context.font = "32px Impact";
  context.fillStyle = "white";
  context.textAlign = "center";
  context.fillText(
    `Your score is: ${score.points}`,
    canvas.width / 2,
    canvas.height / 2
  );
  context.restore();
}
