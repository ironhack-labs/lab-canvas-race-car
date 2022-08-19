class Car {
    constructor(context) {
        this.x = 230;
        this.y = 620;
        this.context = context;
        this.isAlive = true;

        const img = new Image();
        img.src = 'images/car.png';
        // img.addEventListener('load', () => {
        this.img = img;
        this.draw(this.context);
        // })
    }

    // moveUp() {
    //   this.y -= carMove;
    // }
    // moveDown() {
    //   this.y += carMove;
    // }

    kill() {
        this.isAlive = false;
    }

    moveLeft() {
        if (this.x > 65) {
            this.x -= carMove;
        }
    }
    moveRight() {
        if (this.x < 400) {
            this.x += carMove;
        }
    }
    draw() {
        this.context.drawImage(this.img, this.x, this.y, 39.5, 79.5);
        // requestAnimationFrame(this.draw);
    }
}
