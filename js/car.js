class Car {
    constructor(ctx, posX, posY, width, size, speed) {
        this.ctx = ctx;
        this.carPos = { 
            x: posX, 
            y: posY 
        }
        this.carSize = { 
            w: width, 
            h: width * 2 
        }
        this.image = undefined;
        this.size = size;
        this.speed = speed;

        this.init();
    }
    init() {
        this.image = new Image();
        this.image.src = 'img/car.png';
    }
    draw() {
        this.ctx.drawImage(this.image, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h);
    }
    moveLeft() {
        this.carPos.x -= 10;
    }
    moveRight() {
        this.carPos.x += 10;
    }

    move() {
        this.moveLeft();
        this.moveRight();
        this.collision();
    }
}