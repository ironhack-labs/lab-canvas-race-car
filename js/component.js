class Component{
    constructor(x, y, w, h, ctx){
        this.x = x;
        this.y= y;
        this.w= w;
        this.h= h;
        this.ctx= ctx;
        this.speedX = 0;
        this.speedY = 0;
        const img = new Image();
    img.addEventListener('load', () => {
      //this will attach the img to the this.img of the class
      this.img = img;
      this.draw();
    });
    //src of the image
    img.src = '/images/car.png';
    }

    draw(){
        ctx.drawImage(this.img, this.x, this.y, 60, 100);
    }

    newPos(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    left(){
        return this.x;
    }

    right(){
        return this.x + this.w;
    }
}