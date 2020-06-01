class Car {
    constructor (ctx) {
        this.ctx = ctx;
        this.w = 90;
        this.h = 175;
        this.x = this.ctx.canvas.width/2    - this.w/2  ;
        this.y =  this.ctx.canvas.height - this.h ;
        this.img = new Image () ;
        this.img.src = './images/car.png' ;

        this.vx = 0;
        this.vy = 5;

        this.ax = 0;
        this.ay = 0;
    }

    draw() {
        this.ctx.drawImage(this.img,
            this.x,
            this.y,
            this.w,
            this.h)
    }

    move() {
        this.vx += this.ax;
        this.vy += this.ay;

        this.x += this.vx;
        this.y += this.vy;

    }

    _checkcollisions() {
    }
}