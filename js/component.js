/** @type {HTMLCanvasElement} */

class Component {
    constructor(x, y, w, h, color, ctx) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.ctx = ctx;
        this.speedX = 0;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    newPosition() {
        this.x += this.speedX;
    }

    // methods for the square of the enemy

}