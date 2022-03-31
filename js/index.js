window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    drawingRaceCar.init()

  } 
};



const drawingRaceCar = {
  name: 'Drawing Race Car',
  description: 'Canvas app Race Car ',
  version: '1.0.0', 

  ctx: undefined,
  gameSize: { w: 500, h: 700 },
  car: undefined,
  obstacles:[],
  framesIndex: 0,
  score: 0 ,

  
  init() {
      this.ctx = document.getElementById('canvas').getContext('2d')   
      
     
      this.createCar()            
      this.start()
      this.setEventListeners()
      this.drawAll()

      this.createObstacles()
      this.checkObstacles()
      this.drawScore()
      this.endGame() 
  },

  drawGrass(){
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
},

  
  drawAsphalt(){
      this.ctx.fillStyle = 'grey'
      this.ctx.fillRect(40, 0, this.gameSize.w -80, this.gameSize.h)
  },

  drawSolidLines() {    
      this.ctx.lineWidth = 10
      this.ctx.strokeStyle = 'white'

      this.ctx.beginPath()
      this.ctx.moveTo(60, 0)
      this.ctx.lineTo(60, this.gameSize.h)
      this.ctx.stroke()
      this.ctx.closePath()

      this.ctx.lineWidth = 10
      this.ctx.strokeStyle = 'white'

      this.ctx.beginPath()
      this.ctx.moveTo(440, 0)
      this.ctx.lineTo(440, this.gameSize.h)
      this.ctx.stroke()
      this.ctx.closePath()
  },


  drawDashedLine() {
      this.ctx.lineWidth = 5
      this.ctx.strokeStyle = 'white'

      this.ctx.beginPath()
      this.ctx.moveTo(250, 0)
      this.ctx.setLineDash([60, 20])      
      this.ctx.lineTo(250, this.gameSize.h)
      this.ctx.stroke()
      this.ctx.closePath()
  },


  createCar() {
      this.car = new Car(this.ctx, 200, 580, 60, 100)
  },

 
  start(){
    inrtervalId = setInterval(() =>{
      this.clearAll()
      this.drawAll()
      this.frameIndex ++
    }, 60)

  },

  drawAll() {
    this.drawGrass()
    this.drawAsphalt()
    this.drawSolidLines()
    this.drawDashedLine() 
    this.car.draw()

    this.drawScore()
    this.endGame()
    
    this.obstacles.forEach(elm => {
            elm.moveDown()
            elm.draw()
        })
    // this.frameIndex % 60 === 0 ? this.createObstacles() : null
           
  },

  createObstacles(){
    this.obstacles.push(new Obstacle(this.ctx))
},

  clearAll() {
      this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
  },

  drawScore() {
      this.ctx.font = '30px Arial'
      this.ctx.fillStyle = 'white'
      this.ctx.fillText(`SCORE : ${this.score}`,70, 50)
  },


  // checkObstacles() {
  //     this.obstacles.forEach((elem)=> {

  //         if(this.car.carPos.x < elem.obstaclePos.x + elem.obstacleSize.w &&
  //         this.car.carPos.x + this.car.carSize.w > elem.obstaclePos.x &&
  //         this.car.carPos.y < elem.obstaclePos.y + elem.obstacleSize.h &&
  //         this.car.carSize.h + this.car.carPos.y > elem.obstaclePos.y ) {

  //         this.endGame 

  //         } else {
  //            this.score ++
  //           }
          
  //     })
  // },

  endGame(){

      clearInterval(intervaldId)
          this.ctx.fillStyle = 'black'
          this.ctx.fillRect(0,o, this.gameSize.w, this.gameSize.h)
           
          this.ctx.font = '50px Arial'
          this.ctx.fillStyle = 'red'
          this.ctx.fillText('GAME OVER!',70, 350)

          this.ctx.font = '20px Arial'
          this.ctx.fillStyle = 'white'
          this.ctx.fillText(`final score: ${this.score}`,70, 400)
  },

  setEventListeners() {
      document.onkeyup = event => {
          const { key } = event
          if (key === 'ArrowLeft') {
              this.car.moveLeft()
          }
          if (key === 'ArrowRight') {
              this.car.moveRight()
          }
      }
  },
  
  

  

  
}