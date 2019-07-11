class Player {
    constructor(ctx) {
        this.ctx = ctx
        this.x = 280

        this.keys = {
            ARROW_RIGHT: 39,
            ARROW_LEFT: 37

        }
    }
    showCar() {
        let img = new Image()
        img.src = "./images/car.png"
        this.ctx.drawImage(img, this.x, 230, 60, 80)
    }

    moveCar() {
        document.onkeydown = (e) => {
            switch (e.keyCode) {

                case this.keys.ARROW_RIGHT:
                    this.x += 20
                    break;

                case this.keys.ARROW_LEFT:
                    this.x -= 20
                    break;
            }
        }
    }
}