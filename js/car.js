
class Car {
    constructor() {
        this.x = 221;
        this.y = 570;
    }

    draw() {
        let img = new Image()
        img.src = "../images/car.png"
        ctx.drawImage(img, this.x, this.y, 60, 100);
        requestAnimationFrame(this.draw)

    }

    moveLeft() {
        if (this.x > 48) {
            this.x -= 5;
        }
    }

    moveRight() {
        if (this.x < 395) {
            this.x += 5;
        }
    }

}