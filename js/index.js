window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    app.startGame();
  }

}


 const app = {
  name: 'Car Race App',
  description: 'Basic animated HTML5 Car Race app',
  version: '0.0.0',
  author: 'Paola Martin y Luciana Viña',
  license: undefined,
  canvasDom: undefined,
  ctx: undefined,
  frames: 0,
  canvasSize: {
    w: 500,
    h: 700
  },

  
  startGame() {

},
  
  drawTrack() {
//     // Grass green
    this.ctx.fillStyle = '#68CD4D'
    this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
//     // //console.log('HOLA SOY GREEN') = Aqui esta la prueba Kike

//     //Road Gray

    this.ctx.fillStyle = '#888C85'
    this.ctx.fillRect(this.canvasSize.w / 2 - 200, 0, 400, this.canvasSize.h)

//     //Left line

    this.ctx.beginPath()
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 20
    this.ctx.moveTo(80, 0)
    this.ctx.lineTo(80, 700)
    this.ctx.stroke()

//     //Right line

    this.ctx.beginPath()
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 20
    this.ctx.moveTo(420, 0)
    this.ctx.lineTo(420, 700)
    this.ctx.stroke()

//     //Discontinued line

    this.ctx.beginPath()
    this.ctx.setLineDash([30, 40])
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 10
    this.ctx.moveTo(245, 0)
    this.ctx.lineTo(245, 700)
    this.ctx.stroke()

  },

  init(id) {

    this.canvasDom = document.getElementById(id)
    this.canvasDom.setAttribute('width', this.canvasSize.w)
    this.canvasDom.setAttribute('height', this.canvasSize.h)
    this.ctx = this.canvasDom.getContext('2d')
    this.setEventListeners()
    
  },


   drawCar(name) {
       console.log('drawCar')
  this.car = new Racecar(this.ctx, name, 210, 580, 80, 100, 10, this.canvasSize)
  this.car.init()
    setInterval(() => {
      // this.frames++
      // this.frames % 50 === 0 ? console.log('UN OBSTACULO!! OH NO!!') : null
      this.clearScreen()
      this.drawTrack()
      this.car.draw()

    },20)
},

  setEventListeners() {

      document.onkeydown = e => {
        e.keyCode === 37 ? this.car.move('left') : null
        e.keyCode === 39 ? this.car.move('right') : null
      }
    
   },
  clearScreen() {
      this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  
    }

}

//Car

class RaceCar {
  constructor (ctx, name, posX, posY, carW, carH, vel, canvasSize){
        this.ctx = ctx
        this.name = name
        this.posX = posX
        this.posY = posY
        this.carW = carW
        this.carH = carH
        this.vel = vel
        this.canvasSize = canvasSize
        this.car = undefined
      }

// //Move Car

  init(){ 

  this.car = new Image()
  this.car.src = '../images/car.png'
  console.log('HOLA SOY EL COCHE REBEL')
  this.car.onload = () => this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH)
  
  }

  move(dir) {
    dir === 'left' ? this.posX --: null
    dir === 'right' ? this.posX ++  : null
  }

  draw() {
    console.log('DRAW')
  this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH)
}
}

//app.init('canvas')
//app.drawTrack()
//app.drawImage()
//app.setEventListeners()