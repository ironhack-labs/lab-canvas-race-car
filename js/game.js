class Game {
    constructor (ctx) {
        this.ctx = ctx;
        this.background = new Background(ctx);
        this.intervalId = null;
        
    }

    start() {
        this.intervalId = setInterval(() => {
            this.clear()
            this.draw();
        },1000 / 60)
    }

    draw() {
        this.background.draw()
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }
}