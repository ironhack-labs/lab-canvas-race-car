let frame = 0;
let ctx;
let x = 230;
// let obsPosition;
// let obsSize;
const obstacles = [];

window.onload = function () {
  document.getElementById('start-button').onclick = function () {
    startGame();
  };


  function startGame() {
    window.addEventListener('keydown', move, false);
    document.getElementById('game-board').innerHTML += '<canvas id="canvas" width="500px" height="600px"></canvas>';
    const board = document.getElementById('canvas');
    ctx = board.getContext('2d');
    setInterval(render, 10);
  }

  function render() {
    frame += 1;
    ctx.clearRect(0, 0, 500, 600);
    drawStreet();
    drawCar();
    createObstacles();
    drawObstacles();
  }
  function drawStreet() {
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 30, 600);
    ctx.fillStyle = 'white';
    ctx.fillRect(40, 0, 10, 600);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.fillRect(470, 0, 30, 600);
    ctx.fillStyle = 'white';
    ctx.fillRect(450, 0, 10, 600);
    ctx.closePath();

    for (let i = 2; i < 600; i += 70) {
      ctx.beginPath();
      ctx.fillStyle = 'white';
      ctx.fillRect(245, i, 10, 50);
      ctx.closePath();
    }
  }

  function drawCar() {
    let car = new Image();
    car.src = 'images/car.png';
    car.onload = function () {
      ctx.drawImage(car, x, 510, 40, 80);
    };
  }

  function Obstacle(posX, sizeX) {
    this.posX = posX;
    this.posY = 0;
    this.sizeX = sizeX;
    this.sizeY = 40;
    this.color = 'red';
  }
  function createObstacles() {
    if (frame % 200 === 0) {
      obsPosition = Math.floor(Math.random() * (350 - 50 + 1)) + 50;
      obsSize = Math.floor(Math.random() * (200 - 120 + 1)) + 120;

      obs = new Obstacle(obsPosition, obsSize);
      obstacles.push(obs);
      console.log(obstacles);
    }
  }

  function drawObstacles() {

    for (let i = 0; i < obstacles.length; i += 1) {
      
      obstacles[i].posY += 1;
      ctx.beginPath();
      ctx.fillStyle = obstacles[i].color;
      ctx.fillRect(obstacles[i].posX, obstacles[i].posY, obstacles[i].sizeX, obstacles[i].sizeY);

    }

  }

  function move(e) {
    switch (e.keyCode) {
      case 37:
        x -= 10;
        console.log('esquerda');
        console.log(e);
        break;

      case 39:
        x += 10;
        console.log('direita');
        break;
    }
  }
};
