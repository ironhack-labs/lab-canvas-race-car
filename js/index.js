window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    road.init()
  }
};


const road = {
  name: 'Island Racer',
  description: 'Canvas app for gaming',
  version: '1.0.0',
  author: 'Samuel Gallego',
  license: undefined,
  repository: undefined,
  ctx: undefined,
  canvasDOM: undefined,
  canvasSize: { w: undefined, h: undefined },

  init() {
    this.setContext()
    this.setDimensions()
    this.drawRectangle()
    this.drawLines()
    this.drawDashedLines()
  },
  setContext() {
    this.canvasDOM = document.querySelector('#canvas')
    this.ctx = this.canvasDOM.getContext('2d')
  },
  setDimensions() {
    this.canvasSize.w = 500
    this.canvasSize.h = 700
    this.canvasDOM.setAttribute('width', this.canvasSize.w)
    this.canvasDOM.setAttribute('height', this.canvasSize.h)
  },
  drawRectangle() {
    this.ctx.fillStyle = 'gray'
    this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)


  },
  drawLines() {

    this.ctx.beginPath()
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, 40, 700)
    this.ctx.stroke()



    this.ctx.beginPath()
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(460, 0, 40, 700)
    this.ctx.stroke()

    this.ctx.beginPath()
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(440, 0, 10, 700)
    this.ctx.stroke()


    this.ctx.beginPath()
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(50, 0, 10, 700)
    this.ctx.stroke()




  },
  drawDashedLines() {
    this.ctx.lineWidth = 8
    this.ctx.beginPath()
    this.ctx.setLineDash([30, 30])
    this.ctx.moveTo(this.canvasSize.w / 2, 0)
    this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
    this.ctx.strokeStyle = 'white'
    this.ctx.stroke()
    this.ctx.closePath()
  },

}



const interaction = {
  name: 'Island Racer',
  description: 'Canvas app for gaming',
  version: '1.0.0',
  author: 'Samuel Gallego',
  license: undefined,
  repository: undefined,
  ctx: undefined,
  canvasDOM: undefined,
  canvasSize: { w: undefined, h: undefined },

  init() {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa')
    this.setContext()
    this.setDimensions()
    this.start()
  },
  start() {
    setInterval(() => {
      this.clearScreen()
      this.drawAll()
    }, 70)
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },
  drawAll() {
    this.car.draw()
    this.Obstacle.drawObstacle()
  },



}





class Car {
  constructor(ctx, carPosX, carPosY, carWidth, carHeight) {
    this.ctx = ctx
    this.carPos = { x: carPosX, y: carPosY }
    this.carSize = { w: carWidth, h: carHeight }
    this.carImage = 'car.png'
    this.canvasSize = canvasSize

    this.init()

  }

  init() {

    this.image = new Image()
    this.image.src = `./images/car.png`

  }


  positionCar() {
    this.carPos = (200, 200, 200, 200)

  }


  draw() {
    this.ctx.drawImage(this.carImage, this.carPos)
  }
  moveLeft() {
    this.carPos.y += 10
  }

  moveRight() {
    this.carPos.x += 10
  }

  // moveCar() {
  //   document.onkeyup = e => {
  //     e.key === 'ArrowLeft' ? this.car.moveLeft() : true
  //     e.key === 'ArrowRight' ? this.car.moveRight() : true
  //   }
  // }
}



class Obstacle {
  constructor(ctx, posX, posY, width, height, speed) {
    this.ctx = ctx
    this.obstaclePos = { x: posX, y: posY }
    this.obstacleSize = { w: width, h: height }
    this.obstacleSpeed = speed
    this.canvasSize = canvasSize

    this.init()

  }

  init() {

  }


  drawObstacle() {
    this.ctx.fillStyle = 'brown'
    this.ctx.fillRect(250, 200, 100, 100)


  }

}