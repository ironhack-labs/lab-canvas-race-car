const RIGHT_KEY = 39
const LEFT_KEY = 37

class Car {
    constructor (ctx) {
        this.ctx = ctx;

        this.x = this.ctx.canvas.width * 0.45;
        this.y = this.ctx.canvas.height * 0.8;

        this.vx = 0; //velocidad en x
        this.ax = 0; //aceleración en x

        this.width = 50;
        this.height = 100;


        this._img = new Image();
        this._img.src = './images/car.png';
    }

    draw() {

        this.ctx.drawImage(
            this._img,
            this.x,
            this.y,
            this.width,
            this.height
            );
    }

    move() {
        document.addEventListener('keydown', e => {
            if (e.keyCode === LEFT_KEY) {
                this.ax = -4;
            } else if (e.keyCode === RIGHT_KEY) {
                this.ax = 4;
            }
         });
 
         document.addEventListener('keyup', e => {
             if (e.keyCode === LEFT_KEY) {
                 this.ax = 0;
             } else if ( e.keyCode === RIGHT_KEY) {
                 this.ax = 0;
             }
         });

        this.x += this.ax;

         const leftLimit = this.ctx.canvas.width * 0.10;
         const rightLimit = this.ctx.canvas.width * 0.80;

        if (this.x <= leftLimit) {
            this.x = leftLimit;
        } else if (this.x >= rightLimit) {
            this.x = rightLimit;
        }

    }


}