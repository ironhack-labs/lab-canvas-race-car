
class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.road = new Road(ctx);
    this.car = new Car(ctx);

  }

  startGame() {
    this.intervalId = setInterval(() => {

      //clear
      this.clear()
      //draw
      this.draw()

      //move
      this.move()



    }, 1000 / 60)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }
  draw() {
    this.road.draw();
    this.car.draw()
  }
  move() {
    this.road.move()
    this.car.move()
  }


  // (2/3) ASIGNAMOS EL EVENTO CREADO DEL "CAR" AL "GAME"
  setupListener(event) {
    this.car.setupListener(event)
  }
}
