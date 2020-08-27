

const raceCarApp = {
  name: 'Canvas Race',
  author: 'Ana BM',
  version: '1.0.0',
  license: undefined,
  description: 'racer car game',
  canvasId: undefined, 
  ctx: undefined,
  car: undefined,
  //frames: 0
  canvasSize: {
      w: 500,
      h: 700
  },

  init(id) {
      this.canvasId = document.getElementById(id) 
      this.ctx = this.canvasId.getContext('2d')
      this.canvasId.setAttribute('width', this.canvasSize.w) 
      this.canvasId.setAttribute('height', this.canvasSize.h) 
      this.drawCar('car.png')
      //console.log('hola estoy porbandoooooo')
      this.setEventListeners()
  },

  drawRoad(){

    this.ctx.lineWidth = 60
    this.ctx.strokeStyle = 'green'
    this.ctx.strokeRect(10, 10, this.canvasSize.w -20, this.canvasSize.h -20)
    //console.log('probando drawroad')

     this.ctx.fillStyle = 'grey'
     this.ctx.fillRect(40, 0,this.canvasSize.w - 80, this.canvasSize.h)

     this.ctx.lineWidth = 15
     this.ctx.strokeStyle = 'white'
     this.ctx.strokeRect(60 , 0, this.canvasSize.w -120, this.canvasSize.h)


     this.ctx.fillStyle = 'grey'
     this.ctx.fillRect(66, 0,this.canvasSize.w - 130, this.canvasSize.h)

     //He dado mil vueltas para conseguirlo, seguro que había una opción mas sencilla 

     this.ctx.lineWidth = 10
     this.ctx.beginPath()
     this.ctx.setLineDash([20,50])
     this.ctx.moveTo(250, 0)
     this.ctx.lineTo(250, 700)
     this.ctx.closePath()
     this.ctx.stroke()

 },
  // drawBackground() {
  //     this.ctx.fillStyle = '#008000'
  //     this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

  //     this.ctx.fillStyle = '#828282'
  //     this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)
  // },

  // drawBackgroundLine() {
  //     // Left continous line
  //     this.ctx.beginPath()
  //     this.ctx.strokeStyle = 'white'
  //     this.ctx.lineWidth = 10
  //     this.ctx.moveTo(65, this.canvasSize.h)
  //     this.ctx.lineTo(65, 0)
  //     this.ctx.stroke()

  //     // Right continous line
  //     this.ctx.beginPath()
  //     this.ctx.strokeStyle = 'white'
  //     this.ctx.lineWidth = 10
  //     this.ctx.moveTo(435, this.canvasSize.h)
  //     this.ctx.lineTo(435, 0)
  //     this.ctx.stroke()

  //     // Center discontinous line
  //     this.ctx.beginPath()
  //     this.ctx.setLineDash([30, 50])
  //     this.ctx.strokeStyle = 'white'
  //     this.ctx.lineWidth = 5
  //     this.ctx.moveTo(this.canvasSize.w / 2, this.canvasSize.h)
  //     this.ctx.lineTo(this.canvasSize.w / 2, 0)
  //     this.ctx.stroke()
  // },


drawCar(imgName) {

     
      this.car = new Car(this.ctx, imgName, 200, 580, 60, 100, this.canvasSize)
      this.car.init()

      setInterval(() => {
          this.clearScreen()
          this.drawBackground()
          this.drawBackgroundLine()
          this.car.draw()
      }, 35)
  },

setEventListeners() {
    document.onkeydown = e => {
          if (e.keyCode === 37) {
              this.car.move('left')
              console.log(e.keyCode)
          } else if (e.keyCode === 39) {
              this.car.move('right')
              console.log(e.keyCode)
          } else {
              return undefined
          }
      }
  },

clearScreen() {
      this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  }
}

class Car {

  constructor(ctx, imgName, posX, posY, carW, carH, canvasSize) {

      this.ctx = ctx 
      this.imgName = imgName 
      this.carPos = {
          x: posX,
          y:posY
       }
      this.carSize = {
          w: carW,
          h: carH
      }
      this.canvasSize = canvasSize
      this.img = undefined

  }

  init() {
      this.img = new Image()
      this.img.src = `images/${this.imgName}`
      this.img.onload = () => this.ctx.drawImage(this.img, this.canvasSize.w / 2 - 39, this.canvasSize.h - 165, 79, 159)
  }

  draw() {
      this.ctx.drawImage(this.img, this.posX, this.posY, this.carW, this.carH)
  }


  move(dir) {
      if (dir === 'left') {
          if (this.posX > 65) {
              this.posX -= 10
              this.draw()
          } else {
              alert('Out of boundaries!')
          }
      } else if (dir === 'right') {
          if (this.posX < 360) {
              this.posX += 10
              this.draw()

          
      } else {
          return undefined
      }
  }

} 
}


