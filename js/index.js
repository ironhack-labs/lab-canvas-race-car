window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    carGame.init()
    //console.log('hollaa')
  }
};
const carGame = {
  name: 'car of hell',
  ctx: undefined,
  canvasNode: undefined,
  gameSize: undefined,
  car: undefined,
  obstacle: [],
  frameIdex: 0,
  interval: undefined,
  init() {
    this.canvasNode = document.querySelector('#canvas')
    this.ctx = this.canvasNode.getContext('2d')
    this.canvasNode.style.backgroundColor = '#008900'
    //console.log(`el contexto es ${this.ctx}`)
    this.setEventListener()
    this.setDimensions()
    this.createCar()
    this.createObstacle()
    this.start()
    //this.collision()

  },
  setDimensions() {
    this.gameSize = {
      h: 700,
      w: 500
    }
  },
  setEventListener() {
    document.onkeyup = event => {
      const { key } = event

      if (key === 'ArrowLeft') {
        this.car.moveLeft()
      }
      if (key === 'ArrowRight') {
        this.car.moveRight()
      }
      console.log(event)
    }
  },


  createObstacle() {
    this.obstacle.push(
      new Obstacle(this.ctx, 80, 0, 60, 250, 7),
      new Obstacle(this.ctx, 170, 0, 60, 250, 15),
      new Obstacle(this.ctx, 200, 0, 60, 150, 20),
    )
    console.log('jfik')
  },

  createCar() {
    this.car = new Car(this.ctx, 215, 550, 75, 150)
  },

  solidLines() {

    ///solidlines
    this.ctx.lineWidth = 17
    this.ctx.strokeStyle = 'white'

    this.ctx.beginPath()
    this.ctx.moveTo(80, this.gameSize.h)
    this.ctx.lineTo(80, 0)
    this.ctx.stroke()
    this.ctx.closePath()

    this.ctx.beginPath()
    this.ctx.moveTo(420, this.gameSize.h)
    this.ctx.lineTo(420, 0)
    this.ctx.stroke()
    this.ctx.closePath()

  },
  dotedLines() {
    ///dotedLines
    this.ctx.lineWidth = 17
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.moveTo(250, this.gameSize.h)
    this.ctx.setLineDash([30, 30])
    this.ctx.lineTo(250, 0)
    this.ctx.stroke()
    this.ctx.closePath()
  },
  rectangle() {
    ///rectangle
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(50, 0, 400, this.gameSize.h)
  },

  drawAll() {
    this.rectangle()
    this.dotedLines()
    this.solidLines()
    this.car.drawCar()
    this.obstacle.forEach(eachOb => eachOb.drawobstacle())
    if (this.frameIdex % 200 === 0) this.createObstacle()


  },
  start() {
    this.interval = setInterval(() => {
      this.clearAll()
      this.drawAll()
      this.frameIdex++
    }, 30)
    if (this.car.x < this.obstacle.x + this.obstacle.width &&
      this.car.x + this.car.width > this.obstacle.x &&
      this.car.y < this.obstacle.y + this.obstacle.height &&
      this.car.height + this.car.y > this.obstacle.y) {
      clearInterval(this.interval)
      alert('GAME OVER')
    }
  },


  clearAll() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
  }

}