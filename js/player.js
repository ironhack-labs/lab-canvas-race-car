class Player {
    constructor(ctx) {
        this.ctx = ctx;
        this.image = new Image();
        this.image.src = "D:/gabriela/ironhack/module1/week5/lab-canvas-race-car/images/car.png";
        this.width = 0;
        this.height = 160;
        
        this.speedX = 0;
        this.speedY = 0;

        this.image.onload = () => {
            this.width = this.height * this.image.width / this.image.height;
            this.isReady = true;
        }
    }

    draw() {
        if (this.isReady) {
            this.ctx.drawImage(
                this.image,
                270,
                500,
                this.width,
                this.height
            )
        }
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;
    
        if (this.x <= 0) {
          this.x = 0;
        }
    
        if (this.x >= this.ctx.canvas.width - this.width) {
          this.x = this.ctx.canvas.width - this.width;
        }
    
        if (this.y <= 0) {
          this.y = 0;
        }
    
        if (this.y >= this.ctx.canvas.height - this.height) {
          this.y = this.ctx.canvas.height - this.height;
        }
      }
}