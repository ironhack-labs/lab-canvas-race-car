const carImg = new Image();
carImg.src = '/images/car.png'

class Car{
    constructor(x, y ,w, h, img){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.speedX = 0;
        this.intervalId = null;
        this.obstacles = [];
        this.frames = 0;
    }
  
    drawCar(){
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
    newPos(){
        this.x+=this.speedX;
    }
    

}