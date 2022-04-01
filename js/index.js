const canvitasGuapo= {
  canvasNode: undefined,
  ctx: undefined,
  gameSize: {w:500, h:700},
  cocheRemolon: undefined,
  framesIndex:0,
  boxes:[],

  init(canvasID) {
    this.canvasNode= document.querySelector(`${canvasID}`)
    this.ctx= this.canvasNode.getContext('2d')
    this.setEventListeners()
    this.createCocheDeChoke()
    this.start()
  },

  drawRoadway(){
    this.ctx.fillStyle='green'
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)

    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(50,0,this.gameSize.w-100,this.gameSize.h)

    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(60,0,10,this.gameSize.h)
    this.ctx.fillRect(this.gameSize.w-70,0,10,this.gameSize.h)

    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.moveTo((this.gameSize.w/2), 0)
    this.ctx.setLineDash([40, 20])
    this.ctx.lineTo((this.gameSize.w/2), this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()
  },
  createCocheDeChoke(){
    this.cocheRemolon=new Car(this.ctx,this.gameSize, this.gameSize.w/2-50, 4*this.gameSize.h/5, 100, 120)
  },
  
  createObstacle(){
    this.boxes.push(new this.boxes())
  }
  ,
  setEventListeners() {
    document.onkeydown = event => {
        const { key } = event
        if (key === 'ArrowLeft') {
            this.cocheRemolon.moveLeft()
        }
        if (key === 'ArrowRight') {
            this.cocheRemolon.moveRight()
        }
    }
  },
  start() {
    console.log('hello')
    setInterval(() => {
      this.clearAll()
      this.drawAll()
      this.framesIndex++
    },30) 
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
  },

  drawAll() {
    this.drawRoadway()
    this.cocheRemolon.draw()
    
    // if (this.framesIndex % 30 === 0) this.createObstacle()      // <- ayudita :3
  },

}


//window.onload = () => {

//  document.getElementById('start-button').onclick = () => {
//    startGame()
 // }

//  function startGame() {
//    setInterval(() => {
//      this.clearAll()
//      this.drawAll()
 // }, 30)
//  }


//}



