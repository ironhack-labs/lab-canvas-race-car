window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    raceCar.init()
  }
};
const raceCar = {
  name: "Island Racer",
  description: "Race car game",
  version: "1.0.0",
  license: undefined,
  author: "Catalina",
  ctx: undefined,
  canvasTag: undefined,
  canvasSize: {
    w: undefined,
    h: undefined
  },
  carInstance: undefined,
  carPosition: {
    x: 225,
    y: 550
  },
  carSize: {
    w: 50,
    h: 100,
  },
  fluidRight: false,
  fluidLeft: false,
  obstacles: [],
  obstaclePosition: {
    x: undefined,
    y: 0
  },
  obstacleSize: {
    w: undefined,
    h: 50
  },
  framesIndex: 0,
  init() {
    this.setContext()
    this.setDimensions()
    this.createCar()
    this.drawAll()
    this.setEventHandler()
    this.start()
  },
  setContext() {
    this.canvasTag = document.querySelector('canvas')
    this.ctx = this.canvasTag.getContext('2d')
  },
  setDimensions() {
    this.canvasSize = {
      w: document.querySelector('canvas').getAttribute('width'),
      h: document.querySelector('canvas').getAttribute('height')
    }
  },
  drawRoad() {
    this.ctx.fillStyle = '#41C08B'
    this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

    this.ctx.fillStyle = '#9BAEBC'
    this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)

    this.ctx.fillStyle = '#ffffff'
    this.ctx.fillRect(60, 0, 10, this.canvasSize.h)
    this.ctx.fillRect(this.canvasSize.w - 70, 0, 10, this.canvasSize.h)

    this.ctx.beginPath()
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 5
    this.ctx.setLineDash([40, 20])
    this.ctx.moveTo(this.canvasSize.w / 2, 0)
    this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
    this.ctx.stroke()
    this.ctx.closePath()
  },
  createCar() {
    this.carInstance = new Image()
    this.carInstance.src = '../images/car.png'
  },
  drawCar() {
    this.ctx.drawImage(this.carInstance, this.carPosition.x, this.carPosition.y, this.carSize.w, this.carSize.h)
  },
  drawAll() {
    this.drawRoad()
    this.drawCar()
    this.stopInBorder()
    this.generateObstacle()
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },

  start() {
    setInterval(() => {
      this.clearAll()
      this.drawAll()
      if(this.fluidRight) this.carPosition.x += 3
      if (this.fluidLeft) this.carPosition.x -= 3
      this.framesIndex ++
      if(this.framesIndex % 100 === 0) this.createObstacle()
      this.obstacles.forEach(obs => obs.move())
      this.obstacles.forEach(obs => {
        if (this.carPosition.x < obs.obstaclePosition.x + obs.obstacleSize.w && 
          this.carPosition.y < obs.obstaclePosition.y + obs.obstacleSize.h && 
          this.carPosition.x + this.carSize.w > obs.obstaclePosition.x &&
          this.carPosition.y + this.carSize.h > obs.obstaclePosition.y){
          this.stop()
          alert('G A M E  O V E R!!')
          location.reload()
        }
      })
    }, 10);
  },
  stop(){
    clearInterval(2)
  },
  setEventHandler() {
    document.onkeydown = (event) => {
      switch (event.key) {
        case 'ArrowRight':
          this.fluidRight = true
          break;
      
        case 'ArrowLeft':
          this.fluidLeft = true
          break;
      }
    }
    document.onkeyup = (event) => {
      switch (event.key) {
        case 'ArrowRight':
          this.fluidRight = false
          break;

        case 'ArrowLeft':
          this.fluidLeft = false
          break;
      }
    }
  },
  stopInBorder() {
    if (this.carPosition.x === 450) {
      this.fluidRight = false
    }
    if (this.carPosition.x === 0) {
      this.fluidLeft = false
    }
  },
  createObstacle(){
    this.obstacles.push(
      new Obstacle (this.ctx, this.canvasSize)
    )
  },

  generateObstacle(){
    this.obstacles.forEach(obs => obs.draw())
  }

}
