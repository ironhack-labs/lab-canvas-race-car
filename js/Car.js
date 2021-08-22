class Car {
    constructor(ctx, width, height, canvasSize) {
        this.ctx = ctx;
        this.carSize = { w: width, h: height };
        this.canvasSize = canvasSize;
        this.image = undefined;
        this.carPosition = {
            x: this.canvasSize.w / 2 - 50,
            y: this.canvasSize.h - 140,
        };
        this.moveLeft = false
        this.moveRight = false
        this.image = new Image();
        this.image.src = `./images/car.png`;

    }

    drawCar() {
        this.ctx.drawImage(
            this.image,
            this.carPosition.x,
            this.carPosition.y,
            this.carSize.w,
            this.carSize.h
        );
    }

    move() {
        this.carPosition.x <= this.canvasSize.w - 130 && this.moveRight ? this.carPosition.x += 4 : null
        this.carPosition.x >= 30 && this.moveLeft ? this.carPosition.x -= 4 : null
    }

}