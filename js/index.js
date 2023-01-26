window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    simpleCarGame.init()
  }
};

const simpleCarGame = {
  name: "Simple car game",
  timer : 1,
  description: 'A simple car game made with canvas',
  version: '1.0.0',
  license: undefined,
  author: 'Ángeles Figueredo',
  ctx: undefined,
  canvasTag: undefined,
  carInstance: undefined,
  score : 0,
  size: {
    w: undefined,
    h: undefined
  },
  gameOver: false,
  moveLeft :false,
  moveRight :false,
  obstacles : [],
  car: {
    position: {
      x: 200,
      y: 500,
    },
    size : {
      w: 70,
      h: 140
    }
  },

  init() {
    this.setContext()
    this.getCanvaSizes()
    this.createCar()
    this.start()
    this.setEventListeners()
    
  },
  setContext() {
    this.canvasTag = document.querySelector('canvas')
    this.ctx = this.canvasTag.getContext('2d')
  },
  getCanvaSizes(){
    this.size.w = this.canvasTag.width
    this.size.h = this.canvasTag.height
  },
  start(){
    setInterval(()=>{
      if(!this.gameOver){

        this.timer ++
          this.clearAll()
          this.drawAll()
          
          if(this.moveLeft){
            this.moveCarLeft()
          }
          if(this.moveRight){
            this.moveCarRight()
          }
          if(this.timer  === 35){
            this.timer = 0
            this.score ++
            obstacle = new Obstacle(this.car.size.w, 65, this.size.w - 65, this.ctx)
            obstacle.positionateRandom()
            this.obstacles.push(obstacle)
          }
          this.obstacles.forEach((eachObstacle)=>  eachObstacle.move())
          this.collider()}

      else{
        this.clearAll()
        this.drawGameOver()
        this.drawGameOverText()

      }
    }, 20)
  },
  drawRoad(){
    this.ctx.fillStyle = "green"
    this.ctx.fillRect(0, 0, this.size.w, this.size.h)
    this.ctx.fillStyle = "gray"
    this.ctx.fillRect(50, 0, this.size.w -100 , this.size.h)
    this.ctx.fillStyle = "white"
    this.ctx.fillRect(65, 0, 5, this.size.h)
    this.ctx.fillStyle = "white"
    this.ctx.fillRect(this.size.w -65, 0, 5, this.size.h)
    this.ctx.beginPath()
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 5
    this.ctx.setLineDash([60, 30])      
    this.ctx.moveTo(this.size.w / 2, 0)
    this.ctx.lineTo(this.size.w / 2, this.size.h )
    this.ctx.stroke()
    this.ctx.closePath()
  },
  createCar(){
    this.carInstance = new Image()
    this.carInstance.src = './images/car.png'
    
  },
  drawCar(){
    this.ctx.drawImage(this.carInstance, this.car.position.x, this.car.position.y, this.car.size.w, this.car.size.h)
  }, 
  drawAll(){
    this.drawRoad()
    this.drawCar()
    this.drawScore()
    this.obstacles.forEach((eachObstacle) => eachObstacle.drawObstacle())
    
  },
  drawGameOver(){

    this.ctx.fillStyle = "black"
    this.ctx.fillRect(0, 0, this.size.w, this.size.h)
  },
  drawGameOverText(){
    this.ctx.font = '50px arial'
    this.ctx.fillStyle = "#FFFFFF"
    this.ctx.fillText("Game Over ", 110, this.size.h / 2)
    this.drawScore()
  },
  clearAll(){
    this.ctx.clearRect(0, 0, this.size.w, this.size.h)
  },
  
    
  moveCarLeft(){
    if (this.car.position.x > 0) this.car.position.x -= 10
  },
  moveCarRight(){
    if (this.car.position.x < this.size.w - this.car.size.w) 
    {this.car.position.x += 10}
  },

  setEventListeners() {
    document.onkeydown = evt => {
      if (evt.key === 'ArrowLeft') this.moveLeft = true
      if (evt.key === 'ArrowRight') this.moveRight = true
    }
    document.onkeyup = evt => {
      if (evt.key === 'ArrowLeft') this.moveLeft = false
      if (evt.key === 'ArrowRight') this.moveRight = false
    }


  },
  collider(){
    this.obstacles.forEach((obstacle) => {
      const rect1x = this.car.position.x 
      const rect1y = this.car.position.y
      const rect1w = this.car.size.w
      const rect1h = this.car.size.h
      const rect2x = obstacle.position.x
      const rect2y = obstacle.position.y
      const rect2w = obstacle.width
      const rect2h = obstacle.height

      if (rect1x < rect2x + rect2w &&
        rect1x + rect1w > rect2x &&
        rect1y < rect2y + rect2h &&
        rect1h + rect1y > rect2y) {
        this.gameOver = true
      } 
    })
  },
  drawScore(){
    this.ctx.font = '50px arial'
    this.ctx.fillText("Score: "+ this.score, 130, 100)
  }


}
