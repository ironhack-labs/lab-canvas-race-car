class Obstacles {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
    }

    update() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height); // % to go through the limits and continue and apears on the opposite side, but no goos
    }
}
