 
 window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    roadGame.startGame();
  };
 const roadGame = {
  ctx: undefined,
  canvasDOM: undefined,
  canvasSize: { width: undefined, height: undefined },
  framesCounter: 0,
  startGame() {
    this.canvasDOM = document.querySelector("#canvas")
    this.ctx = this.canvasDOM.getContext("2d")
    this.canvasDOM.setAttribute("width", 500)
    this.canvasDOM.setAttribute("height", 700)
    this.drawFilleRectangle()
    this.drawLinesRoad()
    this.drawLinesDashRoad()
    this.setListeners()
    this.createCar()
    this.start()
  },
  drawFilleRectangle(){
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 500, 700)
    this.ctx.fillStyle = "gray";
    this.ctx.fillRect(40, 0, 420, 700)
  },
  drawLinesRoad(){
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 10
    this.ctx.setLineDash([0, 0])
    this.ctx.beginPath()
    this.ctx.moveTo(60, 0)
    this.ctx.lineTo(60,700)
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.beginPath()
    this.ctx.moveTo(440, 0)
    this.ctx.lineTo(440,700)
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.setLineDash([30, 15])
    this.ctx.beginPath()
    this.ctx.moveTo(250, 0)
    this.ctx.lineTo(250,700)
    this.ctx.stroke()
    this.ctx.closePath()
  },
  drawLinesDashRoad(){
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 10
    this.ctx.setLineDash([30, 15])
    this.ctx.beginPath()
    this.ctx.moveTo(250, 0)
    this.ctx.lineTo(250,700)
    this.ctx.stroke()
    this.ctx.closePath()
  },
   start() {
    setInterval(() => {
      this.clearScreen()
       this.car.draw()
       this.framesCounter % 40 === 0 ? console.log("createObstacles") : null
    }, 1000 / 50)
   },
  createCar() {
    this.car = new Car(this.ctx, 70, 600, 50, 70)
  },
  setListeners(){
    document.onkeydown = e => {
      console.log("La tecla: ", e.key)
      e.key === 'ArrowLeft' ? this.car.moveLeft() : null
      e.key === 'ArrowRight' ? this.car.moveRight() : null
    }
   },
   clearScreen() {
      this.ctx.clearRect(0, 0, 500, 700)
      this.drawFilleRectangle()
      this.drawLinesRoad()
      this.drawLinesDashRoad()
  },
};
class Car {
  constructor(ctx, posX, posY, width, height){
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
    this.image.src = 'images/car.png'
  }
  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
  }
  moveLeft() {
   console.log("Muevo a la izquierda", this.posX)
   if(this.posX>=70){
    this.posX -= 10
   }
  }
   moveRight() {
     console.log("Muevo a la derecha", this.posX)
    if (this.posX<=380){
      this.posX += 10
   }
};
}
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    roadGame.startGame();
  };
}
 }
