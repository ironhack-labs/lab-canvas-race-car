/**@type{HTMLCanvasElement} */

class Car {
    constructor(x, y, w, h, ctx, color) {
        this.x = x;
        this.y = y;

        this.w = w;
        this.h = h;

        this.image = new Image();
        this.color = color;
        this.ctx = ctx;

        this.speedX = 0;
        this.speedY = 0;
    }

    draw() {
        this.image.src = "/images/car.png";
        this.ctx.drawImage(this.image, this.x,this.y, this.w, this.h);

        this.ctx.fillStyle = "rgba(0,0,0,0)";
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    top() {
        return this.y
    }

    bottom() {
        return this.y + this.h
    }

    left() {
        return this.x;
    }

    right() {
        return this.x + this.w;
    }

    crashWith(enemy) {
        return !(
            this.bottom() < enemy.top() || 
            this.top() > enemy.bottom() || 
            this.right() < enemy.left() ||
            this.left() > enemy.right()
        );
    }
}