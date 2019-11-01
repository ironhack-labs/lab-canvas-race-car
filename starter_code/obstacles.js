class Obstacle {
    constructor(ctx, width, height, x, y) {
        this._width = width;
        this._height = height;
        this._posX = x;
        this._posY = y;
        this._ctx = ctx;

        this._speedX = 0;
        this._speedY = 0;
    }


    update() {
        this._posY += 5
        this._ctx.fillStyle = 'white'
        this._ctx.fillRect(this._posX, this._posY, this._width, this._height);
    }
}
