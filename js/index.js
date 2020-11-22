const cl = (...p) => console.log(...p);
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  function startGame() {
    drawingLoop()
  }
};

const score= 0
const roadImg= new Image();
roadImg.src='../images/road.png'
const road= {
  x:0,
  y:0,
  width: canvas.width,
  height:canvas.height,
};

const carImg = new Image();
carImg.src='../images/car.png'
const car = {
  x: 240,
  y: 600,
  width: 35,
  height: 80,
}

function drawEverything() {
  context.drawImage(roadImg, road.x, road.y, road.width, road.height);

  context.fillStyle = 'white';
  context.font = '20px Arial';
  context.fillText(`Score: ${score}`, 75, 695);

  context.drawImage(carImg, car.x, car.y, car.width, car.height);
}
document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowLeft":
    case "KeyA":
      cl("arrow left");
      if (car.x >= 45) car.x -= 10;
      break;
    case "ArrowRight":
    case "KeyD":
      cl("arrow right");
      if (car.x <= canvas.width - car.width - 45) car.x += 10;
      break;
    default:
      console.log("You can use only arrows and ASDW!");
  }
});
const clearCanvas = () => {
  context.clearRect(0,0, canvas.width, canvas.height);
};

const drawingLoop = () => {
  clearCanvas()
  drawEverything()
  requestAnimationFrame(drawingLoop);
};

