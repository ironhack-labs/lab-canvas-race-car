const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Iteration 1
const backgroundY = 0;
const background = new Image();
background.src = "../images/road.png";
background.onload = function () {
  ctx.drawImage(background, 0, backgroundY, 500, 700);
};

//Iteration 2
const car = new Image();
const carX = 210;
car.src = "../images/car.png";
car.onload = () => {
  ctx.drawImage(car, carX, 520, 80, (80 / car.width) * car.height);
};

//Iteration 3
function updateCanvas() {
  ctx.clearRect(0, 0, 500, 700);
  ctx.drawImage(background, 0, backgroundY, 500, 700);
  ctx.drawImage(car, carX, 520, 80, (80 / car.width) * car.height);
  backgroundY++;
}

document.addEventListener.onkeydown = function (event) {
  // left
  if (event.keyCode === 37) {
    carX -= 10;
  }
  // right
  if (event.keyCode === 39) {
    carX += 10;
  }
  updateCanvas();
};

setInterval(updateCanvas, 1000 / 60);

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {}
};
