class Car {
    constructor (ctx) {
        this.ctx = ctx;
        this.x = 220;
        this.y = 550;
        this.width = 50;
        this.height = 110;

        this.img = new Image();
        this.img.src = "./images/car.png";

        this.movements = {
            left: false,
            right: false
        }

        this.vx = 0
    }

    draw() {
        this.ctx.save();
        
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height,
        )

        this.ctx.restore();
    }    

    setUpListeners(e) {
        const status = e.type === 'keydown'

        if (e.keyCode === 37) {
            this.movements.left = status
        }

        if (e.keyCode === 39) {
            this.movements.right = status;
        }
        
    }

    move() {
        if (!this.movements.left && !this.movements.right) {
            this.vx = 0
        } if (this.movements.left) {
            this.vx = -4
        } if (this.movements.right) {
            this.vx = 4
        }

        this.x += this.vx

        if (this.x <= 70) {
            this.x = 70
        } if (this.x >= 380) {
            this.x = 380
        }
    }

    colidesWith(obstacle) {
        if (
            this.x < obstacle.x + obstacle.width &&
            this.x + this.width > obstacle.x &&
            this.y < obstacle.y + obstacle.height &&
            this.y + this.height > obstacle.y
        ) {
            return true
        } else {
            return false
        }
    }
}