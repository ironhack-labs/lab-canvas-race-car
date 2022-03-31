window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {


    app.init()

    
  }


};


const app = {

  // contexto------------------
    canvasNode: undefined,
    ctx: undefined,
    gameSize: { w: undefined, h: undefined },
    car: undefined,

    framesIndex: 0,

    init() {
        this.canvasNode = document.querySelector('#canvas')
        this.ctx = this.canvasNode.getContext('2d')
        this.setDimensions()
        this.setEventListeners()
        this.createCar()
        this.drawAll()
        this.start()
        
    },

    setDimensions() {
        this.gameSize = {
            w: 500,
            h: 700
        }
        
    },
// fin contexto y comienzo de creacion del coche
    setEventListeners() {
      document.onkeydown = event => {
          const { key } = event
          if (key === 'ArrowLeft') {
              this.car.moveLeft()
          }
          if (key === 'ArrowRight') {
              this.car.moveRight()
          }
      }
    },

    createCar() {
      this.car = new Car(this.ctx, 300, 300, 100, 100)
    },

    start() {
      setInterval(() => {
        this.clearAll()
        this.drawAll()
        this.framesIndex++      
      }, 30)
  },

  clearAll() {
      this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
  },

  drawAll() {
      // if (this.framesIndex % 30 === 0) this.createObstacle()  
      this.drawCanvas()
      this.drawSquare()
      this.drawDashedLine()    
      this.car.draw()
  },

  createObstacle() {
      console.log('OBSTÁCULO VA!!')
  },
// empieza el dibujo de la carretera--------------------------
    drawCanvas(){
      this.ctx.fillStyle = 'grey'
      this.ctx.fillRect(0 ,0 , this.gameSize.w, this.gameSize.h )
      
    },
    drawSquare() {
      this.ctx.fillStyle = 'green'
      this.ctx.fillRect(0,0,30,this.gameSize.h)
      this.ctx.fillRect(this.gameSize.w - 30 ,0,30,this.gameSize.h)

      
      this.ctx.fillStyle = 'white'
      this.ctx.fillRect(40,0,10,this.gameSize.h)
      this.ctx.fillRect(this.gameSize.w - 50 ,0,10,this.gameSize.h)

    },

    drawDashedLine() {
      this.ctx.lineWidth = 10
      this.ctx.strokeStyle = 'white'

      this.ctx.beginPath()
      this.ctx.moveTo(this.gameSize.w/2, 0)
      this.ctx.setLineDash([50, 15])      // <--
      this.ctx.lineTo(this.gameSize.w/2, this.gameSize.h)
      this.ctx.stroke()
      this.ctx.closePath()
  },
}