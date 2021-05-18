const KEY_RIGHT = 39
const KEY_LEFT = 37

class Car {
    constructor(ctx) {
        this.ctx = ctx;

        this.x = 225;
        this.y = 530;

        this.width = 50;
        this.height = 110;

        this.speed = 5;

        this.vx = 0,
        this.vy = 0;

        this.img = new Image();
        this.img.src = "./images/car.png";
        this.img.isReady = false;
        this.img.onload = () => {
        this.img.isReady = true;
        }  

        this.movements = {
            left: false,
            right: false
        }
    }

    isReady() {
        return this.img.isReady;
    }

    draw() {
          if(this.img.isReady) {
            this.ctx.drawImage (
                this.img,
                this.x, 
                this.y,
                this.width, 
                this.height)
        }
    }

    move() {
        if (this.movements.right) {
            this.vx = this.speed;
        } else if (this.movements.left) {
            this.vx = - this.speed
        } else {
            this.vx = 0;
        }

        this.x += this.vx;

        if (this.x + this.width >= this.ctx.canvas.width) {
            this.x = this.ctx.canvas.width - this.width;
        } else if (this.x <= 0) {
            this.x = 0
        }
    }

    onKeyEvent(event) {
        const status = event.type === "keydown";

        switch(event.keyCode) {
            case KEY_LEFT:
                this.movements.left = status
                break;
            case KEY_RIGHT:
                this.movements.right = status
                break;
        }
    }

    collidesWith(element) {
        return this.x < element.x + element.width &&
               this.x + this.width > element.x &&
               this.y < element.y + element.height &&
               this.y + this.height > element.y
    }

}