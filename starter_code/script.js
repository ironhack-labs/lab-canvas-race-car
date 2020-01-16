const canvas = document.querySelector('canvas')
const canvasCtx = canvas.getContext('2d')
let frames = 0
let interval
let canvasClass
let carClass


class Canvas{
  constructor(){
    this.x = 500,
    this.y = 0
  }

  drawRoad(){
    console.log('lel')
    canvasCtx.fillStyle = 'green'
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height)
    canvasCtx.fillStyle = 'grey'
    canvasCtx.fillRect(40, 0, canvas.width-80, canvas.height)
  }
}

class Car{
  constructor(){
    this.car = new Image(),
    this.car.src = "images/car.png"
  }

  drawCar(){
    canvasCtx.drawImage(this.car, 200, 500, 40, 100)
  }
}


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    canvasClass = new Canvas()
    carClass = new Car()
    canvasClass.drawRoad()
    startGame();
  };
};

function update(){
  frames++
  canvasCtx.clearRect(0, 0, canvas.width, canvas.height)
  canvasClass.drawRoad()
  carClass.drawCar()
  console.log(frames)
}


function startGame() {
  if (interval) return
  interval = setInterval(update, 1000 / 24)
}