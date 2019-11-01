const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let frames = 0
let interval;

class Board {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width
    this.height = canvas.height
  }
  draw() {
    ctx.fillStyle= "green"
    ctx.fillRect(0, 0, 24, this.height)

    ctx.fillStyle= "grey"
    ctx.fillRect(24, 0, 8, this.height)

    ctx.fillRect(40, 0, 370, this.height)

    ctx.strokeStyle = "white"
    ctx.lineWidth = "5"
    ctx.setLineDash([22, 22, 22, 22])
    ctx.moveTo(225, 0)
    ctx.lineTo(225, this.height)
    ctx.stroke()

    ctx.fillStyle= "grey"
    ctx.fillRect(418, 0, 8, this.height)

    ctx.fillStyle= "green"
    ctx.fillRect(426, 0, 24, this.height)
  }
}

class Car {
  constructor() {
    this.width= 50;
    this.height= 95;
    this.y = 500;
    this.x = 200;
    this.image = new Image()
    this.image.src = "./images/car.png"
  }
  draw() {
    ctx.drawImage(this.image,this.x, this.y, this.width, this.height);
  }
  moveRight() {
    this.x += 25
  }
  moveLeft() {
    this.x -= 25
  }
  isTouching(barra) {
    return (
      this.x < barra.x + barra.width &&
      this.x + this.width > barra.x &&
      this.y < barra.y + barra.height &&
      this.y + this.height > barra.y
    )
  }
}

class Barra {
  constructor(x){
    this.y = 0
    this.x = Math.floor(Math.random()* canvas.width )
    this.width = Math.floor(Math.random() * 200)
    this.height = 15;
  }
  draw() {
    ctx.fillStyle = "#870007"
    if (this.width < 80){
      this.width = 80
    }
    if (this.x > 340){
      this.x = 340
    }
    else if (this.x < 40){
      this.x = 40
    }
    ctx.fillRect(this.x, this.y, this.width, this.height)
    this.y += 6
  }
}

let board = new Board()
let car = new Car()
let barras = []


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    board.draw()
    car.draw()
    interval = setInterval(updateCanvas, 1000 / 60)
  }
};



document.onkeydown = e => {
  switch (e.keyCode) {
    case 37:
      car.moveLeft()
      break;
    case 39:
      car.moveRight()
      break;
  }
  updateCanvas()
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function checkColition() {
  if (car.x <= 0) {
    car.x = car.width;
  } else if (car.x >= canvas.width - car.width ){
    car.x = canvas.width - car.width;
  }
  barras.forEach((barra, i) => {
    if (car.isTouching(barra)){
      barras.splice(i, 1)
      clearInterval(interval)
    }
  });
}

function generateBarras() {
  if (frames % 100 === 0){
    barra = new Barra()
    barras.push(barra)
  }
}

function drawBarras() {
  barras.forEach(barra => barra.draw())
}

function updateCanvas() {
  frames++
  clearCanvas()
  board.draw()
  car.draw()
  generateBarras()
  drawBarras()
  checkColition()
}








