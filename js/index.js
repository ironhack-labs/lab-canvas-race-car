window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() { }
};

const drawingRoad = {
  name: 'HTML5 Race Game',
  description: 'App for Canvas basic forms',
  author: 'David',
  license: undefined,
  canvasDOM: undefined,
  ctx: undefined,
  canvasSize: { w: undefined, h: undefined },
  car: undefined,
  obstacles: [],

  init() {
    this.canvasDOM = document.querySelector('#canvas')
    this.ctx = this.canvasDOM.getContext('2d')
    this.setCanvasSize()
    this.createCar()
    this.drawObstacles()
    this.setListeners()
    this.drawAll()
  },

  setCanvasSize() {
    this.canvasSize = {
      w: 500,
      h: 700
    }
    this.canvasDOM.setAttribute('width', this.canvasSize.w)
    this.canvasDOM.setAttribute('height', this.canvasSize.h)
  },

  createCar() {
    this.car = new Car(this.ctx)
  },
  drawAll() {
    setInterval(() => {
      this.clearScreen()
      this.drawRoad()
      this.drawObstacles()

      this.car.draw()
    }, 50)
  },
  setListeners() {
    document.onkeyup = e => {
      e.key === 'ArrowLeft' ? this.car.moveLeft() : null
      e.key === 'ArrowRight' ? this.car.moveRight() : null
    }
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },

  drawRoad() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, 500, 700)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(10, 0, 477, 700)
    this.ctx.strokeStyle = 'white'      // color de borde
    this.ctx.lineWidth = 10
    this.ctx.strokeRect(15, 0, 0, 700)
    this.ctx.strokeStyle = 'white'      // color de borde
    this.ctx.lineWidth = 10
    this.ctx.strokeRect(480, 0, 0, 700)
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 10
    this.ctx.beginPath();
    this.ctx.setLineDash([25, 50]);
    this.ctx.moveTo(this.canvasSize.w / 2 - 10, 0)
    this.ctx.lineTo(this.canvasSize.w / 2 - 10, 700)
    this.ctx.stroke();

  },

  drawObstacles() {
    this.ctx.fillStyle = 'brown'
    this.ctx.fillRect(17, 400, 150, 30)
    this.ctx.fillStyle = 'brown'
    this.ctx.fillRect(200, 600, 260, 30)
    this.ctx.fillStyle = 'brown'
    this.ctx.fillRect(17, 200, 260, 30)
    this.ctx.fillStyle = 'brown'
    this.ctx.fillRect(120, 30, 150, 30)
  },
}

class Car {

  constructor(ctx) {
    this.ctx = ctx
    this.init()

    this.carPos = { x: 100, y: 100 }
    this.carSize = { w: 100, h: 100 }
  }

  init() {
    this.imageInstance = new Image()
    this.imageInstance.src = 'images/car.png'
  }

  draw() {
    this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
  }

  moveLeft() {
    this.carPos.x -= 10
  }

  moveRight() {
    this.carPos.x += 10
  }
}




class Obstacle {

  constructor(ctx, posX, posY, obstaclelWidth, obstaclelHeight, canvasWidth, canvasHeight, velX) {
    this.ctx = ctx
    this.obstaclePos = { x: posX, y: posY }
    this.obstacleSize = { w: obstacleWidth, h: obstacleHeight }
    this.canvasSize = { w: canvasWidth, h: canvasHeight }
    this.obstacleSpeed = velX

    this.init()
  }

  draw() {
    this.move()
    this.ctx.drawImage(this.imageInstance, this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
  }

  move() {

    if (this.obstaclePos.x >= this.canvasSize.w - this.obstacleSize.w || this.obstaclePos.x <= 0) {
      this.turn()
    }

    this.obstaclePos.x += this.obstacleSpeed
  }

  turn() {
    this.obstacleSpeed *= -1
  }
}
