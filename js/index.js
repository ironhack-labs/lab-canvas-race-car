
const carApp = {
  appName: 'CarApp',
  author: 'AChFr',
  version: '1.0.0',
  license: undefined,
  gameSize: { w: 500, h: 700 },
  ctx: undefined,

  car: undefined,
  obstacles: [],
  frameIndex: 0,

  init() {
    this.setContext()

    this.createCar()
    this.createObstacle()
    this.drawAll()
    this.setEventHandlers()


  },
  setContext() {
    this.ctx = document.getElementById('canvas').getContext('2d')
    console.log(this.ctx)
  },


  drawfill() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(10, 0, this.gameSize.w - 20, this.gameSize.h)
    this.ctx.fillStyle = 'black'
    this.ctx.fillRect(30, 0, this.gameSize.w - 60, this.gameSize.h)
    this.ctx.fillStyle = 'lightgrey'
    this.ctx.fillRect(50, 0, 15, this.gameSize.h)
    this.ctx.fillRect(this.gameSize.w - 65, 0, 15, this.gameSize.h)
  },

  drawdash() {
    this.ctx.lineWidth = 14
    this.ctx.strokeStyle = 'lightgrey'
    this.ctx.beginPath()
    this.ctx.moveTo((this.gameSize.w / 2) - 7, 0)
    this.ctx.setLineDash([40, 10])
    this.ctx.lineTo((this.gameSize.w / 2) - 7, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()
  },

  createRoad() {
    this.drawfill()
    this.drawdash()
  },


  createCar() {
    this.car = new Car(this.ctx, this.gameSize.w / 2, this.gameSize.h - 120, 100, 100)


  },

  createObstacle() {

    let randomX = (Math.floor((Math.random()) * 4) * 100)
    let randomW = Math.floor((Math.random()) * 400)
    let randomH = 100

    const obstacle = new Obstacle(this.ctx, randomX, 50, randomW, randomH)
    this.obstacles.push(obstacle)

  },


  drawAll() {
    setInterval(() => {
      this.frameIndex % 35 === 0 ? this.createObstacle() : null

      this.frameIndex++
      this.clearAll()
      this.createRoad()
      this.car.draw()
      this.obstacles.forEach(elm => {
        elm.move()
        elm.draw()

        // if (this.obstacles.elm.objPos.x < this.car.carPosX + this.obstacles.elm.objSize.w &&
        //   this.obstacles.elm.objPos.x + this.obstacles.elm.objSize.w > this.car.carPos.x &&
        //   this.obstacles.elm.objPos.y < this.car.carPos.y + this.car.carSize.h &&
        //   this.obstacles.elm.objSize.h + this.obstacles.elm.objPos.y > this.car.carPos.y) {
        //   console.log('bbbbbb')
        //   new alert('YOU ARE A LOOSER')

        // }
        // else { console.log('aaaaa') }

      })


      this.car.draw()




    }, 50)




  },

  clearAll() {

    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)


  },

  setEventHandlers() {
    document.addEventListener('keydown', event => {
      const { key } = event
      key === 'ArrowRight' ? this.car.moveRight() : null
      key === 'ArrowLeft' ? this.car.moveLeft() : null
      key === 'ArrowUp' ? this.car.moveUp() : null
      key === 'ArrowDown' ? this.car.moveDown() : null
    })
  },


};


window.onload = () => {

  document.getElementById('start-button').onclick = () => {
    startGame();
  }





  function startGame() {
    carApp.init()

  }



}

/*
window.onload = () => {

  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    carApp.init()
    this.setEventHandlers()
  }

}*/