const carApp = {
  appName: 'Canvas drawing app',
  author: 'Miguel Ortega Ward',
  version: '1.0.0',
  license: undefined,
  gameSize: { w: 500, h: 700 },
  ctx: undefined,
  car: undefined,
  obstacles: [],
  framesIndex: 0,

  init() {
    this.setContext()
    //this.drawRoad()
    this.createCar()
    this.drawAll()
    this.setEventHandlers()
    this.createObstacle()

  },

  setContext() {
    this.ctx = document.querySelector('#canvas').getContext('2d')
    console.log(this.ctx)
  },

  drawRoad() {
    //RECTANGULO VERDE
    this.ctx.fillStyle = 'pink'
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
    //RECTANGULO GRIS
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(20, 0, this.gameSize.w - 40, this.gameSize.h)
    //LINEA BLANCA IZQ
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 13
    this.ctx.beginPath()
    this.ctx.moveTo(35, 0)
    this.ctx.lineTo(35, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()
    //LINEA BLANCA DER
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 13
    this.ctx.beginPath()
    this.ctx.moveTo(this.gameSize.w - 35, 0)
    this.ctx.lineTo(this.gameSize.w - 35, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()
    //LINEA DISCONTINUA
    this.ctx.beginPath()
    this.ctx.moveTo(this.gameSize.w / 2, 50)
    this.ctx.setLineDash([85, 20])
    this.ctx.lineTo(this.gameSize.w / 2, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.setLineDash([0, 0])
  },

  //INSTANCIAMOS EL COCHE
  createCar() {
    this.car = new Car(this.ctx, this.gameSize.w / 2 - 50, 550, 100, 250)
  },

  createObstacle() {
    this.obstacles.push(new Obstacle(this.ctx, 250))
  },

  //CREAMOS INTERVALO PARA QUE APAREZCA LA IMAGEN
  drawAll() {
    setInterval(() => {

      this.framesIndex++
      this.framesIndex % 60 === 0 ? this.createObstacle() : null

      this.clearAll()
      this.drawRoad()
      this.car.draw()


      this.obstacles.forEach(elm => {
        elm.move()
        elm.drawObstacle()
      })
    }, 40)
  },

  clearAll() {
    this.ctx.clearRect(this.gameSize.w / 2 - 50, 550, 100, 250)
  },

  //METODO PARA MOVER EL COCHE
  setEventHandlers() {
    document.addEventListener('keydown', event => {
      const { key } = event
      key === 'ArrowRight' ? this.car.moveRight() : null
      key === 'ArrowLeft' ? this.car.moveLeft() : null

    })
  }
}
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    carApp.init()
  }
};
