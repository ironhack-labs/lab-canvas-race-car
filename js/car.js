class Car {
    constructor() {
        this.x = 218;
        this.y = 570;
        this.w = 60;
        this.h = 90
    }

    draw(){
   
        image(imgCar, this.x, this.y,this.w ,this.h,0 ,0);
    }
    
    moveRight() {
        this.x += 15;
    }
    
    moveLeft() {
        this.x -= 15;
    }
    
}