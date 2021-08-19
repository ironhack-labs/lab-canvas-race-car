const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let canvasW = 500;


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {
    updateCanvas();

  }
};






/// COCHE ///

let blueCar = {
  x: 215,
  y: 490,

  moveLeft: function () { if (this.x > 60) this.x -= 25 },
  moveRight: function () { if (this.x < 370) this.x += 25 }
}

document.onkeydown = function (e) {
  switch (e.key) {
    case "ArrowRight": blueCar.moveRight(); break;
    case "ArrowLeft": blueCar.moveLeft(); break;
  }
}

//PINTADO DE COCHE//

function drawCar() {
  const carImg = new Image();
  carImg.src = "./../images/car.png";
  carImg.onload = function () {
    ctx.drawImage(carImg, blueCar.x, blueCar.y, 70, 140);
  }

}

//REFRESCO DE CANVAS//

function updateCanvas() {


  setInterval(() => {
    ctx.clearRect(0, 0, 500, 700);
    draw()
    drawCar()
  }, 1000 / 60)
}


//OBSTACULOS//  NO CONSEGUI LLEGAR A NADA   :(

let myObstacles = [];

function drawObstacle() {

  ctx.fillStyle = "blue";
  ctx.fillRect(20, 0, 400, 30);
}

drawObstacle()


//CARRETERA//

function draw() {

  ctx.fillStyle = "#008900";
  ctx.fillRect(0, 0, 500, 700);

  ctx.fillStyle = "grey";
  ctx.fillRect(30, 0, 440, 700);

  ctx.fillStyle = "white";
  ctx.fillRect(40, 0, 12, 700);

  ctx.fillStyle = "white";
  ctx.fillRect(448, 0, 12, 700);

  ctx.strokeStyle = "white";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(250, 0);
  ctx.lineTo(250, 700);
  ctx.setLineDash([25, 25]);
  ctx.stroke();
  ctx.closePath();

}




