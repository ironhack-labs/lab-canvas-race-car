const car = new Image();
car.src = "./images/car.png"

var myObstacles = [];

canvas = document.getElementById("road");
contex = canvas.getContext("2d");  

class board {
  constructor() {
    this.ctx = contex;
    this.frames = 0;
  }

  createBoard() {
    canvas.width = 600;
    canvas.height = 800;
    this.ctx.fillStyle = "rgb(64, 130, 6)";
    this.ctx.fillRect(0, 0, 600, 800);
    this.ctx.fillStyle = "rgb(128, 128, 128)";
    this.ctx.fillRect(50, 0, 500, 800);
    this.ctx.beginPath();
    this.ctx.moveTo(80, 0)
    this.ctx.lineTo(80, 800);
    this.ctx.lineWidth = 10;
    this.ctx.strokeStyle = "white";
    this.ctx.stroke()
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.moveTo(520, 0)
    this.ctx.lineTo(520, 800);
    this.ctx.lineWidth = 10;
    this.ctx.strokeStyle = "white";
    this.ctx.stroke()
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.moveTo(300, 0)
    this.ctx.lineTo(300, 800);
    this.ctx.lineWidth = 10;
    this.ctx.strokeStyle = "white";
    this.ctx.setLineDash([50, 25]);
    this.ctx.stroke()
    this.ctx.closePath();
  }
  clear() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
};


class carDraw {
  constructor() {
    this.ctx = contex;
    this.x = 275;
    this.y = 700;
  }

  drawCar() {
    this.ctx.drawImage(car, this.x, this.y, 50, 100);
  }

  goLeft() {
    this.x -= 30;
  }

  goRight() {
    this.x += 30;
  }

  update() {
    this.ctx.drawImage(car, this.x, this.y, 50, 100);
  }

  right() {
    return this.x + this.width;
  }

  bottom(){
    return this.y + this.height;
  }

  crashWith(obstacle) {    
    return !(
      this.y > (obstacle.y + obstacle.height)||
      this.right() < obstacle.x ||
      this.x > obstacle.right() ||
      this.bottom() < obstacle.top()
  );
  }
};

class obstacle {
  constructor(x, y, width, height) {
    this.ctx = contex;
    this.height = height;
    this.y = y;
    this.width = width;
    this.x = x;
    // this.ctx.fillStyle = "rgb(137, 36, 3)";
    // this.ctx.fillRect(this.x, 0, this.width, this.height);
  }

    updateObstacle() {

    this.ctx.fillStyle = "rgb(137, 36, 3)";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  right(){
    return this.x + this.width;
  }
  
  top(){
    return this.y
  }

}

let teste = new board();
let carro = new carDraw();

document.onkeydown = function (e) {
  switch (e.keyCode) {   
    case 37: // left arrow
      carro.goLeft();    
      break;
    case 39: // right arrow
      carro.goRight();
      break;
  }
};

function update() {
  teste.frames += 1;
  if (teste.frames % 30 === 0) {
    let widthMin = 100;
    let widthMax = 350;
    let xMin = 50;
    let xMax = 150
    let width = Math.floor(
      Math.random() * (widthMax - widthMin + 1) + widthMin);
    let x = Math.floor(
      Math.random() * (xMax - xMin + 1) + xMin);
    myObstacles.push(new obstacle(x, 0, width, 20));
  }

  for (i = 0; i < myObstacles.length; i++) {      
    myObstacles[i].y += 10;
    myObstacles[i].updateObstacle();

    if (myObstacles[i].y > 800) {
      myObstacles.shift();
  }
  }
}
  

function updateTudo() {
  teste.clear();
  teste.createBoard();
  carro.update();
  update();
  checkGameOver()
}


window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };
};

function startGame() {
  teste.clear();
  teste.createBoard();
  carro.drawCar();
  let stop = setInterval(updateTudo, 20);
}

function checkGameOver() {
  var crashed = myObstacles.some(function(obstacle) {
    return carro.crashWith(obstacle);
  });

  if (crashed) {
    clearInterval(startGame());
  }
}