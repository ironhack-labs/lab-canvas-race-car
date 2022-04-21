// CAR
class Car {
    constructor() {
        this.x = cWidth / 2 - 25;
        this.y = cHeight - 90;
        this.width = 50;
        this.height = 90;
        this.img = new Image();
    }
    draw() {
        this.img.src = '../images/car.png';
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    moveLeft() {
        if (this.x > 0) {
            this.x -= 25;
        }
    }
    moveRight() {
        if (this.x + this.width < cWidth) {
            this.x += 25;
        }
    }
}
  
  
  // OBSTACLES 
  class Obstacles {
    constructor() {
    this.x = Math.floor(Math.random() * cWidth);
    this.y = 0;
      this.width = Math.floor(Math.random() * (cWidth-300));
      this.height = 20;
      this.color = 'red';
    }
    update() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  
  }
