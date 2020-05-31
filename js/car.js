class Car {
    constructor(ctx) {
        this._ctx = ctx;
        this._img = new Image();
        this._img.src = "../images/car.png";

        this.x = (this._ctx.canvas.width / 2) - 25;
        this.y = (this._ctx.canvas.height / 2) - 50;;
        this.w = 50;
        this.h = 100;
        this.vx = 25;
    }

    _draw() {
        this._ctx.drawImage(this._img, this.x, this.y, this.w, this.h)
    }

    _move(direction) {
        switch(direction) {
            case 'moveLeft':
                if (this.x >= 5) this.x -= this.vx;
                break;
            case 'moveRight':
                if (this.x <= this._ctx.canvas.width - 65) this.x += this.vx;
                break;
        }
    }
}