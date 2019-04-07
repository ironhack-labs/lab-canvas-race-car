window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  }
}

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const imagenes = {
  img1: "./images/car.png"
}
class Car {
  constructor(img) {
    this.x = canvas.width/2
    this.y = canvas.height - 40
    this.height = 100
    this.width = 80
    this.img = new Image()
    this.img.src = img
    // this.img.onload = () => {
    //   this.draw()
    // }
  }
  draw() {
    console.log('que pedo')
    ctx.drawImage(this.img, this.x, this.y, 30, 30)
  }
  moveRight() {
    if(this.x < canvas.width - 50) this.x += 10
  }
  moveLeft() {
    if(this.x > 0 + 20) this.x -= 10
  }
}

class Board {
  constructor() {
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
  }
  draw() {

    ctx.fillStyle="#008100";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle ="#7f7f7f";
    ctx.fillRect(50, 0, canvas.width - 100, canvas.height);
  
    ctx.beginPath();
    ctx.lineWidth = 8;
    ctx.moveTo(65, 0);
    ctx.lineTo(65, canvas.height);
    ctx.closePath();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.lineWidth = 8;
    ctx.moveTo(canvas.width-65, 0)
    ctx.lineTo(canvas.width-65, canvas.height);
    ctx.closePath();
    ctx.stroke();
  
    ctx.beginPath();
    ctx.strokeStyle ="white";
    ctx.setLineDash([10, 10]);
    ctx.moveTo(150, 0);
    ctx.lineTo(150, 700);
    ctx.stroke();
    ctx.closePath();
  }
}

const newCar = new Car(imagenes.img1)
const board = new Board()
let frames = 0
let interval

// window.onload = function() {
//   document.getElementById("start-button").onclick = function() {
//      startGame();
//    };
// }



const generarObstaculo = (x, y, w, h) => {
randomX = Math.floor(Math.random * canvas.width - 50)
console.log(randomX)
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  board.draw()
  newCar.draw()
  frames++
  console.log(frames)
}
function startGame() {
  if(interval) return
  interval = setInterval(update, 100/60)
  console.log('funcionaaaaaaaaaa')
}
document.addEventListener('keydown', e => {
  e.preventDefault()
  switch (e.keyCode) {
    case 39:
      return newCar.moveRight()
    case 37:
      return newCar.moveLeft()
  }
})

