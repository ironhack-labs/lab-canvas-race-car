class Obstacle {
    constructor(game) {
        this.context = game.context;
        this.xMin = 80;
        this.xMax = game.width - 160;
        this.wMin = 80;
        this.wMax = 150;
        this.width = Math.floor(Math.random() * (this.wMax - this.wMin + 1)) + this.wMin;
        this.height = 20;
        this.x = Math.floor(Math.random() * (this.xMax - this.xMin + 1)) + this.xMin;
        this.y = 0;
        this.speed = 2;
    }

    draw(color) {
        this.context.save();
        this.context.fillStyle = color;
        this.context.fillRect(this.x, this.y, this.width, this.height);
        this.context.restore();
    }

    update() {
        this.y += this.speed;
    }

    left() {
        return this.x;
    }
    right() {
        return this.x + this.width;
    }
    top() {
        return this.y;
    }
    bottom() {
        return this.y + this.height;
    }

}