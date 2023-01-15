class Obstacle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    create(){
        ctx.fillStyle = 'darkred';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}