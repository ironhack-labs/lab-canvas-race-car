window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    moveCar();
    drawObstacles()

  };

}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let position = 210;
let speedX = 5;

function startGame() {
  drawRoad();
  drawCar();
  drawObstacles();
  setInterval(updateCar, 1000);
  drawObstacles()
  console.log(drawObstacles());
};

function updateCar() {
  ctx.clearRect(0, 0, 500, 700);
  drawRoad();
  drawCar();
  drawObstacles();
}



function drawRoad() {
  ctx.fillStyle = "green";
  ctx.fillRect(25, 25, 450, 650);
  ctx.fillStyle = "gray"
  ctx.fillRect(50, 25, 400, 650);
  ctx.fillStyle = "white";
  ctx.fillRect(75, 25, 10, 650);
  ctx.fillStyle = "white";
  ctx.fillRect(415, 25, 10, 650);

  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.lineWidth = 8;
  ctx.moveTo(250, 25);
  ctx.lineTo(250, 75);
  ctx.moveTo(250, 125);
  ctx.lineTo(250, 175);
  ctx.moveTo(250, 225);
  ctx.lineTo(250, 275);
  ctx.moveTo(250, 325);
  ctx.lineTo(250, 375);
  ctx.moveTo(250, 425);
  ctx.lineTo(250, 475);
  ctx.moveTo(250, 525);
  ctx.lineTo(250, 575);
  ctx.moveTo(250, 625);
  ctx.lineTo(250, 675);
  ctx.stroke();
};

function drawCar() {
  const car = new Image()
  car.onload = () => {
    ctx.drawImage(car, position, 550, 60, 100);
  }
  car.src = "/images/car.png"
};

function moveCar() {
  document.onkeydown = function (movement) {
    switch (movement.key) {
      case 'a': if (position > 80) position -= 10;
        console.log(position);
        break;
      case 'd': if (position < 360) position += 10;
        console.log(position);
        break;
    }
    updateCar();
  }

};
function drawObstacles() {
  let speed1 = 0;
  function redBrick(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  }
  function speed() {
    speed1 = +2
  }
  redBrick(25, speed(), 120, 30, 'red');
  requestAnimationFrame(redBrick)

};
function moveObstacles() {

};
function points() {

};
function gameOver() {

};
