let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let frames = 0;
let interval;
let bar;
let bars = [];
let barSideController = 0;
let score = 0;
let flagGameOver = 0;

function startGame() {
  // canvas = document.getElementById("canvas");
  // ctx = canvas.getContext("2d");
  // background.draw();
  interval = setInterval(update, 1000 / 60);
}

class Car {
  constructor() {
    this.x = 156;
    this.y = canvas.height - 105;
    this.width = 60;
    this.height = 100;
    this.image = new Image();
    this.image.src = "./images/car.png";
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  collision(item) {
    return (
      this.x < item.x + item.width &&
      this.x + this.width > item.x &&
      this.y < item.y + item.height &&
      this.y + this.height > item.y
    );
  }
}

class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.image = new Image();
    this.image.src = "./images/road.png";
  }

  draw() {
    // restamos en y para moverlo
    this.y++;
    // console.log(this.y, canvas.height);
    // en caso de alcanzar el final de la imagen reseteamos y
    if (this.y > canvas.height) this.y = 0;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    // dibujamos una segunda imagen al final de la primera
    ctx.drawImage(
      this.image,
      this.x,
      this.y - canvas.height,
      this.width,
      this.height
    );
  }
}

class Bar {
  constructor(x, width) {
    this.y = 0;
    this.x = x;
    this.width = width;
    this.height = 26;
    this.image = new Image();
    this.image.src = "./images/bar.png";
  }

  draw() {
    this.y++;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

function generateBars() {
  const maxPos = 110;
  const minPos = 51;
  const maxWitdth = 158;
  const minWitdth = 48;
  if (!(frames % 200 === 0)) return;
  let width = Math.floor(Math.random() * (maxWitdth - minWitdth) + minWitdth);
  let xPos = Math.floor(Math.random() * (maxPos - minPos) + minPos);
  if (barSideController == 0) {
    bar = new Bar(xPos, width);
    barSideController = 1;
  } else {
    xPos = 275 - xPos;
    bar = new Bar(xPos, width);
    barSideController = 0;
  }
  console.log("PosX: " + xPos, "Width: " + width, "side: " + barSideController);

  bars.push(bar);
}

function drawBar() {
  bars.forEach(bar => {
    if (bar.y + bar.height > canvas.height) {
      score += 1;
      console.log("Your score: " + score);
      bars.splice(0, 1);
    }
    bar.draw();
    if (car.collision(bar)) gameOver();
  });
}

function gameOver() {
  flagGameOver = 1;
  clearInterval(interval);
  ctx.font = "30px Arial";
  ctx.fillText("Game Over!", 120, 250);
}

document.onkeydown = function(e) {
  if (e.keyCode === 37 && car.x > 51) {
    car.x -= 11;
    console.log(car.x);
  }
  if (e.keyCode === 39 && car.x < 269) {
    car.x += 11;
    console.log(car.x);
  }
};

let background = new Background();
let car = new Car();
function update() {
  frames++;
  ctx.font = "15px Arial";
  background.draw();
  car.draw();
  generateBars();
  drawBar();

  if (flagGameOver == 0) ctx.fillText("Score: " + score, 310, 50);
  else ctx.fillText("Final Score: " + score, 110, 285);
}

document.getElementById("start-button").onclick = startGame;
