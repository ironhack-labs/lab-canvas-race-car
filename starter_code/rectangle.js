class Rectangle {
    constructor(ctx, x, y, w, h, color) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.color = color
    }

    draw() {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(
            this.x,
            this.y,
            this.w,
            this.h
        );
    }

}