class Obstacle {
    constructor(ctx, gameSize,speed) {
        this.ctx = ctx;
        this.gameSize = gameSize;
        this.obstSize = { w: this.generateRandomInt(100, 200), h: 20 };
        this.obstPos = {
            x: this.generateRandomInt(25, this.gameSize.w - this.obstSize.w - 25),
            y: 0,
        };
        this.speed = speed

        this.init();
    }

    init() {}

    generateRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    drawRandomObstacle() {

        
        this.ctx.fillStyle = "orange";
        this.ctx.fillRect(
            this.obstPos.x,
            this.obstPos.y,
            this.obstSize.w,
            this.obstSize.h
        );
    }

    move() {
        this.obstPos.y += this.speed;

    }
    
}
