const canvas = document.getElementById('fondo')
const ctx = canvas.getContext('2d')
let interval
let frames = 0
let obstacles = []

const images = {
  cochecito: 'images/car.png'
}

class Fondo{
  constructor(x,y){
    this.x = 0
    this.y = 0
  }
  draw(){
    ctx.beginPath()
    ctx.fillStyle = "green"
    ctx.fillRect(0,0, 50, canvas.height)
    ctx.moveTo(canvas.width - 50, 0)
    ctx.fillRect(canvas.width - 50,0,50, canvas.height)
    ctx.stroke()
    ctx.closePath()
    //muro de contencion
    ctx.beginPath()
    ctx.moveTo(50,0)
    ctx.fillStyle = "gray"
    ctx.fillRect(50,0,15, canvas.height)
    ctx.moveTo(canvas.width - 65,0)
    ctx.fillRect(canvas.width -65,0,15,canvas.height)
    ctx.stroke()
    ctx.closePath()
    //lineas carretera orilla
    ctx.beginPath()
    ctx.moveTo(65,0)
    ctx.fillStyle = "white"
    ctx.fillRect(65,0,10, canvas.height)
    ctx.moveTo(canvas.width - 75,0)
    ctx.fillRect(canvas.width - 75,0,10,canvas.height)
    ctx.stroke()
    ctx.closePath()
    //asfalto
    ctx.beginPath()
    ctx.moveTo(75,0)
    ctx.fillStyle = "gray"
    ctx.fillRect(75,0,350, canvas.height)
    ctx.stroke()
    ctx.closePath()
    
    //lineas
    ctx.beginPath()
    ctx.moveTo(247.5,10)
    ctx.fillStyle = "white"
    ctx.fillRect(247.5,10,5,75)
    ctx.fillRect(247.5,125,5,75)
    ctx.fillRect(247.5,240,5,75)
    ctx.fillRect(247.5,355,5,75)
    ctx.fillRect(247.5,470,5,75)
    ctx.fillRect(247.5,585,5,75)
    ctx.stroke()
    ctx.closePath()
  }
  
}


class Coche{
  constructor(x, y, img){
    this.x = x
    this.y = y
    this.width =30
    this.height = 60
    this.img = new Image()
    this.img.src = img
    //clearRect(0,0, this.width, this.height)
  }
  draw(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  moveRigth(){
    if(this.x < canvas.width - this.width - 80){ 
    return this.x+=10
    }
  }
  moveLeft(){
      if(this.x > canvas.width -  this.width - 390){ 
      return this.x-=10
      }
    }
    isTouching(obstacle){
      return(
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
      )
    }
  }
  class Obstacles{
    constructor (x,y){
      this.x =x
      this.y =y
      this.width=100
      this.height=50
      
    }
    draw(){
      ctx.beginPath()
      ctx.fillStyle='orange'
      ctx.fillRect(this.x,this.y, this.width, this.height)
      ctx.stroke()
      ctx.closePath()
      this.y++
     }
  }

//instancias
const carrito = new Coche(235, canvas.height - 100, images.cochecito)
const obstacle = new Obstacles(0,0)
const fondo = new Fondo()

//funciones
function update (){
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  frames++
  fondo.draw()
  carrito.draw()
  checkCollition()
  drawObstacles()
  
  
}

function generateObs(){
  let rndX = Math.random() * canvas.width + 80
  if (rndX < canvas.width - 150){
    obstacles.push(new Obstacles(rndX,0))
  }
  
}

function drawObstacles(){
  if(frames % 200 === 0){
    generateObs()
  }
  obstacles.map(obstacle=> {
    obstacle.draw()
  })
}
function gameOver() {
  clearInterval(interval)
  interval = false
}
function checkCollition() {
  obstacles.map(obstacle => {
    if (carrito.isTouching(obstacle)) {
      gameOver()
    }
  })
}



//listeners
addEventListener('keydown', (e) => {
  if (e.keyCode === 39){
    carrito.moveRigth()
  }else if(e.keyCode === 37){
    carrito.moveLeft()
  }
})


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };


  function startGame() {
    if (interval)return
    interval = setInterval(update, 1000/240)
  }

  
};
