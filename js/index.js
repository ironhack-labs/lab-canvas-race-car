
const gameBoard = {
  name: 'Race Car Canvas',
  author: 'Jaime Bastos',
  license: undefined,
  version: '1.0.0',
  canvasDOM: undefined,
  ctx: undefined,
  canvasSize: {w: '500', h: '700'},
  car: undefined,
  init(){
    //alert ("inicializar el canvas") 
    this.canvasDOM = document.querySelector('#canvas')
    this.ctx = this.canvasDOM.getContext('2d')
    this.setCanvasSize()
    this.createCar()
    this.drawAll()
    this.setListeners()

    //console.log(this.ctx)
  },

  setCanvasSize(){
    this.canvasSize = {
      w: 500,
      h: 700
    }
    this.canvasDOM.setAttribute('width', this.canvasSize.w)
    this.canvasDOM.setAttribute('height', this.canvasSize.h)
  },

  drawRoad(){
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect (this.canvasSize.w / 2 - 150, this.canvasSize.h / 3 - 400, 300, 900)
   
   this.ctx.fillStyle = 'gray'
    this.ctx.fillRect (this.canvasSize.w / 2 - 130, this.canvasSize.h / 2 - 400, 260, 800)
    
  },

  drawLineRoad(){
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 15
    this.ctx.strokeRect (this.canvasSize.w / 2 - 110, this.canvasSize.h / 2 - 400, 220, 800)

  },

  drawDashedLine(){
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 8

    this.ctx.beginPath()
    this.ctx.setLineDash( [50, 60] )
    this.ctx.moveTo (this.canvasSize.w / 2, 70)
    this.ctx.lineTo (this.canvasSize.w / 2, 700)
    this.ctx.stroke()
    this.ctx.closePath()
  },

  createCar(){
    const car = new Car(this.ctx) 

  },

  drawAll(){
          
    setInterval(() => {

      this.clearScrean()
      this.car.draw()
      this.obstacle()

}, 50) 
},

  clearScreen(){
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },

  setListeners() {
    document.onkeyup = e => {
      e.key === 'ArrowLeft' ? this.car.moveLeft() : null
      e.key === 'ArrowRight' ? this.car.moveRight() : null
  }
},

  obstacle(){
    this.ctx.strokeStyle = 'brown'
    this.ctx.lineWidth = 12

    this.beginPath()
    this.ctx.moveTo (this.canvasSize.w, 300, 60)
    this.ctx.lineTo (this.canvasSize.w, 220, 60)
    this.ctx.stroke()
    this.closePath()

  }
}


class Car {
  
  constructor(ctx){
    this.ctx = ctx
    this.init()

    this.carPos = { 
      x: 150, 
      y: 360
    }
    this.carSize = { 
      w: 50, 
      h: 80 
    }

  }

  init(){
    this.imageInstance = new Image()
    this.imageInstance.src = 'images/car.png'
  }

  draw(){
    this.ctx.drawImage (this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
  }

  moveLeft (){
    this.carPos.x -= 15
  }

   moveRight (){
    this.carPos.x += 15
  }
}




// ------------------------ 0 ----------------------

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };  

  function startGame() {
    gameBoard.init()
    gameBoard.drawRoad()
    gameBoard.drawLineRoad()
    gameBoard.drawDashedLine()

  }
};  

