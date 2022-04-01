window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame(){
    RacerCar.init()
  }
};

  const RacerCar = {
    name: 'Racer Car',
    description: 'Canvas app for basic shapes animating',
    version: '1.0.0',
    author: 'Sherilin',
    license: undefined,
    canvasNode: undefined,
    ctx: undefined,
    gameSize: { w: 500, h: 700},

    car: undefined,

    init(canvas) {
      this.canvasNode = document.querySelector(`#canvas`)
      this.ctx = this.canvasNode.getContext('2d')
      console.log('RACER CAR', this.ctx)
      this.createCar()
      this.drawAll()
      this.start()
      this.clearAll()
      this.setEvenetListeners()
      this.start()
     
      

    
    },


    createCar(){
      
      this.car = new Car(this.ctx, 200, 600, 50, 100)
      
    },

    createObstacle() {
      //this.obstacles.push(
      //new Obstacle(this.ctx, this.gameSize, (Math.random() * (this.gameSize.w - 100)), 0, (Math.random() * (300 - 100), 40))
   
    
    },

    start() {
      setInterval(() => {
      this.clearAll()
      this.drawAll() 
    }, 30)
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
  },

  drawAll() {
    this.drawFilledSquare()
    this.drawSquare()
    this.solidLines()
    this.lineSolid()
    this.lines()
    this.car.draw()
    this.framesIndex++
    if (this.framesIndex % 10 === 0){
      this.createObstacle()
    }
  },
    
    drawFilledSquare() {
      this.ctx.fillStyle = 'green'
      this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
    },
    
    drawSquare(){
      this.ctx.fillStyle = 'grey'
      this.ctx.fillRect(50, 0, this.gameSize.w * 0.8, this.gameSize.h)
    },

    solidLines(){
      this.ctx.lineWidth = 8
      this.ctx.strokeStyle = 'white'

      this.ctx.beginPath()
      this.ctx.moveTo(this.gameSize.w * 0.13, 0)
      this.ctx.lineTo(this.gameSize.w * 0.13, this.gameSize.h)
      this.ctx.stroke()
      this.ctx.closePath() 
           
    },

    lineSolid(){
      this.ctx.lineWidth = 8
      this.ctx.strokeStyle = 'white'

      this.ctx.beginPath()
      this.ctx.moveTo(this.gameSize.w * 0.87, 0)
      this.ctx.lineTo(this.gameSize.w * 0.87, this.gameSize.h)
      this.ctx.stroke()
      this.ctx.closePath()      
    },

    lines(){
      this.ctx.lineWidth = 8
      this.ctx.strokeStyle = 'white'

      this.ctx.beginPath()
      this.ctx.moveTo(this.gameSize.w * 0.5, 0)
      this.ctx.setLineDash([50, 30])
      this.ctx.lineTo(this.gameSize.w * 0.5, this.gameSize.h)
      this.ctx.stroke()
      this.ctx.closePath()      
    },

    setEvenetListeners() {
      document.onkeyup = event => {
        const { key } = event
        if (key === 'ArrowLeft') {
          this.car.moveLeft()
        }

        if (key === 'ArrowRight'){
          this.car.moveRight()
        }
      }
    },

  

   

    }


   



