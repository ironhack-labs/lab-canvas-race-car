class Game {
    constructor(canvasId) { //canvasId es el Id del canavs que estoy llamando en el index en cuanto se cargue el DOM
        this.intervalId = null // pongo el interval en null para poderlo reutilizar
        this.intervalId2 = null

        const canvas = document.getElementById(canvasId) //encuentro el canvas

        this.ctx = canvas.getContext("2d") // creo el contexto

        this.background = new Background(this.ctx) // creo un nuevo background

        this.car = new Car(this.ctx)

        this.obstacles = [
            new Obstacle(this.ctx)
        ]

        this.drawCount = 0 

        this.score = new Score(this.ctx)
    }

    startGame() {
        this.intervalId = setInterval(() => {
            this.clear()
            this.move()
            this.draw()
            this.checkCollisions()
            this.clearObstacles()
           if(this.drawCount > 150){
                this.drawCount = 0
                this.addObstacle()
            }
        }, 1000 / 60) 
    }
    
    updateScore() {
        this.score.value += 20
      }

    clearObstacles() {
        this.obstacles = this.obstacles.filter((o) => {
          if (o.isVisible()) {
            return true
          } else {
            this.updateScore()
          }
        })
      }

      addObstacle() {
        const newObstacle = new Obstacle(this.ctx)
        this.obstacles.push(newObstacle)
      }

    draw() {
        this.drawCount++
        this.background.draw() //llamo la funcion draw de this.background
        this.car.draw()
        this.obstacles.forEach(o => o.draw())
        this.score.draw()
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    move() {
        this.car.move()
        this.obstacles.forEach(o => o.move())
    }

    checkCollisions() {
        const collision = this.obstacles.some(obstacle => {
          const colX = (
            this.car.x + this.car.w >= obstacle.x &&
            this.car.x <= obstacle.x + obstacle.w
          )
    
          const colY = (
            this.car.y + this.car.h >= obstacle.y &&
            this.car.y <= obstacle.y + obstacle.h
          )
    
          return colX && colY
        })
    
        if (collision) {
          this.gameOver()
        
        }
      }
    onKeyEvent(event) {
        this.car.onKeyEvent(event)
    }

    gameOver() {
        clearInterval(this.intervalId)
    
        this.ctx.font = "40px Comic Sans MS";
        this.ctx.textAlign = "center";
        this.ctx.fillText(
          "GAME OVER",
          this.ctx.canvas.width / 2,
          this.ctx.canvas.height / 2
        );
      }
}