let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let frames = 0;
let interval;
let bars = [];

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
  const max = 150;
  const min = 51;
  if (!(frames % 150 === 0)) return;
  const width = Math.floor(Math.random() * canvas.width * 0.3 + 55);
  let xPos = Math.floor(Math.random() * (max - min) + min);
  console.log("PosX: " + xPos, "Width: " + width);
  const bar = new Bar(xPos, width);
  bars.push(bar);
}

function drawBar() {
  bars.forEach(bar => {
    bar.draw();
  });
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
  background.draw();
  car.draw();
  generateBars();
  drawBar();
}

document.getElementById("start-button").onclick = startGame;
