window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame()
  };

  function startGame() {
    carGame.init('canvas')
  }
};


const carGame = {
  name: 'Car Game',
  description: 'Car Game with obstacles',
  version: '0.0.0',
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
    this.canvasCall = document.getElementById(id)
    this.cntxt = this.canvasCall.getContext('2d')
    this.setDimensions()
    this.createCar()
    this.createAll()
    this.createBoard()
    this.setEventListeners()
  },

  createAll() {
    setInterval(() => {
      this.frames++
      this.clearScreen()
      this.createBoard()
      this.car.create()
    }, 50)
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


  setDimensions() {
    this.canvasSize = {
      w: 500,
      h: 700
    }
    this.canvasCall.setAttribute('width', this.canvasSize.w)
    this.canvasCall.setAttribute('height', this.canvasSize.h)
  },


  createRoad() {
    this.cntxt.fillStyle = 'green'
    this.cntxt.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

    this.cntxt.fillStyle = 'gray'
    this.cntxt.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)
    console.log('0')
  },


  createLines() {
    this.cntxt.fillStyle = 'white'
    this.cntxt.fillRect(80, 0, this.canvasSize.w - 490, this.canvasSize.h)

    this.cntxt.fillStyle = 'white'
    this.cntxt.fillRect(410, 0, this.canvasSize.w - 490, this.canvasSize.h)
    console.log('2')
  },


  createDottedLines() {
    this.cntxt.strokeStyle = 'white'
    this.cntxt.lineWidth = 10
    this.cntxt.beginPath()
    this.cntxt.setLineDash([40, 20])
    this.cntxt.moveTo(this.canvasSize.w / 2, 0)
    this.cntxt.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
    this.cntxt.stroke()
    console.log('3')
  },


  clearScreen() {
    this.cntxt.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },

  createBoard() {
    this.createRoad()
    this.createLines()
    this.createDottedLines()
    console.log('1')
  },

  createCar() {
    this.car = new Car(this.cntxt, 250, 580, 52, 106, 'car.png')
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
    this.cntxt.drawImage(this.carInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
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