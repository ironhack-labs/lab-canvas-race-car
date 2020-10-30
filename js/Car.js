class Car {
    constructor(ctx, carPosX, carPosY, carWidth, carHeight, carImage) {
        this.ctx = ctx;
        this.carPos = {
            x: carPosX,
            y: carPosY
        };
        this.carSize = {
            w: carWidth,
            h: carHeight
        };
        this.imageName = carImage;
        this.carInstance = undefined;
        this.init();
    }

    init() {
        this.carInstance = new Image();
        this.carInstance.src = `images/${this.imageName}`
    }

    draw() {
        this.ctx.drawImage(this.carInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }
    move(dir) {
        if (dir === 'left' && this.carPos.x >= 30) {
            this.carPos.x -= 20
        } else null

        if (dir === 'right' && this.carPos.x < 370) {
            this.carPos.x += 20
        } else null
    }
}