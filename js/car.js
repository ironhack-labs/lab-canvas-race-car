class Car {
    constructor(ctx, posX, posY, width, gameSize) {
        this.ctx = ctx;
        this.pos = { x: posX, y: posY };
        this.carSize = { w: width, h: width * 1.2 };
        this.gameSize = gameSize;
        this.imageInstance = undefined;

        this.init();
    }

    init() {
        this.imageInstance = new Image();
        this.imageInstance.src = 'images/car.png';
    }
    draw() {
        this.ctx.drawImage(this.imageInstance, this.pos.x, this.pos.y, this.carSize.w, this.carSize.h);
    }
    moveLeft() {
        this.pos.x -= 20;
    }
    moveRight() {
        this.pos.x += 20;
    }
}