class Car {
    constructor (ctx) {
        this.ctx = ctx;

        this.x = this.ctx.canvas.width * 0.45;
        this.y = this.ctx.canvas.height * 0.8;


        this.width = 50;
        this.height = 100;


        this._img = new Image();
        this._img.src = './images/car.png';
    }

    draw() {

        this.ctx.drawImage(
            this._img,
            this.x,
            this.y,
            this.width,
            this.height
            );
    }
}