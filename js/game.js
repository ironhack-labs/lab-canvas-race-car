class Game {
    constructor (ctx) {
        this.ctx = ctx;
        this.background = new Background(ctx);
        this.car = new Car(ctx);
        this.intervalId = null;
        
    }

    start() {
        this.intervalId = setInterval(() => {
            this.clear();
            this.draw();
            this.move();

        },1000 / 60)
    }

    draw() {
        this.background.draw();
        this.car.draw();
    }

    move() {
        this.car.move();
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}