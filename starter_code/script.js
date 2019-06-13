//Sujetar canvas
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')


//VARIABLES AUXILIARES
const images = {
  background: 'images/car.png',
  car: 'http://pluspng.com/img-png/car-png-top-view-png-hatchback-car-top-view-png-clipart-1092.png'
}


//CLASES
class RaceTrack {
  constructor(img) {
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.img = new Image()
    this.img.src = img
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
}

class Car {
  constructor(img) {
    this.x = canvas.width/2 - 40
    this.y = canvas.height - 180
    this.width = 80
    this.height = 140
    this.img = new Image()
    this.img.src = img
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  moveRight(){
    if(this.x > canvas.width - this.width - 30) return
    this.x += 10
  }
  moveLeft(){
    if(this.x < 0 + 30) return
    this.x -= 10
  }
}

//INSTANCIAS DE LAS CLASES
const car = new Car(images.car)


//FUNCIONES
window.onload = function() {

  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  
};

function startGame() {
  setInterval(update, 1000/60)
}

function drawTrack (){
  ctx.fillStyle = 'green'
  ctx.fillRect(0,0, canvas.width, canvas.height)
  ctx.beginPath()
  ctx.strokeStyle = 'white'
  ctx.moveTo(canvas.width/2, canvas.height - 30)
  ctx.lineTo(canvas.width/2, canvas.height - 220)
  ctx.moveTo(canvas.width/2, canvas.height - 270)
  ctx.lineTo(canvas.width/2, canvas.height - 440)
  ctx.moveTo(canvas.width/2, canvas.height - 490)
  ctx.lineTo(canvas.width/2, canvas.height - 660)
  ctx.moveTo(canvas.width/2, canvas.height - 710)
  ctx.lineTo(canvas.width/2, canvas.height - 800)
  ctx.lineWidth = 9
  ctx.stroke()
}

function update() {
  ctx.clearRect(0,0, canvas.width, canvas.height)
  drawTrack()
  car.draw()
}

//EVENTS
addEventListener('keydown', (event) => {
  switch(event.keyCode) {
    case 37:
      car.moveLeft()
      break
    case 39:
      car.moveRight()
  }
})