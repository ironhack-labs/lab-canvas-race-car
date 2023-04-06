const startScreem = document.querySelector(".game-intro");
const canvas = document.querySelector("#canvas");

const ctx = canvas.getContext("2d");

// background stuff
const bgImg = new Image();
bgImg.src = "../images/road.png";

const drawRoad = () => {
  ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
};

// car stuff
const car = new Image();
car.src = "../images/car.png";

let isMovingRigth = false;
let isMovingLeft = false;
let carSpeed = 2;
const carWidth = 50;
const carHeight = 100;

let carX = canvas.width / 2 - car.width / 2;
// upgrade it to the car not goes out of the road

const drawCar = () => {
  ctx.drawImage(car, carX, 570, carWidth, carHeight);
};

// obstacles stuff - I didn't finish it
let obstY = 20;
let obstX = 0;
let obstWidth = 200;

const drawObstacles = () => {
  ctx.beginPath();
  ctx.fillStyle = "orange";
  ctx.rect(obstX, obstY, obstWidth, 30);
  ctx.fill();
  ctx.closePath();
};

//
let animateId;
let isGameOver = false;

window.onload = () => {
  // hide the canvas until start the game
  canvas.style.display = "none";
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

// functions
function startGame() {
  startScreem.style.display = "none";
  canvas.style.display = "block";

  animate();
}

// I didn't finish it
const callObst = () => {
  drawObstacles();
  obstY += 2;
  if (obstY === 150) {
    console.log(obstY);
    // obstX += 30;
    // obstWidth -= 10;
    callObst();
  }
};

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRoad();
  drawCar();
  //callObst();

  // Right/Left boundaries
  if (isMovingLeft && carX > 0) {
    carX -= carSpeed;
  } else if (isMovingRigth && carX <= canvas.width - carWidth) {
    carX += carSpeed;
  }

  // recursive function
  if (isGameOver) {
    cancelAnimationFrame(animateId);
  } else {
    animateId = requestAnimationFrame(animate);
  }
};

// Event listeners: keyboard/moving car
document.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === "ArrowRight") {
    isMovingRigth = true;
  }
  if (event.key === "ArrowLeft") {
    isMovingLeft = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowRight") {
    isMovingRigth = false;
  }
  if (event.key === "ArrowLeft") {
    isMovingLeft = false;
  }
});
