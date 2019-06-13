
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let frames = 0
let blocks = []
let interval 
let score = 0

class Car {
  constructor(x, y, img) {
    this.x = x
    this.y = y
    this.width = 35
    this.height = 75
    this.img = new Image()
    this.img.src = img
  } 
  draw() {
    ctx.drawImage( this.img ,this.x, this.y, this.width, this.height)

  }
  moveRight() {
    if (this.x > 245) return
    this.x+= 10
  }
  moveLeft() {
    if (this.x < 70) return
    this.x -= 10
  }
  isTouching(block) {
    return (
      this.x < block.x + block.width &&
      this.x + this.width > block.x &&
      this.y < block.y + block.height &&
      this.y + this.height > block.y
    ) 
  }
}

class Block {
  constructor(x, y, width) {
    this.width = width
    this.height = 20;
    this.x = x
    this.y = y
    
  }
  draw() {
    ctx.fillStyle = "brown"
    ctx.fillRect(this.x, this.y, this.width, this.height)
    this.y++
    if( this.y === canvas.height + 1){
      score++
    }
  }
}

function generateBlocks() {
  let width = Math.random() * (95 - 40)+  40
  let rndX = Math.random() * ((280-width) - 70) + 70
  blocks.push(new Block(rndX, -20, width))
  
}

function drawBlock() {
  if (frames % 300 === 0) {
    
    generateBlocks()    
  }
  
  blocks.forEach(blocks => {
    blocks.draw()
  })
}
//objects
const car = new Car(135, 425, "./images/car.png")



function drawRoad(){
  ctx.fillStyle = "green"
  ctx.fillRect(0,0, canvas.width, canvas.height)
  ctx.fillStyle ="gray"
  ctx.fillRect(50 ,0 , canvas.width - 100, canvas.height)
  ctx.fillStyle ="white"
  ctx.fillRect(60 ,0 , 10, canvas.height)
  ctx.fillStyle ="white"
  ctx.fillRect(280 ,0 , 10, canvas.height)
  ctx.beginPath()
  ctx.strokeStyle = "white"
  ctx.lineWidth = 5
  ctx.setLineDash([15, 15]);
  ctx.moveTo(175, 10)
  ctx.lineTo(175, 500)
  ctx.stroke()

}
drawRoad()



function update(){
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawRoad()
  car.draw()
  drawBlock()
  checkCollition()
  ctx.fillStyle= "black"
  ctx.font = "20px Arial"
  ctx.fillText(`Score: ${score}`, 150, 20,)
  frames++
}
function checkCollition() {
  blocks.map(block => {
    if (car.isTouching(block)) {
      gameOver()
    }
  })
}
function gameOver() {
  clearInterval(interval)
  interval = false
}


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    if (interval) return
    interval = setInterval(update, 1000/120)
  }
};

addEventListener('keydown', (e) => {
   if(e.keyCode === 39) {
    car.moveRight()
  } else if(e.keyCode === 37){
    car.moveLeft()
  }
})