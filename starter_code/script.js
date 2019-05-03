window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    console.log("has hecho click")
    game.startGame("game");
  };
}

  const game = {
    version: "1.0",
    canvasDom: undefined,
    ctx: undefined,
    winW: undefined,
    winH: undefined,
    grassW: undefined,
    grassH: undefined,
    car1: "images/car.png",
    startGame: function(id) {
      this.canvasDom = document.getElementById(id)
      this.canvasContainer = this.canvasDom.parentNode
      this.ctx = this.canvasDom.getContext('2d')
      this.setDimensions()
      this.setHandlers()
      this.drawRoad()
      this.drawControlledCar(this.car1)
      this.drawObstacles()
      this.setEventListeners()
    },
    drawRoad: function () {
      this.grassW = 30
      this.grassH = this.winH
      this.linesW = 10
      this.centerX = this.winW / 2
      this.ctx.fillStyle = "green" /* Grass */
      this.ctx.fillRect(0, 0, this.winW, this.winH)      
      this.ctx.fillStyle = "gray" /* Road */
      this.ctx.fillRect(30, 0, this.winW - this.grassW * 2, this.winH)
      this.ctx.strokeStyle = 'white' /* Dashed line */
      this.ctx.lineWidth = 10
      this.ctx.setLineDash([60, 30])
      this.ctx.beginPath()
      this.ctx.moveTo(this.centerX - (this.linesW/2), 0)
      this.ctx.lineTo(this.centerX - (this.linesW/2), this.winH)
      this.ctx.stroke()
      this.ctx.strokeStyle = 'white' /* Side lines */
      this.ctx.lineWidth = 10   
      this.ctx.setLineDash([])  
      this.ctx.beginPath() /* Linea uno */
      this.ctx.moveTo(30 + 20, 0)
      this.ctx.lineTo(30 + 20, this.winH)
      this.ctx.stroke()
      this.ctx.beginPath() /* Linea dos */     
      this.ctx.moveTo(this.winW - (30 + 20), 0)
      this.ctx.lineTo(this.winW - (30 + 20), this.winH)
      this.ctx.stroke()
    },
    drawControlledCar: function (url) {
      this.car = new Car(this.ctx, url, this.winW, this.winH)

      setInterval(() => {
          this.clear()
          this.drawRoad() 
          this.car.draw() 
          this.obstacle.draw()

      }, 5)
    },    
    drawObstacles: function() {
      this.obstacle = new Obstacle(this.ctx, this.winW, this.winH)
      this.obstacle.draw()
     
    },
    generateObstacles: function() {
      
    },
    setDimensions: function () {
      this.canvasDom.width = 500;
      this.canvasDom.height = window.innerHeight;
      this.winW = this.canvasDom.width
      this.winH = this.canvasDom.height      
    },
    setHandlers: function () {
      window.onresize = () => this.setDimensions()
    },
    clear: function () {
      this.ctx.clearRect(0, 0, this.winW, this.winH)
    },
    setEventListeners: function () {
      document.onkeydown = e => {
          console.log("has pulsado una tecla")
          if (e.keyCode === 37) this.car.moveLeft()
          if (e.keyCode === 39) this.car.moveRight()
      }
    }
};

class Car {
  constructor(ctx, url, winW, winH) {
      this.ctx = ctx
      this.img = new Image()
      this.img.src = url
      this.width = 159 * 0.45
      this.height = 358 * 0.45
      this.winW = winW
      this.posX = winW/2
      this.posY = winH - this.height      
      this.vel = 10
  }
  draw() {
      this.ctx.drawImage(this.img, this.posX - this.width / 2, this.posY - 40, this.width, this.height)
  }

  moveLeft() {
    console.log("mover izquierda")
      if (this.posX > 0) this.posX -= this.vel
  }

  moveRight() {
    console.log("mover derecha")

      if (this.posX < this.winW - this.width) this.posX += this.vel
  }
}

class Obstacle {
  constructor(ctx, winW, winH) {
    this.ctx = ctx
    this.posY = 0
    this.vel = 2
  }

  draw() {
    this.ctx.fillStyle = "brown"
    this.ctx.fillRect(0, this.posY, 300, 50)
    this.posY += 0.75
    this.moveDown()
  }

  moveDown() {
    console.log("mover abajo")
      if (this.posX > 0) this.posX -= this.vel
  }
}
