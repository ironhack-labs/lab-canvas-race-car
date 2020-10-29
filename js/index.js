const raceCarApp = {
  name: 'race car app',
  description: 'canvas racing',
  version: '1.0.0',
  license: 'Carlos Dávila',
  canvasTag: undefined,
  ctx: undefined,
  frames: 0,
  car: undefined,
  obstaclesArr: [],
  Obstacle1: undefined,
  Obstacle2: undefined,
  Obstacle3: undefined,
  keys: {
    left: 37,
    right: 39
  },
  canvasSize: {
    w: 500,
    h: 700
  },
  init(id) {
    this.canvasTag = document.getElementById(id)
    this.ctx = this.canvasTag.getContext('2d')
    this.createCar()
    this.drawAll()
    this.setEventListeners()
  },

  drawAll() {
    setInterval(() => {
      this.frames++
      this.clearScreen()
      this.frames % 30 === 0 || this.frames === 1 ? this.generateObstable() : null
      console.log(this.obstaclesArr)
      this.createRoad()
      this.car.draw()
      this.obstaclesArr.forEach(elm => {
        elm.draw()
        elm.move()
        if (elm.obsPos.y >= 700) { this.obstaclesArr.shift() }
      })
    }, 30)

  },

  setEventListeners() {
    document.onkeydown = evt => {
      evt.keyCode === this.keys.left ? this.car.move('left') : null
      evt.keyCode === this.keys.right ? this.car.move('right') : null
    }
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },


  createRoad() {
    this.drawRectangles()
    this.drawDashedLines()
  },

  createCar() {
    this.car = new Car(this.ctx, 225, 620, 40, 80, 'car.png')

  },

  generateObstable() {

    if (!this.obstaclesArr.includes(this.Obstacle1)) {
      this.Obstacle1 = new Obstacle(this.ctx)
      this.obstaclesArr.push(this.Obstacle1)
    } else if (!this.obstaclesArr.includes(this.Obstacle2)) {
      this.Obstacle2 = new Obstacle(this.ctx)
      this.obstaclesArr.push(this.Obstacle2)
    } else if (!this.obstaclesArr.includes(this.Obstacle3)) {
      this.Obstacle3 = new Obstacle(this.ctx)
      this.obstaclesArr.push(this.Obstacle3)
    } 


  },

  drawRectangles() {
    this.ctx.fillStyle = 'gray'
    this.ctx.fillRect(0, 0, 500, 700)
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, 30, 700)
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(470, 0, 30, 700)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(40, 0, 15, 700)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(445, 0, 15, 700)


  },

  drawDashedLines() {
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 10
    this.ctx.beginPath()
    this.ctx.setLineDash([40, 40])
    this.ctx.moveTo(245, 5)
    this.ctx.lineTo(245, 700)
    this.ctx.stroke()
  },



}


class Car {

  constructor(ctx, carPosx, carPosy, carWidth, carHeight, carImage) {
    this.ctx = ctx
    this.carPos = {
      x: carPosx,
      y: carPosy
    }
    this.carSize = {
      w: carWidth,
      h: carHeight
    }
    this.imageName = carImage
    this.carInstance = undefined
    this.init()

  }

  init() {
    this.carInstance = new Image()
    this.carInstance.src = `images/${this.imageName}`

  }

  draw() {

    this.ctx.drawImage(this.carInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
  }

  move(dir) {

    if (dir === 'left') {
      this.carPos.x > 60 ? this.carPos.x -= 30 : null
    }
    if (dir === 'right') {
      this.carPos.x < 410 ? this.carPos.x += 30 : null
    }

  }
}

class Obstacle {

  constructor(context) {
    this.ctx = context
    this.obsPos = {
      x: parseInt(Math.random() * (285 - 55 + 1) + 55),
      y: 2
    }

    this.obsSize = {
      w: parseInt(Math.random() * (180 - 120 + 1) + 120),
      h: parseInt(Math.random() * (50 - 30 + 1) + 30)
    }
  }

  draw() {

    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(this.obsPos.x, this.obsPos.y, this.obsSize.w, this.obsSize.h)

  }

  move() {
    this.obsPos.y += 15
  }

}






window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() { raceCarApp.init('canvas') }


};
