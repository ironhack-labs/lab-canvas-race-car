class Car {
    constructor(ctx) {
        this._ctx = ctx
        this._tick = 0

        this.x = this._ctx.canvas.width / 2 - 25
        this.y = this._ctx.canvas.height - 139
        this.vx = 0
        this.vy = 0
        this.turnV = 3

        this.w = 50
        this.h = 100

        this.actions = {
            right: false,
            left: false
        }

        this._img = new Image()
        this._img.src = "./images/car.png"

        this._setListeners()
    }

    draw() {
        this._ctx.drawImage(
            this._img,
            this.x,
            this.y,
            this.w,
            this.h
        )
    }

    move() {
        this._setActions()
        this.x += this.vx
        this.y += this.vy
    }

    _setListeners() {
        document.addEventListener('keydown', e => {
            this._switchActions(e.keyCode, true)
        })

        document.addEventListener('keyup', e => {
            this._switchActions(e.keyCode, false)
        })
    }

    _switchActions(key, action) {
        switch (key) {
            case LEFT:
                this.actions.left = action
                break;
            case RIGHT:
                this.actions.right = action
                break;
        }
    }

    _setActions() {
        if (this.actions.right) {
            this.vx = this.turnV
        } else if (this.actions.left) {
            this.vx = -this.turnV
        } else {
            this.vx = 0
        }
    }


}