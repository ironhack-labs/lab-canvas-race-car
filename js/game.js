
class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.road = new Road(ctx);
    this.car = new Car(ctx);
    this.obstacles = []
    console.log(this.obstacles)
  }

  startGame() {
    this.intervalId = setInterval(() => {

      //clear
      this.clear()

      //move
      this.move()

      //draw
      this.draw()

    }, 1000 / 60)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  draw() {
    this.obstacles.forEach(obstacle => obstacle.draw())
    this.road.draw();
    this.car.draw()
  }

  move() {
    this.obstacles.forEach(obstacle => obstacle.move())
    this.road.move()
    this.car.move()
  }
  addObstacle() {
    const max = this.ctx.canvas.width - 60
    const x = Math.floor(Math.tandom() * max)
    this.obstacles.push(
      new Obstacle(this.ctx, this.ctx.canvas.height, this.x)
    )
  }

  // (2/3) ASIGNAMOS EL EVENTO CREADO DEL "CAR" AL "GAME"
  setupListener(event) {
    this.car.setupListener(event)
  }
}
