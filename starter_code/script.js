window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
}
 
function startGame() {
  RaceCar.init('mycanvas')

}

const RaceCar = {
  version: '1.0',
  name: 'Race-car',
  description: 'Un coche que evita obstaculos',
  author: 'María',
  canvasDom: undefined,
  ctx: undefined,
  winW: 500,
  winH: undefined,
  roadVel: 0,
  init: function (id) {
      this.canvasDom = document.getElementById(id)
      this.ctx = this.canvasDom.getContext('2d')
      this.setDimensions()
      this.car = new Car(this.ctx,this.winW)
      this.setEventListeners()
      this.drawAll()
      this.obstacles = []
  
  },
  setDimensions: function () {
    this.canvasDom.setAttribute('width', this.winW)
    this.canvasDom.setAttribute('height', window.innerHeight)
    this.winH = window.innerHeight
  },
  setHandlers: function () {
    window.onresize = () => this.setDimensions()
  },

  drawAll: function () {
    this.count= 0
    setInterval(() => {
      this.clear()
      this.drawRoad() 
      this.car.draw()
      if(this.count >= 30){
        this.obstacles.push(new Obstacles(this.ctx, this.winW))
        this.count= 0
      }this.count ++
      this.obstacles.forEach((elm) => {
        elm.makeObstacle()
        elm.drawMovingObstacle()
      })
      this.roadVel -=7
      this.ctx.lineDashOffset = this.roadVel
    }, 100)
  },
  
  clear: function () {
      this.ctx.clearRect(0, 0, window.innerHeight, window.innerWidth)
  },
  setEventListeners: function () {
      document.onkeyup = event => {
        if (event.keyCode == 37) {
        this.car.moveLeft()
        }
        if (event.keyCode == 39) {
          this.car.moveRight()
          } 
      }
  },

  drawRoad: function () {
    
    this.ctx.setLineDash([])

    this.ctx.fillStyle = "grey"                                            // cambia los colores de relleno
    this.ctx.fillRect(0,0, this.winW, this.winH)

    this.ctx.strokeStyle ="green"
    this.ctx.lineWidth = 100
    this.ctx.beginPath()
    this.ctx.moveTo(0,0)
    this.ctx.lineTo(0, this.winH)
    this.ctx.stroke()

    this.ctx.lineWidth = 100
    this.ctx.beginPath()
    this.ctx.moveTo(this.winW,this.winH)
    this.ctx.lineTo(this.winW, 0)
    this.ctx.stroke()

    this.ctx.strokeStyle ="white"
    this.ctx.lineWidth = 10
    this.ctx.beginPath()
    this.ctx.moveTo(70,0)
    this.ctx.lineTo(70, this.winH)
    this.ctx.stroke()

    this.ctx.lineWidth = 10
    this.ctx.beginPath()
    this.ctx.moveTo(this.winW-70,this.winH)
    this.ctx.lineTo(this.winW-70, 0)
    this.ctx.stroke()

    this.drawDashedLine()
    

  },

  drawDashedLine: function () {
    this.ctx.lineWidth = 10
    this.ctx.beginPath()
    this.ctx.setLineDash([30, 30])
    this.ctx.moveTo(this.winW/2,this.winH)
    this.ctx.lineTo(this.winW/2, 0)
    this.ctx.stroke()
    
  }

}
class Car {
  constructor(ctx, winW) {
    this.ctx = ctx
    this.carPic = new Image()
    this.carPic.src = "images/car.png"
    this.winW = winW
    this.posX = 200 
    this.vel = 10
    
  }
  draw() {
      this.ctx.drawImage(this.carPic, this.posX, 400, 100, 200)
  
  }
  moveLeft() {
    if (this.posX > 0) this.posX -= this.vel
    console.log(this.posX)


  }
  
  moveRight() {
    if (this.posX < 400) this.posX += this.vel
    console.log(this.posX)
  }
}

class Obstacles {
  constructor(ctx, winW) {
    this.ctx = ctx
    this.positionY = 10
    this.positionX = Math.floor(Math.random() * (300 + 1 - 80)) + 80
    this.width = winW / 3
    this.height = 15
    this.vel = 10
   
    }
  makeObstacle(){
    this.ctx.fillStyle = "green" // cambia los colores de relleno
    this.ctx.fillRect(this.positionX,this.positionY, this.width, this.height)
  }
  drawMovingObstacle() {
    this.positionY += this.vel
  }
}