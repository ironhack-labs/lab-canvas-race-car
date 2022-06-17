class Car {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = CANVAS_WIDTH / 2 - 35;
        this.y = CANVAS_HEIGHT - 200;
        this.w = 72.8;
        this.h = 150;
        this.vx = 2;
        this.img = new Image();
        this.img.src = "/images/car.png";

        this.actions = {
            left: false,
            right: false
        };

        this._setListeners()
    }

    _setListeners() {
        document.onkeydown = e => this.switchAction(e.key, true)
        document.onkeyup = e => this.switchAction(e.key, false)
    }


    switchAction(key, apply) {
        switch (key) {
            case LEFT:
                this.actions.left = apply
                break;
            case RIGHT:
                this.actions.right = apply
                break;
        }
    }

    move() {
        if (this.actions.right) {
            this.x += this.vx
        }
        if (this.actions.left ) {
            this.x -= this.vx
        }

    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
}