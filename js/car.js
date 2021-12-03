class Car {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = 90;
        this.height = 155;
        this.vx = 0;
        this.speed = 6;
    

        this.img = new Image();
        this.img.src = "/Users/pedroalbertobanosfolcra/Desktop/Ironhack/modul1/lab-canvas-race-car/images/car.png";

        this.img.isReady = false;
        this.img.onload = () => {
            this.img.isReady = true;
        }
        
        this.movements = {
            left: false,
            right: false
        }



    }

    draw() {
        if (this.img.isReady) {
            this.ctx.drawImage(
                this.img,
                this.x,
                this.y,
                this.width,
                this.height,
            )
        }
    }

    setupListener(event) {
        const status = event.type === "keydown"
        switch (event.keyCode) {
            case KEY_RIGHT:
                this.movements.right = status
                break;

            case KEY_LEFT:
                this.movements.left = status
                break;

            default:
                break
        }
    }



    move() {

        if (!this.movements.right && !this.movements.left) {
            this.vx = 0
        }

        if (this.movements.right) {
            this.vx = this.speed
        }
        if (this.movements.left) {
            this.vx = -this.speed
        }

        this.x += this.vx

        if (this.x <= 0) {
            this.x = 0
        }

        if(this.x+this.width>=this.ctx.canvas.width){
            this.x = this.ctx.canvas.width - this.width
        }
    }

}

