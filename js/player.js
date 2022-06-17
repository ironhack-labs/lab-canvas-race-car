class Player {
    constructor(ctx) {
        this.ctx = ctx
        this.x = 220
        this.y = ctx.canvas.height - 120
        this.w = 52
        this.h = 106
        this.image = new Image()
        this.image.src = 'images/car.png'
        this.actions = {
            ArrowUp: false,
            ArrowDown: false,
            ArrowLeft: false,
            ArrowRight: false,
        }
        this.setListeners()
    }
    draw() {
        this.ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
    setListeners() {
        document.onkeydown = e => this.switchAction(e.key, true)
        document.onkeyup = e => this.switchAction(e.key, false)
    }
    switchAction(key, value) {
        this.actions[key] = value
        this.actions[key] = value
    }

    move() {
        if (this.actions.ArrowLeft) {
            this.x -= 10
        } else if (this.actions.ArrowRight) {
            this.x += 10
        }

        if (this.actions.ArrowUp) {
            this.y -= 10
        } else if (this.actions.ArrowDown) {
            this.y += 10
        }
    }
}
