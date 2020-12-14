class Game {
  constructor(ctx) {
    this.ctx = ctx

    this.background = new Background(ctx)
    this.car = new Car(ctx)
    this.obstacleArray = []
    
    setInterval(() => {
      this.obstacleArray.push(new Obstacle(ctx))
    }, 1000)
    


    this.interval = undefined
  }

  start() {

    this.setListeners()

    this.inverval = setInterval(() => {
      this.clear()
      this.draw()
      this.move()
      this.colision()
    }, 1000 / 60)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  draw() {
    this.background.draw()
    this.car.draw()
    this.obstacleArray.forEach(obs => obs.draw())
  }

  move() {
    this.background.move()
    this.car.move()
    this.obstacleArray.forEach(obs => obs.move(this.obstacleArray.length))
  }

  colision(){
    if(this.obstacleArray.some(obs => this.car.checkColision(obs))){
      alert('Game Over')
    }
  }

  setListeners() {
    document.onkeydown = event => {
      switch (event.key) {
        case TOP:
          this.car.vy = -10
          break;
        case RIGHT:
          this.car.vx = 10
          break;
        case LEFT:
          this.car.vx = -10
          break;
        case BOTTOM:
          this.car.vy = 10
          break;
      }
    }

    document.onkeyup = event => {
      switch (event.key) {
        case RIGHT:
        case LEFT:
          this.car.vx = 0
          break;
        case BOTTOM:
        case TOP:
          this.car.vy = 0
          break;
      }
    }
  }
}


const TOP = 'ArrowUp'
const RIGHT = 'ArrowRight'
const BOTTOM = 'ArrowDown'
const LEFT = 'ArrowLeft'