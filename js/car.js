class Car extends GameObject{
    constructor(ctx) {
        super(ctx)

        this.x = this._ctx.canvas.width * 0.5;
        this.y = this._ctx.canvas.height * 0.8;
        this.w = 40;
        this.h = 100;
        this._img.src = './images/car.png'

    }
}