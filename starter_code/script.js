let interval 

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame()
  }
}

let canvas = document.getElementById('mcanva')
console.log(canvas)
const ctx = canvas.getContext('2d')


let frames = 0
let images = {
  car: "../starter_code/images/car.png"
}
let friction = .8
let keys = {}

// Main Functions

function startGame() {
    // ctx.fillRect(800,0,100,100)
    // if (interval) return 
    interval = setInterval(update, 60/1000)
  }

  function update () {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    theRoad.draw()
    theRightGrass.draw()
    theLeftGrass.draw()
    theCar.draw()
  }

  function gameOver () {

  }

// Variables



// Classes

  class Road {
    constructor () {
      this.x = 600
      this.y = 0
      this.width = canvas.width
      this.height = canvas.height
      draw = () => {
        ctx.fillStyle = "grey"
        ctx.fillRect(this.x, this.y, this.width, this.height)
      }
    }
  }

  class GrassLeft extends Road {
    constructor () {
      super()
      this.width = 40
      draw = () => {
        ctx.fillStyle = "darkgreen"
        ctx.fillRect(this.x, this.y, this.width, this.height)
      }
    }
  }

  class GrassRight extends Road {
    constructor () {
      super()
      this.x = 1200
      this.width = 40
      this.height = canvas.height
      draw = () => {
        ctx.fillStyle = "darkgreen"
        ctx.fillRect(this.x, this.y, this.width, this.height)
      }
    }
  }

  class Car {
    constructor () {
      this.x = 850
      this.y = 650
      this.width = 60
      this.height = 180
      this.image = new Image()
      this.image.src = images.car
      this.image.onload = this.draw
      draw = () => {
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
      }
    }
  }

  // Instances

  let theRoad = new Road
  let theRightGrass = new GrassRight
  let theLeftGrass = new GrassLeft
  let theCar = new Car

  // Listeners


  // Actions
