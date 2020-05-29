class Background {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.width = this.ctx.canvas.width
        this.height = this.ctx.canvas.height
        this._img = new Image();
        this._img.src = './images/road.png';

    }

    draw() {

        this.ctx.drawImage(this._img, this.x, this.y, this.width, this.height);

    }
}