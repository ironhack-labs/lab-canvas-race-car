class Rectangles {
    constructor(x, y, w, h, color, speed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.speed = speed;
    }

    moveDown() {
        this.y += this.speed;
    }

} 