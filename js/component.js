/** @type {HTMLCanvasElement} */

class Component{
    constructor(x, y, width, height, ctx){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.image = new Image();
        this.speedX = 0;
        this.speedY = 0;
    }
    draw(){
        this.image.src="/images/car.png"
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

    }
    newPos(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    top(){
        return this.y;
    }
    
    bottom(){
        return this.y + this.height;
    }

    left(){
        return this.x;
    }

    right(){
        return this.width + this.x;
    }

    crashWith(obstacle){
        return !(
            this.bottom() < obstacle.top() ||
            this.top() > obstacle.bottom() ||
            this.right() < obstacle.left() ||
            this.left() > obstacle.right()
            );
    }
}

class Obstacle{
    constructor(x, y, width, height, ctx){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.image = new Image();
        this.speedX = 0;
        this.speedY = 0;

        this.img.src = '/images/logs.png';
    }

    draw(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);

    }
    newPos(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    top(){
        return this.y;
    }

    bottom(){
        return this.y + this.height;
    }

    left(){
        return this.x;
    }
    
    right(){
        return this.width + this.x;
    }

}