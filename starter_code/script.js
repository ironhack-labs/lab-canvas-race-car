window.onload = function() {

  const canvas = document.querySelector('.canvas')
  const ctx = canvas.getContext('2d')
  let frames = 0
  let interval
  const imagenes = {
    img1: './images/car.png',
    img2: './images/obstacles.png'
  }

  class Board {
    constructor() {
      this.y = 0
      this.draw()
    }
    draw() {
      this.y++
      ctx.clearRect(0, 0, 300, 500)
      ctx.fillStyle = "gray";
      ctx.fillRect(20, 0, 260, 500)
  
      ctx.fillStyle = "green";
      ctx.fillRect(0, 0, 20, 500)
  
      ctx.fillStyle = "green";
      ctx.fillRect(280, 0, 20, 500)
  
      ctx.fillStyle = "white";
      ctx.fillRect(25, 0, 5, 500)
  
      ctx.fillStyle = "white";
      ctx.fillRect(270, 0, 5, 500)
  
      for (let i = 0; i < 17; i++) {
        ctx.beginPath()
        ctx.lineWidth = 5
        ctx.strokeStyle = "white";
        ctx.moveTo(150, i * 30 + 21 + this.y)
        ctx.lineTo(150, i * 30 + 40 + this.y)
        ctx.stroke()
        ctx.closePath()
      }
  
      for (let i = 0; i < 16; i++) {
        ctx.beginPath()
        ctx.lineWidth = 5
        ctx.strokeStyle = "white";
        ctx.moveTo(150, i * 30 + 21 - 500 + this.y)
        ctx.lineTo(150, i * 30 + 40 - 500 + this.y)
        ctx.stroke()
        ctx.closePath()
      }
      if (this.y > 500) this.y = 0
    }
  }

/*
  class Board {
  constructor(img) {
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
  }
  draw() {
    }
  }


    // Canvas

    ctx.fillStyle = "#808080";
    ctx.fillRect(20, 0, 260, 150);

    ctx.strokeStyle = '#fff'
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(30, 0);
    ctx.lineTo(30, 150);
    ctx.stroke();

    ctx.strokeStyle = '#fff'
    ctx.beginPath();
    ctx.moveTo(270, 0);
    ctx.lineTo(270, 150);
    ctx.stroke();

    ctx.strokeStyle = '#fff'
    ctx.setLineDash([10, 15]);
    ctx.beginPath();
    ctx.moveTo(150, 0);
    ctx.lineTo(150, 150);
    ctx.stroke();
    */

class Carrito {
  constructor(x, y, img) {
    this.x = x
    this.y = y
    this.img = new Image()
    this.img.src = img
    // this.img.onload = () => {
    //   this.draw()
    // }
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 40, 20)

  }
  moveRight() {
    if(this.x > 210){
      this.x = 210
    }
    this.x+=10
    
  }
  moveLeft() {
    if(this.x < 40){
      this.x = 40
    }
    this.x-=10
  }
  moveUp() {
    this.y-=10
  }
  moveDown() {
    this.y+=10
  }
}

class Obstaculos {
  constructor(x, y, img) {
    this.x = x
    this.y = y
    this.img = new Image()
    this.img.src = img
    // this.img.onload = () => {
    //   this.draw()
    // }
  }
  draw() {
    if(this.y > canvas.height){
      this.y = -100
    }
    this.y++
    ctx.drawImage(this.img, this.x, this.y, 100, 20)

  }
}

let board = new Board();
let carrito = new Carrito(100, 100, imagenes.img1);
let obstaculos = new Obstaculos(50,0, imagenes.img2);
let obstaculos2 = new Obstaculos(100,200, imagenes.img2);

document.getElementById("start-button").onclick = function() {
  startGame();
};

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  board.draw()
  carrito.draw()
  obstaculos.draw()
  obstaculos2.draw()
  frames++
}

function startGame() {
  if (interval) return
  interval = setInterval(update, 1000/60)
}

addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 32: 
      startGame() 
      break 
    case 37: 
      carrito.moveLeft()
      break 
    case 39:
      carrito.moveRight()
      break
    case 38:
      carrito.moveUp()
      break
    case 40:
      carrito.moveDown()
      break
  }
})
}
