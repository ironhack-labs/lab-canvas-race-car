class Obstacles {
    constructor(ctx, gameSize) {
        this.ctx = ctx;
        this.pos = { x: this.obsPos(), y: 0 };
        this.obsSize = { w: this.obsWidth(), h: 50 };
        this.gameSize = gameSize;

        this.init();
    }

    init() {
        this.obsWidth();
        this.obsPos();
        this.drawObs();
        this.move();
    }

    drawObs() {
        this.ctx.fillStyle = '#890000';
        this.ctx.fillRect(this.pos.x, this.pos.y, this.obsSize.w, this.obsSize.h);
    }
    obsWidth() {
        const range = { min: 120, max: 200 },
            delta = range.max - range.min;

        let rand = Math.round(range.min + Math.random() * delta);
        return rand;
    }
    obsPos() {
        const range = { min: 50, max: 300 },
            delta = range.max - range.min;

        let rand = Math.round(range.min + Math.random() * delta);
        return rand;
    }
    move() {
        this.pos.y += 5;
    }
}