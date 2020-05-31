class Obstacle {
    constructor(ctx) {
        this._ctx = ctx;

        this.w = Math.floor(Math.random() * 100 + 100);
        this.h = 40;
        this.x = Math.floor(Math.random() * (this._ctx.canvas.width - this.w - 100) + 100);
        this.y = -40;
        this.vy = 2;
    }

    _draw() {
        this._ctx.fillStyle = 'red'; 
        this._ctx.fillRect(this.x, this.y, this.w, this.h); 
        this._move();
    }

    _move() {
        this.y += this.vy;
    }
}