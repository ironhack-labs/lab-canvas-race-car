window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };
  
    function startGame() {
      carApp.init("canvas")
    }
};


const carApp = {
  name: "Car Race",
  author: "Ak",
  version: "0.8",
  license: undefined,
  canvasId: undefined,
  ctx: undefined,
  car: undefined,
  carW: 50,
  carH: 100,
  canvasSize: {
      w: 500,
      h: 700
  },
  posX : undefined,
  frames: 0,
  car : undefined,

  init(id) {
      this.canvasId = document.getElementById(id)
      this.ctx = this.canvasId.getContext('2d')
      
      this.drawCar('car.png')
      this.setEventListeners()
  },

  drawRoad(){
      this.ctx.fillStyle = "green"
      this.ctx.fillRect(0, 0, 500, 700)
      this.ctx.fillStyle = "gray"
      this.ctx.fillRect(40, 0, 420, 700)
      this.ctx.fillStyle = "white"
      this.ctx.fillRect(60, 0, 12, 700)
      this.ctx.fillStyle = "white"
      this.ctx.fillRect(430, 0, 12, 700)
  },
        
  drawDashes() {
      this.ctx.lineWidth = 5
      this.ctx.strokeStyle = "white"
      this.ctx.beginPath()
      this.ctx.setLineDash([30, 40]), 0
      this.ctx.moveTo(250, 0)
      this.ctx.lineTo(250, 700)
      this.ctx.stroke()
      
  },

  drawCar(imageName) {
      this.car = new Car(this.ctx, imageName, this.canvasSize.w / 2 - 28, this.canvasSize.h - 120, this.carW, this.carH,  this.canvasSize)
      this.car.initCar()
      setInterval(() => {
          this.clearScreen()
          this.drawRoad()
          this.drawDashes()
          this.car.draw()
        }, 30)
    
  },

  setEventListeners() {
      document.onkeydown = e => {
          e.keyCode === 37 ? this.car.move('left') : null
          e.keyCode === 39 ? this.car.move('right') : null
      }
  },

  clearScreen() {
      this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },
}

class Car {

  constructor(ctx, imageName, posX, posY, carW, carH, canvasSize) {
      this.ctx = ctx

      this.posX = posX
      this.posY = posY

      this.carW = carW
      this.carH = carH

      this.canvasSize = canvasSize
      this.imageName = imageName

      this.imageInstance = undefined
  }

  initCar() {
      this.imageInstance = new Image()
      this.imageInstance.src = `images/${this.imageName}`
  }

  move(dir) {
      if(dir === 'left' && this.posX >= 80){
      this.posX -= 5
      }
      else if (dir === 'right' && this.posX <= this.canvasSize.w - 130){
      this.posX += 5
      }
      else{
        null
      }
  }

  draw() {
    this.ctx.drawImage(this.imageInstance, this.posX, this.posY, this.carW, this.carH)
  }
}