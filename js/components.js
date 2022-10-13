class Car {
    constructor(x, y, w, h, color, ctx) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.ctx = ctx;
        this.speedX = 0;
        const img = new Image();
        img.addEventListener('load', () => {
            this.img = img;
            this.draw();
        })
        img.src = '../images/car.png';
    }

    newPosition() {
        this.x += this.speedX;
    }

    draw() {
        ctx.drawImage(this.img, this.x, this.y, 50, 100);
    }

    left() {
        return this.x;
    }
    right() {
        return this.x + this.w
    }
    top() {
        return this.y
    }

    bottom() {
        return this.y + this.h
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


class Component {
    constructor(x, y, w, h, color, ctx) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.ctx = ctx;
        this.speedX = 0;
    }

    newPosition() {
        this.x += this.speedX;
    }

    draw(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    left(){
        return this.x;
    }
    right(){
        return this.x + this.w
    }
    top(){
        return this.y
    }

    bottom(){
        return this.y + this.h
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