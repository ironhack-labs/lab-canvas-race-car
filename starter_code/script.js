//Sujetar canvas
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')


//VARIABLES AUXILIARES
const images = {
  background: 'images/car.png',
  car: 'http://pluspng.com/img-png/car-png-top-view-png-hatchback-car-top-view-png-clipart-1092.png'
}
let obsArr = []
let frames = 0
let interval
let points = 0


//CLASES
class Obstacle {
  constructor(x, width) {
    this.x = x
    this.y = -100
    this.width = width
    this.height = 40;
  }
  draw(){
    ctx.fillStyle = "darkred"
    ctx.fillRect(this.x,this.y, this.width, this.height)
    this.y+=3
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
    if(this.x > canvas.width - this.width - 15) return
    this.x += 15
  }
  moveLeft(){
    if(this.x < 0 + 12) return
    this.x -= 15
  }
  isTouching(obstacle) {
    return (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
    )
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
  if(interval) return
  interval = setInterval(update, 1000/100)
}

function drawTrack (){
  ctx.fillStyle = 'grey'
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
  drawObstacles()
  checkCollision()
  checkPoints()
  console.log(" alskjflasjfdljasljdfl ", points)
  frames++
}

function generateObstacles() {
  let rndX = Math.random() * canvas.width - 10
  let rndW = Math.random() * (canvas.width - 300) +20
  obsArr.push(new Obstacle(rndX, rndW))
}

function drawObstacles() {
  if(frames % 200 === 0) {
    generateObstacles()
  }
  obsArr.map(obstacle => {
    obstacle.draw()
  })
}

function checkCollision(){
  obsArr.map(obstacle => {
    if(car.isTouching(obstacle)) {
      gameOver()
    }
  })
}
function checkPoints(){
  obsArr.map(obstacle =>{
    if(obstacle.y > canvas.height){
      points++;
    }
  })
}
function gameOver(){
  clearInterval(interval)
  interval = false
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