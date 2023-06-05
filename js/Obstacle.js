class Obstacle {
    constructor(ctx, x, y, width, height, color, speed) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    
      move() {
        this.y += this.speed;
      }
<<<<<<< HEAD

      collidesWith(car) {
        return car.y + car.height >= this.y &&
            car.y <= this.y + this.height &&
            car.x + car.width >= this.x &&
            car.x <= this.x + this.width;
    }
=======
>>>>>>> 27de3e18a80c3b3639180886fda5bc533e91c7c9
}