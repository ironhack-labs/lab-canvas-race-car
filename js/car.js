class Car {
    constructor(ctx, posX, posY, height, canvasSize) {

        this.ctx = ctx;
        this.carPos = { x: posX, y: posY };
        this.carSize = { w: height * 0.5, h: height };
        this.carImg = './images/car.png';
        this.imageInstance = undefined;
        this.canvasSize = canvasSize;
        this.boundary = 80;
        this.init();
    }
    init() {
        this.imageInstance = new Image();
        this.imageInstance.src = this.carImg;
    }
    draw() {

        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }
    moveLeft() {
        if (this.carPos.x > this.boundary) {
            this.carPos.x -= 5;
        }
    }
    moveRight() {
        if (this.carPos.x < this.canvasSize.w - this.carSize.w - this.boundary) {
            this.carPos.x += 5;
        }
    }
    getPosition() {
        return this.carPos;
    }
    getSize() {
        return this.carSize;
    }
}