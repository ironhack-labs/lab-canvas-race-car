class Car {

    constructor (ctx) {
        this.ctx = ctx;

        this.x = 300; 
        this.y = 600;

        this.vx = 0;
        this.vy = 0;

        this.w = 50;
        this.h = 75;

        this.g = 0.4;

        this.img = new Image()
        this.img.src = './images/car.png';

    }
    
    onKeyEvent(event) {

    }

    draw(){

        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h
        )

    }

    move() {

    }

}