const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const carImage = new Image();
// Connects image to the image file
carImage.src = "./images/car.png";
const roadImage = new Image();
// Connects image to the image file
roadImage.src = "./images/road.png";

let car;
let obstacles = [];
let frame;
let animationID;

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    car = new Car();
    frame = 1;
    // assign events to left and right arrow keys
    document.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowLeft": // left arrow
          car.moveLeft();
          break;
        case "ArrowRight": // right arrow
          car.moveRight();
          break;
      }
    }); // end assign events to left and right arrow keys
    updateCanvas()
  };
};

function updateCanvas() {
  ctx.fillStyle = "#870007";
  ctx.clearRect(0, 0, 500, 700);
  ctx.drawImage(roadImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(carImage, car.x, car.y, car.width, car.height);
  if (frame % 140 == 0) {
    // let obstacle = new Obstacle()
    obstacles.push(new Obstacle());
  }
  let collisionDetectedBoolean = false;
  obstacles.forEach((obstacle) => {
    obstacle.moveDown()
    obstacle.checkIfOffscreen()
    if (obstacle.offScreen && obstacle.alreadyCounted === false) {
      car.increaseScore()
      obstacle.updateScore()
    }
    if (obstacle.detectCollision(car)) {
      collisionDetectedBoolean = true
      return
    }
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height)
  });
  console.log(car.score)

  ctx.font = '30px Arial'
  ctx.fillStyle = 'white'
  ctx.fillText('Score: ' + car.score, 70, 50)
  
  if (collisionDetectedBoolean) {
    cancelAnimationFrame(animationID)
    document.getElementById("scoreboard").textContent = car.score
    document.getElementById("game-over").style.display = "block"
    setTimeout(() => {
    window.location.reload()
    },7000);
    
  } else {
    frame++;
    animationID = requestAnimationFrame(updateCanvas)
  }
  // frame = frame + 1
  // frame updates go here
}

class Car {
  constructor() {
    this.score = 0;
    this.width = 50;
    this.height = 100;
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height - this.height - 20;
  }

  moveLeft() {
    this.x -= 15;
  }
  moveRight() {
    this.x += 15;
  }
  increaseScore() {
    this.score += 1;
  }
}

class Obstacle {
  constructor() {
    this.width = Math.max(
      Math.floor(Math.random() * canvas.width * 0.65 * 0.85),
      140
    );
    this.height = 20;
    let tempX =
      Math.floor(Math.random() * (canvas.width * 0.85)) +
      (canvas.width * 0.27) / 2;
    if (this.width + tempX > canvas.width * 0.85) {
      this.x = canvas.width * 0.85 - this.width;
    } else {
      this.x = tempX;
    }
    this.y = 0;
    this.offScreen = false;
    this.alreadyCounted = false;
  }

  checkIfOffscreen() {
    if (this.y > canvas.height) {
      this.offScreen = true;
    }
  }

  updateScore() {
    this.alreadyCounted = true;
  }

  detectCollision(car) {
    if (
      car.x < this.x + this.width &&
      car.x + car.width > this.x &&
      car.y < this.y + this.height &&
      car.y + car.height > this.y
    ) {
      console.log("collision detected");
      return true;
    }
    return false;
  }
  // obstacles move down throughout frame
  moveDown() {
    this.y += 3;
  }
}
