window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    //raceCarApp.init('canvas')
  }
};


const raceCarApp = {
  name: 'Race car game',
  author: 'SCM',
  version: '-0',
  license: undefined,
  description: 'First try with canvas!',
  canvasId: undefined,
  ctx: undefined,
  canvasSize: {
    width: 500,
    height: 700
  },

  init(id) {
    this.canvasId = id
    this.ctx = document.getElementById(this.canvasId).getContext('2d')
    this.drawBoard()
    this.drawSidelLines()
    this.drawCentralLines()
    this.drawPlayerCar()
    //this.drawRoadObstacles()
    console.log('Objeto canvas 2D', this.ctx)
  },

  drawBoard() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, 500, 700)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(25, 0, 450, 700)
  },

  drawSidelLines () {
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.moveTo(40, 0)
    this.ctx.lineTo(40, this.canvasSize.height)
    this.ctx.closePath()
    this.ctx.stroke()
    this.ctx.beginPath()
    this.ctx.moveTo(460, 0)
    this.ctx.lineTo(460, this.canvasSize.height)
    this.ctx.closePath()
    this.ctx.stroke()
  },

  drawCentralLines() {
    this.ctx.lineWidth = 5
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.setLineDash([20, 40])
    this.ctx.moveTo(250 , 0)
    this.ctx.lineTo(250, this.canvasSize.height)
    this.ctx.closePath()
    this.ctx.stroke()
  },

  drawPlayerCar() {
    const player1 = new PlayerCar(this.ctx, 210, 590, 80, 100, this.canvasSize, 2.5, 'car.png')
    console.log(player1)
   setInterval(() => {
     this.clearScreen()
     player1.draw()
   }, 50)
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  }
  
  //drawRoadObstacles() {

  //}
}

class PlayerCar { 

  constructor (ctx, posX, posY, carW, carH, canvasSize, speed, imgName) {
    this.ctx = ctx
    this.carPos = {
      x: posX,
      y: posY
    }
    this.carSize = {
      w: carW,
      h: carH
    }
    this.canvasSize = canvasSize
    this.imgName = imgName
    this.speed = speed
    this.imageInstance = undefined
    this.init()
  }

  init() {
    this.imageInstance = new Image()
    this.imageInstance.src = `images/${this.imgName}`
   
  }

  draw() {
    //this.moveCar()
    this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
  }

  moveCar() {
    this.carPos.y += this.speed
    this.carPos.x >= this.canvasSize.w - this.carSize.w || this.carPos.x <= 0 ? this.changeDirection() : null

    
  }



}

// class RoadObstacles {

// }

raceCarApp.init('canvas')
