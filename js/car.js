class Car {
    constructor(ctx, posX, posY, height, canvasSize) {

        this.ctx = ctx;
        this.carPos = { x: posX, y: posY };
        this.carSize = { w: height * 0.5, h: height };
        this.jumpingCarSize = { w: height * 0.5 * 1.5, h: height * 1.5 };
        this.jumping = false;
        this.jumpingCounter = 30;
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
        if (!this.jumping) {
            this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
        } else {
            this.jumpingCounter--;
            this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.jumpingCarSize.w, this.jumpingCarSize.h)
            if (this.jumpingCounter <= 0) {
                this.jumping = false;
                this.jumpingCounter = 30;
            }
        }

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
    jump() {
        if (!this.jumping) {
            this.jumping = true;
        }
    }
    getPosition() {
        if (this.jumping) {
            return { x: 0, y: 0 };
        } else {
            return this.carPos;
        }

    }
    getSize() {
        if (this.jumping) {
            return { w: 0, h: 0 };
        } else {
            return this.carSize;
        }

    }
}