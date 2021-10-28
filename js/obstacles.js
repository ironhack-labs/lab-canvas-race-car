const obstacle = {

  ctx: undefined,
  canvasDOM: undefined,
  canvasSize: { w: undefined, h: undefined },
  obstacleArray: [],
  FPS: 60,


  init() {
    this.setContext()
    this.setDimensions()
    this.createobstacleArray()
  },

  setContext() {
    this.canvasDOM = document.querySelector("#canvas")
    this.ctx = this.canvasDOM.getContext("2d")
  },

  setDimensions() {
    this.canvasSize.width = 500
    this.canvasSize.height = 700
  },

  startDraw() {
    this.obstacleArray.forEach(obstacle => obstacle.draw())
  },

  moveAll() {
    this.obstacleArray.forEach(obstacle => {
      
      if (obstacle.posY > this.canvasSize.height - 20) {
        this.obstacleArray.shift();
        gameManager.score++
        console.log(gameManager.score)
        if (gameManager.score >= 10) {
          gameManager.winGame()
        }
      }
      
      obstacle.move()
    })
  },

  createobstacleArray() {

    let randomNum = ((max, min) =>  Math.random() * (max - min) + min)

    setTimeout(() => {
      this.obstacleArray.push(new Obstacle(this.ctx, randomNum(400, 0), 0, randomNum(200, 40), 80, 2));
      this.createobstacleArray();
    }, 2000)

  },

  //COLLISIONS 2D
  detectColion(){
    
    this.obstacleArray.forEach(obstacle => {
      // collision detected!
      if (obstacle.posX < carObj.car.posX + carObj.car.width && obstacle.posX + obstacle.width > carObj.car.posX && obstacle.posY < carObj.car.posY + carObj.car.height && obstacle.height + obstacle.posY > carObj.car.posY) {
         //console.log("Chocado")
         this.obstacleArray.shift();
         gameManager.score--
         if (gameManager.score <= 0) {
          gameManager.loseGame()
        }
      } 
    })
  }
}

class Obstacle {
  constructor(ctx, posX, posY, width, height, speed) {
    this.ctx = ctx

    this.posX = posX
    this.posY = posY

    this.width = width
    this.height = height

    this.speed = speed

  }

  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
  }

  move() {
    this.posY += this.speed
  }

}