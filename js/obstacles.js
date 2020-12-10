class Obstacles {
    constructor(ctx){
        this.ctx = ctx;

        this.x = 38;
        this.y = 0;
        this.width = 150;
        this.height = 30;
    }

    draw() {
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}