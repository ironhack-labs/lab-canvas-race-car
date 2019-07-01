window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};
let inicio;

function startGame() {
  let logo = document.getElementById("logo-img"),
    startButton = document.getElementById("start-button"),
    arrowImg = document.getElementById("arrows-img"),
    text = document.getElementById("text");

  logo.style.display = "none";
  startButton.style.display = "none";
  arrowImg.style.display = "none";
  text.style.display = "none";

  inicio = setInterval(update, 1000 / 60);
}

const canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d");

canvas.height = 900;
canvas.width = 900;

class Board {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.w = canvas.width;
    this.h = canvas.height;
  }
  draw(){
    ctx.fillStyle = "grey";
    ctx.fillRect (this.x,this.y,this.w,this.h);

    ctx.fillStyle = "green";
    ctx.fillRect(0,0,80,canvas.height);

    ctx.fillStyle = "green";
    ctx.fillRect(820,0,80,canvas.height);

    ctx.fillStyle = "white";
    ctx.fillRect(110,0,20,canvas.height);

    ctx.fillStyle = "white";
    ctx.fillRect(770,0,20,canvas.height);

    ctx.fillStyle = "white";
    ctx.fillRect(440,30,10,50);

    ctx.fillStyle = "white";
    ctx.fillRect(440,150,10,50);

    ctx.fillStyle = "white";
    ctx.fillRect(440,270,10,50);

    ctx.fillStyle = "white";
    ctx.fillRect(440,390,10,50);

    ctx.fillStyle = "white";
    ctx.fillRect(440,510,10,50);

    ctx.fillStyle = "white";
    ctx.fillRect(440,630,10,50);

    ctx.fillStyle = "white";
    ctx.fillRect(440,750,10,50);

    ctx.fillStyle = "white";
    ctx.fillRect(440,870,10,50);
  }
}
class Car {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.img = new Image();
    this.img.src = "./images/car.png";
    this.img.onload = this.draw();
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
  moveRight() {
    if (this.x < canvas.width) this.x += 12;
  }
  moveLeft() {
    if (this.x > 0) this.x -= 12;
  }
  moveUp(){
    if ( this.y > 0) this.y -=12;
  }
  moveDown(){
    if (this.y < canvas.height) this.y +=12;
  }
}
class Obstacles {
  constructor(){

  }
}

let board = new Board(),
  car = new Car(400, 600, 80, 140);

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  board.draw(); 
  car.draw();
}

window.addEventListener("keydown", e => {
  if (e.keyCode === 39) car.moveRight();
  if (e.keyCode === 37) car.moveLeft();
  if (e.keyCode === 38) car.moveUp();
  if (e.keyCode === 40) car.moveDown();
});
