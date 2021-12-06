const OBSTACLES_FRAMES = 120

class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.road = new Road(ctx);
    this.car = new Car(ctx);
    this.obstacles = []

    this.intervalId = undefined
    this.fps = 1000 / 60

    this.obstaclesFramesCount = 0

  }

  startGame() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        if(this.obstaclesFramesCount % OBSTACLES_FRAMES === 0){
          this.addObstacle()
          this.obstaclesFramesCount = 0
        }

        //clear
        this.clear()

        //move
        this.move()

        //draw
        this.draw()
        this.obstaclesFramesCount++


      }, this.fps)
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  draw() {
    this.road.draw()
    this.obstacles.forEach(obstacle => obstacle.draw());
    this.car.draw()
  }

  move() {
    this.road.move();
    this.obstacles.forEach(obstacle => obstacle.move());
    this.car.move()
  }
  addObstacle() {
    const max = this.ctx.canvas.width - 60
    const x = Math.floor(Math.random() * max)
    this.obstacles.push(
      new Obstacle(this.ctx, x, 0)
    )
  }


  // (2/3) ASIGNAMOS EL EVENTO CREADO DEL "CAR" AL "GAME"
  setupListener(event) {
    this.car.setupListener(event)
  }
}
