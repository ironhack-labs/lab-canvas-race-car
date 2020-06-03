class Obstacle {
    constructor(ctx) {
        this._ctx = ctx

        this.w = Math.random() * 250 + 100
        this.h = 30

        this.x = Math.random() > 0.5 ? 0 : 500 - this.w
        this.y = 0 - this.h

        this.vy = 3
    }

    draw() {
        this._ctx.fillStyle = "#961d0f"
        this._ctx.fillRect(
            this.x,
            this.y,
            this.w,
            this.h
        )

    }

    move() {
        this.y += this.vy
    }

    isVisible() {
        return (
          this.y < this._ctx.canvas.height
        )
    }
}