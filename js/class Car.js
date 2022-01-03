class Car {
    constructor(ctx, x, y) {
        this.ctx = ctx;

        this.width = 90;
        this.height = 180;

        this.x = this.ctx.canvas.width / 2 - this.width / 2;
        this.y = this.ctx.canvas.height - this.height;

        this.size = 25;

        this.img = new Image();
        this.img.src= './images/car.png';
        this.img.isReady = false;       
        this.img.onload = () => {
            this.img.isReady = true;
        }
        this.score = 0;
    }

    moveLeft () {
        this.x -= 25;    
    }

    moveRight () {
        this.x += 25;
    } 

    draw() {
        this.ctx.save();
        if(this.img.isReady){
            this.ctx.drawImage(
                this.img, 
                this.x,
                this.y,
                this.width, 
                this.height,
            );
        }
    }

    collidesWith(obstacle) {
        if (
          this.y < obstacle.y + obstacle.height &&
          this.y + this.size > obstacle.y &&
          this.x < obstacle.x + obstacle.width &&
          this.x + this.size > obstacle.x
        ) {
          return true
        }
    
        return false
    }

}