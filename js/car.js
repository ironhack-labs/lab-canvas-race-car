class Car {
    constructor(ctx, gameSize, posX, posY, width, height) {
        this.ctx = ctx;
        this.carPos = { x: posX, y: posY };
        this.carSize = { w: width, h: height };
        this.imageInstance = undefined;
        this.gameSize = gameSize;

        this.init();
    }

    init() {
        this.imageInstance = new Image();

        this.imageInstance.src = "images/car.png";
    }

    draw() {
        this.ctx.drawImage(
            this.imageInstance,
            this.carPos.x,
            this.carPos.y,
            this.carSize.w,
            this.carSize.h
        );
    }

    moveLeft() {
        if (this.carPos.x > 0) {
            this.carPos.x -= 10;
        } else
            this.carPos.x = 0
            
    }

    moveRight() {
        if (this.carPos.x <= this.gameSize.w - this.carSize.w) {
            this.carPos.x += 10;
        } else
           this.carPos.x = this.gameSize.w - this.carSize.w;
    }
}
