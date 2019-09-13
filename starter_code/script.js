window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  let gameOver = false;

  const canvas = document.querySelector("#canvas");
  canvas.width = 400;
  canvas.height = 500;
  const ctx = canvas.getContext("2d");

  let car = new Image();
  car.src = "./images/car.png";

  let carX = 170;
  let carY = 300;
  let carSpeed = 10;
  let obstacles = [];
  let count = 0;
  let interval;

  class Obstacles {
    constructor() {
      // Valores constantes
      this.height = 5;
      this.y = 0;
      this.startLeft = 60;
      this.endWidth = 340;

      // Comprimento do Gap
      this.gap = 80 + Math.floor(Math.random() * 100);
      
      // Comprimentos das barras
      this.widthRight = 40 + Math.floor(Math.random() * 80);
      this.startRight = 340 - this.widthRight;
      this.widthLeft = 280 - this.gap - this.widthRight;
    }
  }

  function startGame() {
    interval = setInterval(() => {
      drawRoad();
      drawCar();
      updateObstacles();
      count += 1;
  
      if (count % 250 === 0) obstacles.push(new Obstacles());

      if (gameOver) clearInterval(interval);
    }, 10);
  }

  function updateObstacles() {
    ctx.beginPath();
    for (let i = 0; i < obstacles.length; i++) {
      ctx.fillStyle = 'red';
      ctx.fillRect(obstacles[i].startLeft, obstacles[i].y, obstacles[i].widthLeft, obstacles[i].height);
      ctx.fillRect(obstacles[i].startRight, obstacles[i].y, obstacles[i].widthRight, obstacles[i].height);
      obstacles[i].y += 1;
      if (carY === obstacles[i].y && (carX < obstacles[i].widthLeft + 60 || carX > obstacles[i].startRight - 60)) {
        console.log('crash!');
        gameOver = true;
      }
    }
  }

  window.onkeydown = (e) => {
    switch (e.keyCode) {
      case 65: // Esquerda
      case 37:
        if (carX > 60 && !gameOver) carX -= carSpeed;
        break;
      case 68: // Direita
      case 39:
        if (carX < 340 - 60 && !gameOver) carX += carSpeed;
        break;
      // case 87: // Pra cima
      // case 38:
      //   carY -= carSpeed;
      //   break;
      // case 83:
      // case 40:
      //   carY += carSpeed;
      //   break;
    }
  }

  function drawRoad() {

    ctx.clearRect(0, 0, 400, 500);

    // retângulo verde
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.fillStyle = "#3b831e";
    ctx.fillRect(0, 0, 400, 500);

    // retângulo cinza
    ctx.beginPath();
    ctx.fillStyle = "#808080";
    ctx.fillRect(40, 0, 320, 500);

    // linhas brancas
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 10;
    ctx.strokeRect(60, -20, 280, 540);
    ctx.stroke();

    // linha no meio
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.setLineDash([10, 17]);
    ctx.fillStyle = "white";
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 500);
    ctx.stroke();

    car.onload = () => drawCar();
  }

  function drawCar() {
    ctx.drawImage(car, carX, carY, 60, 120);
  }
};

