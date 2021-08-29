const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const car = new Image();
// Connects image to the image file
car.src = "./images/car.png";
const road = new Image();
// Connects image to the image file
road.src = "./images/road.png";
// Ensures that when the road is called by the canvas...
road.onload = function () {
  // It draws the image inside of the canvas
  ctx.drawImage(road, 0, 0, canvas.width, canvas.height);
};

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    const player = new Car(200, 500);
    updateGameArea(player);
    document.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowLeft": // left arrow
          player.moveLeft();
          updateGameArea(player);
          break;
        case "ArrowRight": // right arrow
          player.moveRight();
          updateGameArea(player);
          break;
      }
    });
  };
}

function updateGameArea(player) {
  ctx.clearRect(0, 0, 500, 700);
  drawRoad();
  player.drawCar();
  // requestAnimationFrame(updateGameArea(player));
}

function drawRoad() {
  ctx.drawImage(road, 0, 0, canvas.width, canvas.height);
}

class Car {
  constructor(x, y) {
    this.width = 20;
    this.height = 40;
    this.x = x;
    this.y = y;
    // this.src = img;
  }

  drawCar() {
    ctx.drawImage(car, this.x, this.y, this.width, this.height);
  }
  moveLeft() {
    this.x -= 12;
  }
  moveRight() {
    this.x += 12;
  }
}
