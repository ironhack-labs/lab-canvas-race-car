class Player {
    constructor(game) {
        this.width = 40;
        this.height = 80;
        this.context = game.context;
        this.x = game.width / 2 - this.width;
        this.y = game.height / 2 + this.height;

        this.speedX = 0;
        this.image = new Image();
        this.image.onload = this.draw();
        this.image.src = "images/car.png";

    }

    draw() {
        this.context.save();
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
        this.context.restore();
    }

    update() {
        this.x += this.speedX;
        if (this.x < this.width * 2) {
            this.speedX = 0;
            this.x = this.width * 2;

        }

        if (this.x + (this.width * 3) > game.width) {
            this.speedX = 0;
            this.x = game.width - (this.width * 3);
        }
        // if (this.x <= 80) {
        //     this.speedX = 0;
        // }

        // if (this.x >= game.width - 40 - 160) {
        //     this.speedX = 0;
        // }

    }

    setControls() {
        window.addEventListener("keydown", event => {
            switch (event.keyCode) {

                case 39: // right key
                    this.speedX = 3;
                    // if (this.x + (this.width * 3) > game.width) {
                    //     this.speedX = 0;
                    //     this.x = game.width - (this.width *3);
                    // }
                    break;
                case 37: // left key
                    this.speedX = -3;
                    // if (this.x < this.width*2) {
                    //     this.speedX = 0;
                    //     this.x = this.width * 2;

                    // }
                    break;
            }
        });

        window.addEventListener("keyup", event => {
            this.speedX = 0;

        });
    }

    left() {
        return this.x;
    }
    right() {
        return this.x + this.width;
    }
    top() {
        return this.y;
    }
    bottom() {
        return this.y + this.height;
    }

    crashWith(obstacle) {
        return !(
            this.bottom() < obstacle.top() ||
            this.top() > obstacle.bottom() ||
            this.right() < obstacle.left() ||
            this.left() > obstacle.right()
        );
    }



}