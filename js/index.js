// window.onload = () => {
//   document.getElementById('start-button').onclick = () => {
//     startGame();
//   };

//   function startGame() {}
// }

const racingApp = {
  name: 'IslandRacer',
  description: 'Canvas app for obstacle racing car',
  version: '1.0.0',
  author: 'Clara',
  license: undefined,

  gameSize: { w: undefined, h: undefined },
  canvasNode: undefined,
  ctx: undefined,
  car1: undefined,
  framesIndex: 0,


  init(canvasID) {
    this.canvasNode = document.querySelector(`#${canvasID}`)
    this.ctx = this.canvasNode.getContext('2d')

    this.setDimensions()
    this.createCar()
    this.drawAll()
    this.setEventListeners()
    this.start()

  },

  setDimensions() {
    this.gameSize = {
      w: this.canvasNode.getAttribute('width'),
      h: this.canvasNode.getAttribute('height')
    }
  },

  drawAll() {
    this.drawRoad()
    this.car1.draw()
  },

  drawRoad() {

    // Road levels: green+ gray + white
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)

    this.ctx.fillStyle = 'gray'
    this.ctx.fillRect(25, 0, 450, this.gameSize.h)

    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(40, 0, 15, this.gameSize.h)

    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(445, 0, 15, this.gameSize.h)

    // Dashed lines in the road
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'

    this.ctx.beginPath()
    this.ctx.moveTo(this.gameSize.w / 2, 0)
    this.ctx.setLineDash([50, 30])
    this.ctx.lineTo(this.gameSize.w / 2, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()
  },

  createCar() {
    this.car1 = new Car(this.ctx, this.gameSize.w / 2 - 25, this.gameSize.h - 125, 50, 100)
  },


  setEventListeners() {
    document.onkeyup = event => {
      const { key } = event
      if (key === 'ArrowLeft') {
        this.car1.moveLeft()
        console.log("hello")
      }
      if (key === 'ArrowRight') {
        this.car1.moveRight()
        console.log("hello")
      }
    }
  },


  start() {
    setInterval(() => {
      this.clearAll()
      this.drawAll()
      this.framesIndex++
    }, 5)
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
  },

  createObstacle() {

    let withAvailable = 380    /// El ancho de la carretera
    let randomWidth1 = Math.floor(Math.random() * withAvailable)
    let randomWidth2 = Math.floor(Math.random() * withAvailable)
    let randomWidthStart = 0
    let randomWhithEnd = 0

    if (randomWidth1 < randomWidth2) {
      randomWidthStart = 60 + randomWidth1
      randomWhithEnd = 60 + randomWidth2
    }
    if (randomWidth1 > randomWidth2) {
      randomWidthStart = 60 + randomWidth2
      randomWhithEnd = 60 + randomWidth1
    }

    this.fillStyle = 'red'
    this.fillRect = (randomWidthStart, 0, randomWhithEnd, 30)

  }
}


