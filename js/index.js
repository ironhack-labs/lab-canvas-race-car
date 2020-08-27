window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    raceCarApp.init('canvas')
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
  frame: 0,
  canvasSize: {
    width: 500,
    height: 700
  },


  init(id) {
    this.canvasId = id
    this.ctx = document.getElementById(this.canvasId).getContext('2d')
    this.setEventListeners() 
    this.drawRoad()
    this.drawPlayerCar('car.png')
    //this.drawRoadObstacles()
    //console.log('Objeto canvas 2D', this.ctx)
  },

  drawRoad() {
    this.drawBoard()
    this.drawSideLines()
    this.drawCentralLines()
  },
  
  // Grass
  drawBoard() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, 500, 700)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(25, 0, 450, 700)
    
  },

  // Side lines of the road  ==> After implementing the setInterval, the lines became dashed lines - ?????
  drawSideLines() {
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
  
  // Central dashed lines
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

  drawPlayerCar(carImage) {
    this.player1Car = new PlayerCar(this.ctx, 210, 590, 80, 100, this.canvasSize, 1.5, carImage)
    //console.log(this.player1Car)
   setInterval(() => {
     //console.log('Am I cleaning?')
     this.frame++    //update frame
     this.clearScreen()  // clear screen  
     this.drawRoad()  // draw the road  ==> I need to restore the lines
     this.player1Car.draw()  // draw the car
    }, 30)  // restart
  },

  setEventListeners() {
    //console.log('Moving now!')
    document.onkeydown = e => {
    e.keyCode === 37 ? this.player1Car.moveCar('left') : null
    e.keyCode === 39 ? this.player1Car.moveCar('right') : null
    }
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
    this.imageInstance = undefined
    this.init()
  }

  init() {
    this.imageInstance = new Image()
    this.imageInstance.src = `images/${this.imgName}`
   
  }

  draw() {
    this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
  }

  moveCar(dir) {
    dir === 'left' && this.carPos.x >= 50 ? this.carPos.x -= 5 : null
    dir === 'right' && this.carPos.x <= 450 - this.carSize.w ? this.carPos.x += 5 : null    
  }



}

// class RoadObstacles {

// }


