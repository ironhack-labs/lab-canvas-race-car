class Component {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
        this.vel = 2;
    }

    draw() {
        let ctx = Game.ctx
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    moveObstacle() {
        this.y += this.vel
    }
}
    
