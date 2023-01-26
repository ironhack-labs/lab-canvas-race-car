/** @type {HTMLCanvasElement} */

class Player{
    constructor(x, y, w, h, ctx){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = ctx;
        this.speedX = 0;
    }

    draw(){
        const car = new Image();
        car.src = "../images/car.png"
        ctx.drawImage(car, this.x, this.y, this.w, this.h)
  }

    newPos(){
        this.x += this.speedX;
    }

    top(){
        return this.y;
    }

    bottom(){
        return this.y + this.h;
    }

    left(){
        return this.x;
    }

    right(){
        return this.x + this.w;
    }

    crashWith(enemy){
        return !(
            this.bottom() < enemy.top() || 
            this.top() > enemy.bottom() || 
            this.right() < enemy.left() || 
            this.left() > enemy.right()
        );
    }
}

class Obstacle{
    constructor(x, y, w, h, ctx){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = "red";
        this.ctx = ctx;
        this.speedY = 0;
    }

    draw(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }

    newPos(){
        this.y += this.speedY;
    }

    top(){
        return this.y;
    }

    bottom(){
        return this.y + this.h;
    }

    left(){
        return this.x;
    }

    right(){
        return this.x + this.w;
    }

/*     crashWith(enemy){
        return !(
            this.bottom() < enemy.top() || 
            this.top() > enemy.bottom() || 
            this.right() < enemy.left() || 
            this.left() > enemy.right()
        );
    } */
}