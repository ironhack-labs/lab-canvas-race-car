/** @type{HTMLCanvasElement} */


class Component {
    constructor(x, y, w, h, color, ctx){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color; 
    this.ctx = ctx; 
    this.speedX = 0;
    this.speedY = 0;

    this.img = new Image();
    this.img.src = "/lab-canvas-race-car/images/car.png"
    }

    draw(){
        
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }


    newPosition(){
        this.x += this.speedX;
        this.y += this.speedY;

    }

    top(){
        return this.y
    }

    bottom(){
        return this.y + this.h
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



class Enemy {
    constructor(x, y, w, h, color, ctx){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color; 
    this.ctx = ctx; 
    this.speedX = 0;
    this.speedY = 0;

    this.img2 = new Image();
    this.img2.src = "/lab-canvas-race-car/images/pngegg.png"
    }

    draw(){
        
        this.ctx.drawImage(this.img2, this.x, this.y, this.w, this.h);
    }


    newPosition(){
        this.x += this.speedX;
        this.y += this.speedY;

    }

    top(){
        return this.y
    }

    bottom(){
        return this.y + this.h
    }

    left(){
        return this.x;
    }

    right(){
        return this.x + this.w;
    }
/*
    crashWith(enemy){
        return !(
        this.bottom() < enemy.top() || 
        this.top() > enemy.bottom() ||
        this.right() < enemy.left() ||
        this.left() > enemy.right()
        ); 
    }*/
}

