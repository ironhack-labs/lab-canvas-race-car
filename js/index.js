window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() { }
};

const canvasApp = {
  name: 'Car game',
  author: 'Javier Ruiz',
  version: '1.0.0',
  license: undefined,
  description: 'Canvas app car game',
  canvasSize: {
    w: undefined,
    h: undefined
  },
  ctx: undefined,
  framesIndex: 0,
  init(canvasId) {
    this.ctx = document.querySelector(canvasId).getContext('2d')
    this.setDimensions(canvasId)
    this.createAll()
    this.drawAll()
    this.setEventListeners()





  },
  setDimensions(canvasId) {
    this.canvasSize = {
      w: 500,
      h: 700
    }
    document.querySelector(canvasId).setAttribute('width', this.canvasSize.w)
    document.querySelector(canvasId).setAttribute('height', this.canvasSize.h)
  },


  createAll() {
    this.car = new Car(this.ctx, 230, 600, 50, undefined, 'car.png')
    this.obstacle = new Obstacle(this.ctx);

  },

  drawAll() {
    setInterval(() => {
      this.drawRoad()
      this.car.draw()
      this.obstacle.moveDown()
      this.obstacle.drawObstacles()





    }, 30)
  },

  setEventListeners() {
    document.onkeydown = e => {
      const { key } = e
      switch (key) {
        case 'ArrowLeft':
          this.car.moveLeft()
          break;
        case 'ArrowRight':
          this.car.moveRight()
          break;
      }
    }
  },
  drawRoad() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(25, 0, this.canvasSize.w - 50, this.canvasSize.h)

    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(this.canvasSize.w - 460, 0, this.canvasSize.w - 480, this.canvasSize.h)
    this.ctx.fillRect(this.canvasSize.w - 60, 0, this.canvasSize.w - 480, this.canvasSize.h)



    this.ctx.lineWidth = 5
    this.ctx.strokeStyle = 'white'

    this.ctx.beginPath()
    this.ctx.setLineDash([70, 30])
    this.ctx.moveTo(250, 0)
    this.ctx.lineTo(250, 700)
    this.ctx.stroke()
    this.ctx.closePath()


  },

  clearAll() {

  },
  drawObstacles() {



  }






}
