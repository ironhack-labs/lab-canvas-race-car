class Car {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = 60;
        this.h = 100;
        this.vx = 0;
        this.imgCar = new Image();
        this.imgCar.src = './images/car.png';
        this.imgCar.isReady = false;
        this.imgCar.onload = () => {
            this.imgCar.isReady = true;
        }
    }

    isReady() {
        return this.imgCar.isReady;
    }

    draw() {
        if (this.isReady()) {
            this.ctx.drawImage(
                this.imgCar,
                this.x,
                this.y,
                this.w,
                this.h
            )
        }
    }

    move() {
        this.x += this.vx;

        if (this.x + this.w >= this.ctx.canvas.width) {
            this.x = this.ctx.canvas.width - this.w;
            this.vx = 0;
        }

        if (this.x <= 0) {
            this.x = 0;
            this.vx = 0;
        }
    }

    collidesWith(element) {
        return this.x < element.x + element.width &&
            this.x + this.w > element.x &&
            this.y < element.y + element.height &&
            this.y + this.x > element.y
    }
}