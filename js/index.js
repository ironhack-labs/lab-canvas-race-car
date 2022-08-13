let bg;
let carImg;
let gameStarted = 0;
let player;
let rectangle;
let width;
let height;
let resizeCar = 2;
let obstacles;
let gameSpeed = 5;
let Hits=0;

class Rectangle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw() {
    rect(this.x, this.y, this.w, this.h);
    // console.log(this.x, this.y, this.w, this.h);
  }

  collidesWith(rect2) {
    const collides =
      this.x < rect2.x + rect2.w &&
      this.x + this.w > rect2.x &&
      this.y < rect2.y + rect2.h &&
      this.h + this.y > rect2.y;

    //console.log(collides);
    if(collides) Hits-=1;

    return collides;
  }
}

class Player extends Rectangle {
  constructor(x, y, w, h, img) {
    super(x, y, w, h);
    this.speed = 3;
    this.img = img;
  }

  draw() {
    image(
      this.img,
      this.x,
      this.y,
      this.img.width / resizeCar,
      this.img.height / resizeCar
    );
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      if (this.x > 0) {
        this.x -= this.speed;
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      if (this.x < width - this.img.width / resizeCar) {
        this.x += this.speed;
      }
    }
    this.draw();
  }
}

class Obstacles {
  constructor() {
    this.particles = [];
    this.spawnInterval = setInterval(() => this.spawn(1), 2000);
  }

  stopSpawning() {
    clearInterval(this.spawnInterval);
  }

  spawn(amount) {
    for (let i = 0; i < amount; i++) {
      this.particles.push(
        new Rectangle(
          random(0, width - carImg.width),
          random(0, height - carImg.height),
          random(0, width - carImg.width),
          10
        )
      );
    }
  }

  draw() {
    this.particles = this.particles.filter((particle) => {
      const isColliding = particle.collidesWith(player);
      //score-=5;

      return !isColliding;
    });

    this.particles = this.particles.filter((particle) => particle.y<=height);

    fill("red");
    this.particles.forEach((particle) => {
      particle.y+=gameSpeed;
      particle.draw();
    });
  }
}

function stopGame() {
  noLoop();
}

function preload() {
  bg = loadImage("images/road.png");
  carImg = loadImage("images/car.png");
}

function setup() {
  stopGame();
}

function draw() {
  if (gameStarted === 1) {
    background(bg);
    fill("black");
    textSize(20);
    text(`Hits: ${Hits}`, width /2, 20);

    player.move();
    obstacles.draw();
  }
}

function startGame() {
  //car.png road.png
  if (gameStarted === 0) {
    let canvasDiv = document.getElementById("canvas");
    width = canvasDiv.offsetWidth;
    height = canvasDiv.offsetHeight;
    let sketchCanvas = createCanvas(width, height);
    console.log(sketchCanvas);
    canvasDiv.remove();
    background(bg);
    loop();
    gameStarted = 1;
  }

  player = new Player( width / resizeCar, height - carImg.height / resizeCar - 5, carImg.width / resizeCar - 5, carImg.height / resizeCar, carImg );

  obstacles = new Obstacles();

}

window.onload = () => (document.getElementById("start-button").onclick = () => startGame());
