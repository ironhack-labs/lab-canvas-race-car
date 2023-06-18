class Game {
    constructor(ctx) {
        this.ctx = ctx,
        this.background = new Background(this.ctx)
        this.lines = new Lines(this.ctx)
        this.car = new Car
            (
                this.ctx,
                this.ctx.canvas.width / 2 - 10,
                this.ctx.canvas.height - 40,
                20,
                20
            )
    }
    start() {
        this.draw();

    }
    draw() {
        this.car.draw();
        this.background.draw();
    }
    move() {

    }
    colition() {

    }
}