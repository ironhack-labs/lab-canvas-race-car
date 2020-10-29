window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {

    return carGame.init('canvas')
  }
};




// 1.ITERATION - Draw the game board

const carGame = {
  name: 'Car Game',
  description: 'Car Game for basic shapes drawing',
  version: '1.0.0',
  license: undefined,
  author: 'Carlos García',
  canvasCall: undefined,
  cntxt: undefined,
  frames: 0,
  canvasSize: {
    w: undefined,
    h: undefined
  },


  init(id) {
    this.canvasCall = document.getElementById(id)
    this.cntxt = this.canvasCall.getContext('2d')
    this.setDimensions()

  },


  setDimensions() {
    this.canvasSize = {
      w: window.innerWidth,
      h: window.innerHeight
    }
    this.canvasCall.setAttribute('width', this.canvasSize.w)
    this.canvasCall.setAttribute('height', this.canvasSize.h)
  },


  createBoard() {
    this.cntxt.fillStyle = 'green'
    this.cntxt.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

    this.cntxt.fillStyle = 'gray'
    this.cntxt.fillRect(70, 0, this.canvasSize.w / 3.5, this.canvasSize.h)
  },

  createLines() {
    this.cntxt.fillStyle = 'white'
    this.cntxt.fillRect(100, 0, this.canvasSize.w / 90, this.canvasSize.h)

    this.cntxt.fillStyle = 'white'
    this.cntxt.fillRect(740, 0, this.canvasSize.w / 90, this.canvasSize.h)
  },

  createDottedLines() {
    this.cntxt.fillStyle = 'white'
    this.ctx.lineWidth = 20
    this.ctx.beginPath()
    this.ctx.setLineDash([40, 20]) // Dash generator
    this.ctx.moveTo(0, 0, this.canvasSize.h / 2 - 10)
    this.ctx.lineTo(this.canvasSize.w - 200, this.canvasSize.h / 2 - 10)
    this.ctx.stroke()
  },

}


class Car {
  constructor(cntxt, carPosX, carPosY, carWith, carHeight, carImage) {
    this.cntxt = cntxt
    this.carPos = {
      x: carPosX,
      y: carPosY
    }

    this.carSize = {
      w: carWith,
      y: carHeight,
    }

    this.imageName = carImage
    this.carInstance = undefined
    this.init()
  }

  init() {
    this.carInstance = new Image()
    this.carInstance.src = ` img/${this.imageName}`
  }





}