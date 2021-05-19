class Car {
    constructor(ctx) {
      this.ctx = ctx;

      this.width = 50;
      this.height = 100;
      
      this.x = this.ctx.canvas.width / 2 - (this.width / 2);
      this.y = this.ctx.canvas.height - this.height;

      this.img = new Image()
      this.img.src = './images/car.png';

      this.vx = 10

      this.minMoveLeft = 0;
      this.maxMoveRight = this.ctx.canvas.width - this.width;

    }

    draw() {
      this.ctx.drawImage (
        this.img,
        this.x,
        this.y,
        this.width,
        this.height
      );
    
    }

    moveLeft() {
      if(this.x - this.vx <= this.minMoveLeft) {
        this.x = this.minMoveLeft;
      } else {
        this.x -= this.vx;
      }
    }

    moveRight() {
       if(this.x + this.vx >= this.maxMoveRight) {
        this.x = this.maxMoveRight;
       } else {
         this.x += this.vx;
       }
    }

    collidesWith(element) {
      return this.x < element.x + element.width &&
        this.x + this.width > element.x &&
        this.y < element.y + element.height &&
        this.y + this.width > element.y
    }

}

