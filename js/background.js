class Background {
    constructor(ctx) {
        this._ctx = ctx;
        this._img = new Image();
        this._img.src = '../images/road.png';

        this.x = 0;
        this.y = 0;
        this.w = this._ctx.canvas.width;
        this.h = this._ctx.canvas.height;
        this.vx = 0;
        this.vy = 2;
    }

    _draw() {
        this._ctx.drawImage(this._img, this.x, this.y, this.w, this.h)
        this._ctx.drawImage(this._img, this.x, this.y, this.w, 0-this._ctx.canvas.height)
    }

    _move() {
        this.y += this.vy;
        if(this.y === this._ctx.canvas.height) {
            this.y = 0;
        }
    }
}