
const basicApp = {
    name: 'Island Racer',
    description: 'Island Racer app',
    version: '7.3.1',
    author: 'Manuel Pascual',
    license: undefined,
    repository: undefined,
    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: { width: undefined, height: undefined },
    background: undefined,
  
  init() {
    this.setContext()
    this.setDimensions()
    this.drawRoad()

  },

  setContext() {
    this.canvasDOM = document.querySelector("#canvas")
    this.ctx = this.canvasDOM.getContext("2d")
  },
  setDimensions() {
    this.canvasDOM.setAttribute("width", 500)
    this.canvasDOM.setAttribute("height", 700)
    this.canvasSize.width = window.innerWidth
    this.canvasSize.height = window.innerHeight
  },

  drawRoad(){
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 500, 700);
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(20, 0, 460, 700);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(30, 0, 15, 700);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(455, 0, 15, 700);
    
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 15
    this.ctx.beginPath()
    this.ctx.setLineDash([75, 85]);
    this.ctx.moveTo(250, 0)
    this.ctx.lineTo(250, 700)
    this.ctx.stroke();
}

}
// empieza el juego del jugador
const interactionApp = {
    name: 'Interaction app',
    description: 'Canvas app for basic shapes interaction',
    version: '1.0.0',
    author: 'Manuel pasucual',
    license: undefined,
    repository: undefined,
    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: { width: undefined, height: undefined },
    RaceCar: undefined,
  
    init() {
      this.setContext()
    //   this.setDimensions()
      this.setListeners()
      this.createRaceCar()

      this.start()
    },
  
    setContext() {
      this.canvasDOM = document.querySelector("#canvas")
      this.ctx = this.canvasDOM.getContext("2d")
    },
  
    // setDimensions() {
    //   this.canvasDOM.setAttribute("width", window.innerWidth)
    //   this.canvasDOM.setAttribute("height", window.innerHeight)
    //   this.canvasSize.width = window.innerWidth
    //   this.canvasSize.height = window.innerHeight
    // },
  
    start() {
      setInterval(() => {
        this.clearScreen()
        this.RaceCar.draw()
    }, 1000 / 50)
    },
  
    createRaceCar() {
      this.RaceCar = new RaceCar(this.ctx, 210, 0, 90, 180)
    },
  
    setListeners() {
      document.onkeydown = e => {
        console.log("La tecla: ", e.key)
        // if (e.key === 'ArrowLeft') {
        //   this.RaceCar.moveLeft()
        // }
        // if (e.key === 'ArrowRight') {
        //   this.RaceCar.moveRight()
        // }
        //Versión con operador ternario
        e.key === 'ArrowLeft' ? this.RaceCar.moveLeft() : null
        e.key === 'ArrowRight' ? this.RaceCar.moveRight() : null
      }
    },
  
    clearScreen() {
      this.ctx.clearRect(0, 0, 500, 700, this.canvasSize.width, this.canvasSize.height)
    }
  }
  
  class RaceCar {
    constructor(ctx, posX, posY, width, height) {
      this.ctx = ctx
  
      this.posX = posX
      this.posY = posY
  
      this.width = width
      this.height = height
  
      this.image = undefined
  
      this.init()
    }
  
    init() {
      this.image = new Image()
      this.image.src = '/Users/manuel/Documents/ironhack/week_2/day_4/lab-canvas-race-car/images/car.png'
    }
    draw() {
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(0, 0, 500, 700);
        this.ctx.fillStyle = "grey";
        this.ctx.fillRect(20, 0, 460, 700);
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(30, 0, 15, 700);
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(455, 0, 15, 700);
        
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 15
        this.ctx.beginPath()
        this.ctx.setLineDash([75, 85]);
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.stroke();
      this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
      
    }
  
    moveLeft() {
      if (this.posX > 0 ) {
       return this.posX -= 20
      }
    }
  
    moveRight() {
        if (this.posX < 370 ) {
         return this.posX += 20
        }
      }

    // moveRight() {
    //   this.posX += 20
    // }
  }