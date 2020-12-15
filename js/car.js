class Car {
    constructor(ctx, x, y, w, h, img) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.vx = 1
        this.img = img
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    move(moveX) {
        let newMoveX = this.x + moveX
        if (newMoveX > 0 && newMoveX < this.ctx.canvas.width - this.w) {
            this.x = newMoveX
        }
    }

    collides(col) {
        return this.x < col.x + col.width &&
            this.x + this.w > col.x &&
            this.y < col.y + col.height &&
            this.y + this.x > col.y
    }
}