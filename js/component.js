/** @type {HTMLCanvasElement} */

class Car {
    constructor(x, y, w, h, ctx){

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = ctx;
        this.speedX = 0;
        this.speedY = 0;


       
    }

    draw(){

        const newImg = new Image();
        newImg.src = '../images/car.png'
        this.ctx.drawImage(newImg, this.x, this.y, this.w, this.h) 
        
     
        

    }

    newPos(){

        if(this.x <= 0 ){
            this.x = 1 
        }else if(this.x >= canvas.width -this.w) {
            this.x = canvas.width - this.w - 1;
        }else {
            this.x += this.speedX;
        }  

        

       
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

    crashWith(enemy){
        return !(
            this.bottom() < enemy.top() || this.top() > enemy.bottom() ||
            this.right() < enemy.left() || this.left() > enemy.right()
        );

    } 
}

class Enemy extends Car {
    draw(){

        const newImg = new Image();
        newImg.src = '../images/pickle_rick.png'
        this.ctx.drawImage(newImg, this.x , this.y, this.w, this.h)
        

    }

    newPos(){

        
        this.x += this.speedX;
        this.y += this.speedY;
    }

}

