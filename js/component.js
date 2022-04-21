class Car {
    constructor(x, y) {
        this.width = 50;
        this.height = 50;
        this.image = new Image();
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.image.src = "../images/car.png";
    }

    moveLeft() {
        if (this.x > 0) {
            this.x -= 3;
        }
    }
    moveRight() {
        if (this.x + this.width < cWidth) {
            this.x += 3;
        }
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

    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    update() {

        ctx.drawImage(
            this.image,
            this.x,
            this.y,
            this.image.width / 3,
            this.image.height / 3
        );

    }
}

class Obstacle {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
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

    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    update() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}