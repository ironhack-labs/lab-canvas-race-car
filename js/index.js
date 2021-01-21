window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    drawingApp.init ('canvas')
  }
};


 const drawingApp = {
   name: 'marioKart race app',
   description: 'Canvas app for basic shapes drawing',
   version: '1.0.0',
   license: undefined,
   author: 'Monch',
   canvasTag: undefined,
   ctx: undefined,
   frames: 0,
   car: undefined,
   gameOver: undefined,
   score: undefined,
   obstacle: undefined,
   keys: {
     left: 'ArrowLeft',
     right: 'ArrowRight'
   },
   canvasSize: {
     w: undefined,
     h: undefined
    },
    

    //// INICIALIZAR Y CREAR DIMENSIONES DE MI CANVAS ////

    init(id) {
      this.canvasTag = document.getElementById(id)
      this.ctx = this.canvasTag.getContext('2d')
      this.setDimensions()
      this.createCar()
      this.drawAll()
      this.setEventListeners() 
      this.createGameOver()
     },

    setDimensions() {
      this.canvasSize.w = 500
      this.canvasSize.h = 700
      this.canvasTag.setAttribute('width', this.canvasSize.w)
      this.canvasTag.setAttribute('height', this.canvasSize.h)
     },



     // PISTA DE CARRERAS //

    drawRoad() {
      this.ctx.fillStyle = 'green'
      this.ctx.fillRect(0,0, this.canvasSize.w, this.canvasSize.h)
      this.ctx.fillStyle = 'grey'
      this.ctx.fillRect(50,0, this.canvasSize.w -100, this.canvasSize.h)
     },
      
    drawContinuousLines() {
      this.ctx.setLineDash([0,0])
      this.ctx.lineWidth = 7
      this.ctx.strokeStyle = 'white'
      this.ctx.beginPath()
      this.ctx.moveTo(65, 0)
      this.ctx.lineTo(65, this.canvasSize.h)
      this.ctx.stroke()

      this.ctx.lineWidth = 7
      this.ctx.strokeStyle = 'white'
      this.ctx.beginPath()
      this.ctx.moveTo(this.canvasSize.w -65, 0)
      this.ctx.lineTo (this.canvasSize.w -65, this.canvasSize.h)
      this.ctx.stroke()
     },
       
    
    drawDashedLines() {
      this.ctx.lineWidth = 5
      this.ctx.beginPath()
      this.ctx.setLineDash([50, 30])      
      this.ctx.moveTo(this.canvasSize.w / 2, 0)
      this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
      this.ctx.stroke()
    },



   ///// CREO CARRO DE CARRERAS Y FUNCIÓN DE SUS BOTONES /////

  createCar() {
    this.car = new Car (this.ctx, 150, 550, 100, 100, 'mariokart.png')
  },

  setEventListeners() {
    document.onkeydown = e => {

      if (e.key === this.keys.left){
        this.car.move('left')
      }
      if (e.key === this.keys.right) {
        this.car.move('right')
      }
    }
  },


  
  //// BORRAR Y CREAR EN "x" TIEMPO OBTASCULOS,PISTA Y CARRO DE CARRERAS ////

  drawAll() {
      setInterval(() => {
          this.frames++
          this.frames % 70 === 0 ? this.createObstacle() : null
          this.clearScreen()
          this.drawRoad()
          this.drawDashedLines()
          this.drawContinuousLines()
          this.car.draw()
          this.obstacle.drawObst()
          this.totalScore() //REVISAR---------------------------------------------
      }, 70)
  },

  clearScreen() {
      this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },




  //// CREO MÉTODO PARA TENER LOS OBSTACULOS ALEATORIAMENTE ////

  createObstacle(){
    let differentSizeObstacle=Math.random () * (150 - 20) + 50, 
      x=Math.random () * ((this.canvasSize.w -100-differentSizeObstacle) - 50) + 50
    this.obstacle = new Obstacle (this.ctx, x, 0, differentSizeObstacle, 20)
  },



   //// CREO MÉTODO PARA QUE HAYA COALICIÓN ENTRE CARRO DE CARRERAS Y  OBSTÁCULOS ////

   collision(){ //REVISAR---------------------------------------------
    if (this.obstaclePos.x < this.carPos.x + this.carPos.w &&
      this.obstaclePos.x + this.obstaclePos.w > this.carPos.x &&
      this.obstaclePos.y < this.carPos.y + this.carPos.h &&
      this.obstaclePos.h + this.obstaclePos.y > this.carPos.y){
        this.gameOver.draw(this.carPos.x,this.carPos.y)
        return true
      }
    return false
  },
  

  //// CREO MI GAMEOVER ////

  createGameOver() {
    this.gameOver = new GameOver (this.ctx, 150, 550, 100, 100, 'gameover.png')
  },

  totalScore(){ //REVISAR---------------------------------------------
    //texto CON SCORE
    writeText(score)
    score += 1
    if (collision())
    //Texto game over, pantalla negro
      score = 0
  },

  writeText(text) {
    this.ctx.font = '50px sans-serif'
    this.ctx.fillText(text, 100, 100, 300)
 }
}




//// CREO-DEFINO MI CARRO DE CARRERAS ////

class Car{
   constructor(ctx, carPosX, carPosY, carWidth, carHeight, carImage) {
        this.ctx = ctx

        this.carPos = {
            x: carPosX,
            y: carPosY
        }
        this.carSize = {
            w: carWidth,
            h: carHeight
        }
        this.imageName = carImage
        this.carInstance = undefined
        this.init()
    }

    init() {
        this.carInstance = new Image()
        this.carInstance.src = 'images/mariokart.png'
    }

    draw() {
      this.ctx.drawImage(this.carInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    move(dir) {
        dir === 'left' && this.carPos.x > 50 ? this.carPos.x -= 20 : null
        dir === 'right' && this.carPos.x < (450-this.carSize.w) ? this.carPos.x += 20 : null
    }

 }


 //// CREO-DEFINO MIS OBSTÁCULOS /////

 class Obstacle{
  constructor(ctx, obstaclePosX, obstaclePosY, obstacleWidth, obstacleHeight) {
       this.ctx = ctx

       this.obstaclePos = {
           x: obstaclePosX,
           y: obstaclePosY
       }
       this.obstacleSize = {
           w: obstacleWidth,
           h: obstacleHeight
       }
   }

   drawObst() {
     this.move()
     this.ctx.fillStyle = 'yellow'
     this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    }

   move() {
     this.obstaclePos.y += 30
   }

}



 //// CREO-DEFINO MI GAMEOVER /////

 class GameOver{
  constructor(ctx, gameOverPosX, gameOverPosY, gameOverWidth, gameOverHeight, gameOverImage) {
    this.ctx = ctx

    this.Pos = {
        x: gameOverPosX,
        y: gameOverPosY
    }
    this.carSize = {
        w: gameOverWidth,
        h: gameOverHeight
    }
    this.imageName = gameOverImage
    this.gameOverInstance = undefined
    this.init()
}

   init() {
    this.gameOverInstance = new Image()
    this.gameOverInstance.src = 'images/gameover.png'
}

  draw(ejeX,ejeY) {
    this.ctx.drawImage(this.gameOverInstance, ejeX, ejeY, this.gameOverSize.w, this.gameOverSize.h)
  }
}