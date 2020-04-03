window.onload = () => {
  document.getElementById('start-button').onclick = () => {
      
    

    const game ={
      name: "Game car race",
      author: "Julian",
      version: "1.0.0",
      description: "Juego de esquivar obstaculos con un coche",
      license: undefined,

      canvasDom: undefined,
      ctx: undefined,

      canvasSize: {
        height: 700,
        width: 500
      },
      playerId: undefined,

      counter: 0,
      rate: 50,
      obstaclesArr: [],

      car: {
        posX: this.canvasSize.width - 158,
        posY: this.canvasSize.height - 319,

        width: 158,
        height: 319,
        speed: 20,
      },
      limits: {
        leftlimit: 60,
        rightlimit: 400,
      },
      keyStatus: {
        keyLeft: false,
        keyRight: false
      },

      endGame: false,
      score: 0,

      init() {
        this.canvasDom = document.getElementById("canvas")
        this.canvasDom.width = this.canvasSize.width
        this.canvasDom.height = this.canvasSize.height
        this.ctx = this.canvasDom.getContext('2d')
        this.playerId = setInterval(() => {

          this.clearScreen()
          this.drawRoadBackground()
          this.drawObstacle()
          this.generateObstacles()
          this.colisionDetection()
          this.clearScreen()

          document.addEventListener("keydown", e => {
            e.preventDefault()

            if (e.keyCode === 37) {
              this.keyStatus.keyLeft = true
            }
            if (e.keyCode === 39) {
              this.keyStatus.keyRight = true
            }
          })

          document.addEventListener("keyup", e => {
            e.preventDefault()

            if (e.keyCode === 37) {
              this.keyStatus.keyLeft = false
            }
            if (e.keyCode === 39) {
              this.keyStatus.keyRight = false
            }
          })

          this.counter++
          if (this.endGame === true) {
            clearInterval(this.playerId)
          }

        }, 1000)

      },


      drawRoadBackground() {

        //Green rectangle
        this.ctx.beginPath()
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(0, 0, this.canvasSize.width, this.canvasSize.height)
        this.ctx.closePath()

        //Road
        this.ctx.beginPath()
        this.ctx.fillStyle = "grey"
        this.ctx.fillRect(50, 0, this.canvasSize.width - 100, this.canvasSize.height)
        this.ctx.closePath()

        //White continious line left
        this.ctx.beginPath()
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(60, 0, 15, this.canvasSize.height)
        this.ctx.closePath()

        //White continious line right
        this.ctx.beginPath()
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(445, 0, 15, this.canvasSize.height)
        this.ctx.closePath()

        //White line center
        this.ctx.beginPath()
        this.ctx.lineWidth= "8"
        this.ctx.setLineDash([50,40])
        this.ctx.moveTo(this.canvasSize.width/2, this.canvasSize.heigth + this.counter)
        this.ctx.lineTo(this.canvasSize.width/2, -this.canvasSize.height)
        this.ctx.strokeStyle = "white"
        this.ctx.stroke()
        this.ctx.closePath()

      },

      drawObstacle () {
        if (this.counter % this.rate === 0) {
          this.obstaclesArr.push(new Obs())
        }
      },

      generateObstacles () {
        this.obstaclesArr.forEach(obs => {
          obs.y++
          this.ctx.beginPath()
          this.ctx.fillStyle = "blue"
          this.ctx.fillRect(obs.x, obs.y, obs.w, obs.h)
          this.ctx.closePath
        })
      },

      colisionDetection () {
        this.obstaclesArr.forEach(obs => {
          if(
            car.posX + car.carW > obs.x &&
            car.posX < obs.x + obs.w &&
            car.posY < obs.y + obs.h &&
            car.posY + car.carH > obs.y 
          ) {
            this.endGame = true
            alert("GAME OVER")
          }
        })
      },

      clearScreen() {
        this.ctx.clearRect(0,0, this.canvasSize.width, this.canvasSize,height)
      }

    }

    class Car{

      constructor(ctx, posX, posY, carW, carH, canvasSize, speed){
        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        this.carW = carW
        this.carH = carH
        this.canvasSize = {
          width: canvasSize.width,
          height: canvasSize.height
        }
        this.speed = speed
        this.car = undefined

      }

      init() {
        this.car = new Image()
        this.car.src = "img/car.png"
        this.car.onload = () => this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH, this.speed)
      }

      moveCar() {
        if (game.keyStatus.keyLeft && this.carX > game.limits.leftlimit) {
          this.carX -= this.speed
        }
        if (game.keyStatus.keyRight && this.carX > game.limits.rightlimit){
          this.carX += this.speed
        }

      }

      drawCar() {
        this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH, this.speed)
      }

    }

    class obs {
      constructor () {
        this.canvasDom = document.getElementById("canvas")
        this.ctx = this.canvasDom.getContext("2d")
        this.x = this.randomInt(15,400)
        this.y = 0
        this.w = this.randomInt(60, 300)
        this.h = 25
      }

      randomInt(min,max) {
        return Math.floor(Math.random() * (max - min +1) +min)
      }
    }
  };

};
