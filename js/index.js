window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    game.init()
  }
}

const game = {
  name: 'Racing game',
  description: 'Car Racing game',
  version: '1.0.0',
  author: 'David Roel y Tirso del Alamo',
  license: undefined,
  canvasDom: undefined,
  ctx: undefined,
  car: undefined,
  frames: 0,
  obs: [],
  canvasSize: {
    w: undefined,
    h: undefined
},

  init() {
    this.canvasDom = document.getElementById('canvas')
    this.canvasSize.w = this.canvasDom.getAttribute('width')
    this.canvasSize.h = this.canvasDom.getAttribute('height')
    this.ctx = this.canvasDom.getContext('2d')
    this.drawRoad()
    this.drawCarObs()
    this.setEventListeners()
  },

  drawRoad(){
    this.ctx.fillStyle = '#3ae34c'
    this.ctx.fillRect(0,0,this.canvasSize.w, this.canvasSize.h)

    this.ctx.fillStyle = '#c3c6c3'
    this.ctx.fillRect(50,0,this.canvasSize.w-100, this.canvasSize.h)
    
    this.ctx.fillStyle = '#fff'
    this.ctx.fillRect(65,0, 10, this.canvasSize.h)
    this.ctx.fillRect(this.canvasSize.w-75,0,10, this.canvasSize.h)

    this.ctx.beginPath()
    this.ctx.setLineDash([60, 40])
    this.ctx.strokeStyle = '#fff'
    this.ctx.lineWidth = 10
    this.ctx.moveTo(this.canvasSize.w / 2 - 5, 0)
    this.ctx.lineTo(this.canvasSize.w / 2 - 5, this.canvasSize.h)
    this.ctx.stroke()

    this.ctx.fillStyle = '#ff0000'
    this.ctx.font = '30px sans-serif'
    this.ctx.fillText(`Score: ${this.frames}`, 30, 30)
  },

  final() {
    this.ctx.fillStyle = 'ff0000'
    this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
            
    this.ctx.font = '20px sans-serif'
    this.ctx.fillStyle = '#ffffff'
    this.ctx.fillText("BOOOOM, IN YOUR FACE!", 125, 350)
    this.ctx.fillStyle = 'red'
    this.ctx.fillText(`Your final score: ${this.frames}`, 154, 400)
  },
  
  drawCarObs() {
      this.car = new Car(this.ctx, 220, 570, 50, 100, 7, this.canvasSize)
      this.car.init()

      const idInterval = setInterval(() => {
        this.frames++
        this.clearScreen()
        this.frames % 100 === 0 ? this.obs.push(new Obstacle(this.ctx, this.canvasSize)) : null
        this.drawRoad()
        this.car.draw()
        this.obs.forEach(elm => {
          elm.drawObs()
          elm.moveObs()
          if(this.detectColision(elm)) {
            clearInterval(idInterval)
            this.final()
            setTimeout(() => location.reload(), 3000)
          } 
        })
      }, 20)
  },

  detectColision(obs) {
    if(this.car.posX < obs.posX + obs.obsW && this.car.posX + this.car.carW > obs.posX && this.car.posY < obs.posY + obs.obsH && this.car.carH + this.car.posY > obs.posY) {
      return true
    } else {
      return false
    }
  },

  setEventListeners() {
    document.onkeydown = e => {
      e.keyCode === 37 ? this.car.move('left') : null
      e.keyCode === 39 ? this.car.move('right') : null    
    }
  },

  clearScreen() {
    this.ctx.clearRect(0,0,this.canvasSize.w,this.canvasSize.h)
  }
}

class Car {
  constructor(ctx, posX, posY, carW, carH, vel, canvasSize) {
    this.ctx = ctx
    this.posX = posX
    this.posY = posY
    this.carW = carW
    this.carH = carH
    this.vel = vel
    this.canvasSize = canvasSize
    this.car = undefined
  }

  init() {
    this.car = new Image()
    this.car.src = `images/car.png`
  }

  draw() {
    this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH)
  }

  move(dir) {
    if(this.posX >= 75 && this.posX + this.carW <= 425) {
      dir === 'left' ? this.posX -= this.vel : null
      dir === 'right' ? this.posX += this.vel : null
    } else {
      dir === 'left' && this.posX < 250 ? this.posX = 75 : null
      dir === 'right' && this.posX > 250 ? this.posX = 425 - this.carW : null
    }
  }
}

class Obstacle {
  constructor(ctx, canvasSize) {
    this.ctx = ctx
    this.posX= Math.random()*250
    this.posY = 0
    this.obsW= Math.random()*250
    this.obsH = 30
    this.vel = 3
    this.canvasSize = canvasSize
  }

  drawObs() {
    this.ctx.fillStyle = '#000'
    this.ctx.fillRect(this.posX, this.posY, this.obsW, this.obsH)
  }

  moveObs() {
    this.posY += this.vel
  }
}