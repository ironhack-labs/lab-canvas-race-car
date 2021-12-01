class Juego {
    constructor(ct) {
        this.ctx = ctx;

        this.background = new Background(ctx)
        this.car = new Car(ctx, 30, 300)

        this.intervalId = undefined;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.clear()
            this.move()
            this.draw()

        }, 1000 / 60);
    }
    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }
    move() {
        this.road.move()
    }
    draw() {
        this.road.draw();
        this.car.draw();
    }
}