class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.background = new Background(ctx);
        this.car = new Car(ctx)
        this.intervalId = null;
        this.w = this.ctx.canvas.width;
        this.h = this.ctx.canvas.heigth;
    }

    start() {
        this.intervalID = setInterval(() => {
            this.clear();
            this.draw();
            this.move();
        }, 1000/60);
    }

    draw() {
        this.background.draw();
        this.car.draw() ;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.w, this.h)
    }

    move() {
        this.background.move()
        this.car.move()
    }
}