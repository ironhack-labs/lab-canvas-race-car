window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    carGame.init('canvas')
    // carGame.createBoard()
    // carGame.createLines()
    // carGame.createDottedLines()
    // carGame.createCar()
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
  car: undefined,

  canvasSize: {
    w: undefined,
    h: undefined
  },

  keys: {
    left: 37,
    right: 39
  },


  init(id) {
    console.log(window)
    this.canvasCall = document.getElementById(id)
    this.cntxt = this.canvasCall.getContext('2d')
    this.setDimensions()
    this.createCar()
    this.createAll()
    this.setEventListeners()
  },


  setDimensions() {
    this.canvasSize = {
      w: 500,
      h: 700
    }
    this.canvasCall.setAttribute('width', this.canvasSize.w)
    this.canvasCall.setAttribute('height', this.canvasSize.h)
  },


  createBoard() {
    this.cntxt.fillStyle = 'green'
    this.cntxt.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

    this.cntxt.fillStyle = 'gray'
    this.cntxt.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)
  },


  createLines() {
    this.cntxt.fillStyle = 'white'
    this.cntxt.fillRect(80, 0, this.canvasSize.w - 490, this.canvasSize.h)

    this.cntxt.fillStyle = 'white'
    this.cntxt.fillRect(410, 0, this.canvasSize.w - 490, this.canvasSize.h)
  },


  createDottedLines() {
    this.cntxt.strokeStyle = 'white'
    this.cntxt.lineWidth = 10
    this.cntxt.beginPath()
    this.cntxt.setLineDash([40, 20])
    this.cntxt.moveTo(this.canvasSize.w / 2, 0)
    this.cntxt.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
    this.cntxt.stroke()
  },


  createCar() {
    this.car = new Car(this.cntx, 250, 400, 70, 40, 'car.png')
    console.log(this.car)
  },


  setEventListeners() {

    document.onkeydown = e => {
      if (e.keyCode === this.keys.left) {
        this.car.move('left')
      }

      if (e.keyCode === this.keys.right) {
        this.car.move('right')
      }
    }
  },


  createAll() {
    setInterval(() => {
      this.frames++
      // this.clearScreen()
      this.createLines()
      this.createDottedLines()
      this.carGame.createCar()
    }, 70)
  },
}





class Car {
  constructor(cntxt, carPosX, carPosY, carWidth, carHeight, carImage) {
    this.cntxt = cntxt
    this.carPos = {
      x: carPosX,
      y: carPosY
    }


    this.carSize = {
      w: carWidth,
      h: carHeight,
    }


    this.imageName = carImage
    this.carInstance = undefined
    this.init()
  }


  init() {
    this.carInstance = new Image()
    this.carInstance.src = ` images/${this.imageName}`
  }


  create() {
    this.cntxt.carImage(this.carInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
  }


  move(dir) {
    if (dir === 'left') {
      this.carPos.x -= 20
    }

    if (dir === 'right') {
      this.carPos.x += 20
    }
  }
}


// class Obstacles {
//   constructor(cntxt, carPosX, carPosY, carWith, carHeight, carImage) {
//     this.cntxt = cntxt
//     this.carPos = {
//       x: carPosX,
//       y: carPosY
//     }
// }