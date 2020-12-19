class Car {

    constructor(ctx, x, y) {
        this.ctx = ctx
        this.x = x
        this.y = y

        this.heigth = 150
        this.width = 70

        this.speed = 9
        this.vx = 0
        this.vy = 0

        this.img = new Image();
        this.img.src = './images/car.png'
        this.img.isReady = false;

        this.img.onload = () => {
            this.img.isReady = true;
        }

        this.movements = {
            right: false,
            left: false
        }
        this.score = 0

    }

    isReady() {
        return this.img.isReady
    }

    draw() {
        if (this.isReady()) {
            this.ctx.drawImage(
                this.img, 
                this.x, 
                this.y, 
                this.width, 
                this.heigth
            )
        }
    }

    onKeyEvent(event) {
        const status = event.type === 'keydown'

        switch (event.keyCode) {
            case KEY_RIGHT:
                this.movements.right = status
                break;
            case KEY_LEFT:
                this.movements.left = status
                break;
            default:
                break;
        }
    }
    move() {


        if (this.movements.right) {
            this.vx = this.speed*2

        } else if (this.movements.left) {
            this.vx = - this.speed*2

        } else {
            this.vx = 0
        }

        this.x += this.vx




        if (this.x + this.width >= this.ctx.canvas.width) {
            this.x = this.ctx.canvas.width - this.width

        } else if (this.x <= 0) {
            this.x = 0
        }
    }

    collisionWith(obstacle) {

        if (this.y <= obstacle.y + obstacle.heigth
            && this.x + this.width >= obstacle.x
            && this.x <= obstacle.x + obstacle.width
            && this.y + this.heigth >= obstacle.y
        ) {
            return true
        }
    }
}
