// window.onload = () => {
//   document.getElementById('start-button').onclick = () => {
//     juego.inicio();
//   };

//   function startGame() {
//   }
// };

const $canvas = document.querySelector("canvas")
const ctx = $canvas.getContext("2d")

//Board
ctx.fillStyle = "green"
ctx.fillRect(0, 0, $canvas.width, $canvas.height)
ctx.fillStyle = "gray"
ctx.fillRect(50, 0, 400, $canvas.height)
ctx.fillStyle = "white"
ctx.fillRect(60, 0, 8, $canvas.height)
ctx.fillRect($canvas.width-68, 0, 8, $canvas.height)
ctx.beginPath()
ctx.moveTo($canvas.width/2, 0)
ctx.strokeStyle = "white"
ctx.lineWidth = 4
ctx.setLineDash([10,10])
ctx.lineTo($canvas.width/2, $canvas.height)
ctx.stroke()
ctx.closePath()

let intervalId ,
  frames = 0,
  obstaculos = []
  score = 0

const carImg = new Image()
carImg.src = "./images/car.png"
  
// carImg.onload = () =>{
// ctx.drawImage(carImg, 70, 70, 50, 100)}

class Carrito {
  constructor(){
  this.x = $canvas.width / 2
  this.y = $canvas.height - 180
  this.width =  50
  this.height = 100
  this.speedX = 0
}
  drawCarrito(){
    ctx.drawImage(carImg, this.x, this.y, this.width, this.height)
  }

  nuevaPos(){
    if (this.x >= 50){
    this.x += this.speedX
      }    
    else {
      this.x = 50
    }
  if (this.x >= 400){
    this.x = 400
  }

  }
}

class Obstaculo {
  constructor(x, width){
  this.color = "red"
  this.height = 10
  this.x = x
  this.y = 0
  this.width = width
}
  
  draw(){
    ctx.fillStyle = this.color
    this.y++
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

const carrito = new Carrito(0, 0, 50, 100)
const obstaculoPrueba = new Obstaculo

function update(){
  frames ++
  clearCanvas()
  generateObstacles()
  printScore()
  carrito.drawCarrito()
  carrito.nuevaPos()
  drawObstacles()
}

function clearCanvas(){
ctx.fillStyle = "green"
ctx.fillRect(0, 0, $canvas.width, $canvas.height)
ctx.fillStyle = "gray"
ctx.fillRect(50, 0, 400, $canvas.height)
ctx.fillStyle = "white"
ctx.fillRect(60, 0, 8, $canvas.height)
ctx.fillRect($canvas.width-68, 0, 8, $canvas.height)
ctx.beginPath()
ctx.moveTo($canvas.width/2, 0)
ctx.strokeStyle = "white"
ctx.lineWidth = 4
ctx.setLineDash([10,10])
ctx.lineTo($canvas.width/2, $canvas.height)
ctx.stroke()
ctx.closePath()
}



function generateObstacles(){
  if (frames % 200 === 0){
    // for (let i = 0; i < obstaculos.length; i++){ 
    //   obstaculos[i].draw()
    // }
    let maxWidth = 250
    let minWidth = 100
    let randomWidth = Math.floor(
      Math.random() * (maxWidth - minWidth) + minWidth
    )
    
    obstaculos.push(new Obstaculo(randomWidth, randomWidth))
  }
  
  // if (frames % 240 === 0){

  //   let maxWidth = 320
  //   let minWidth = 100
  //   let randomWidth = Math.floor(
  //     Math.random() * (maxWidth - minWidth) + minWidth
  //   )
    
  //   obstaculos.push(new Obstaculo($canvas.width - 300, randomWidth))
  // }
}

function drawObstacles(){
  obstaculos.forEach((obstacles, i)=> {
    obstacles.draw()
    if (obstacles.y > $canvas.height){
      obstaculos.splice(i, 1)
    }
    
  });
}

function printScore() {
  ctx.font = "20px Sans-serif"
  if (frames % 100 === 0) score++
  ctx.fillText(`Score: ${score}`, 270, 30)
}


document.addEventListener("keydown", e => {
  switch (e.keyCode) {
    case 37: 
      carrito.speedX -= 1
      break
    case 39:
      carrito.speedX += 1
      break
  }
})

document.addEventListener("keyup", e =>{
  carrito.speedX = 0
})

intervalId = setInterval(update, 1000 / 60)