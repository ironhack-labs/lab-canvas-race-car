const $canvas = document.querySelector("canvas");
const context = $canvas.getContext("2d");
let intervalId;
//Car class
class Car {
  constructor(x, y, imageUrl) {
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = imageUrl;
    this.width = 40;
    this.height = 80;
  }
  draw() {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  moveRight() {
    this.x += 5;
  }
  moveLeft() {
    this.x -= 5;
  }
}

//New car
const car = new Car(
  canvas.width / 2 - 20,
  canvas.height - 100,
  "../images/car.png"
);

//Event listener
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 39) {
    car.moveRight();
  } else if (event.keyCode === 37) {
    car.moveLeft();
  }
});

//Window on load
window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    intervalId = setInterval(update, 1000 / 60);
  }
};

//draw Board
function drawBoard() {
  //board background
  context.fillStyle = "gray";
  context.fillRect(0, 0, $canvas.width, $canvas.height);
  //grass
  context.fillStyle = "green";
  context.fillRect(0, 0, 20, $canvas.height);
  context.fillRect($canvas.width - 20, 0, 20, $canvas.height);
  //outside white lines
  context.fillStyle = "white";
  context.fillRect(25, 0, 10, $canvas.height);
  context.fillRect($canvas.width - 35, 0, 10, $canvas.height);
  //white stripes
  for (let i = 0; i < 20; i++) {
    context.fillRect($canvas.width / 2 - 3, i * 35, 6, 20);
  }
  //draw car
  car.draw();
}

//clear canvas

function clearCanvas() {
  context.clearRect(0, 0, $canvas.width, $canvas.height);
}

//update function
function update() {
  clearCanvas();
  drawBoard();
}
