const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

ctx.fillStyle = 'green'
ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height)
ctx.fillStyle = 'gray'
ctx.fillRect(50,0,400,ctx.canvas.height)

// aux var
let frames = 0
let interval = 0
let obstacles = []
const images = {
  background: '',
  car: ".images/car.png"
}

// clases 
class Board {
  constructor(img) {
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.img = new Image()
    this.img.src = img // aquí va el background
    this.img.onload = () => {
      this.draw()
    }
    draw() 
      if (this.y < -canvas.height) this.y = 0
       this.y--
       ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
       ctx.drawImage(this.img, this.x + canvas.height, this.y, this.width, this.height)
  
}
}

class Character {
  constructor(x, y, img) {
    this.x = x
    this.y = y
    this.width = 25
    this.height = 35
    this.img = new Image()
    this.img.src = img
  } 
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  moveRight() {
    if (this.x > canvas.width - this.width - 10) return
    this.x+= 10
  }
  moveLeft() {
    if (this.x > canvas.width - this.width + 10) return
    this.x-= 10
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

class Obstacle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.img = new Image()
    this.img.src = images.obstacle // éste se debe generar random
    this.width = 28
    this.height = 28
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    this.x++
  }
}

// instancias 
const scenario = new Board(images.background)
const car = new Character(10, canvas.height - 90, images.mario)

//funciones auxiliares 
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  frames++
  scenario.draw()
  car.draw()
  checkCollition()
  drawObstacle()
  console.log(frames)
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame() ;
  };

  function startGame() {
    if (interval) return
    interval = setInterval(update, 1000/120)
  }

  function generateObstacles() {
    let rndX = Math.random() * canvas.width - 50
    obstacle.push(new Obstacle(rndX, -100))
  }

  function drawObstacles() {
    if (frames % 500 === 0) {
      generateObstacles()    
    }
    obstacle.forEach(obstacle => {
      obstacle.draw()
    })
  }

  function checkCollition() {
    obstacles.map(obstacle => {
      if (car.isTouching(obstacle)) {
        gameOver()
      }
    })
  }
  
  function gameOver() {
    clearInterval(interval)
    interval = false
  }

  // listeneres

addEventListener('keydown', (e) => {
  if (e.keyCode === 39) {
    car.moveRight()
  } else if(e.keyCode === 37) {
    car.moveLeft()
  } 
})  
};
