class Background {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.width = canvas.width;
      this.height = canvas.height;
      this.speed = 10;
      this.img = new Image();
      this.img.src = "../images/road.png";
      this.img.onload = () => {
        this.draw();
      };
    }
  
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      ctx.drawImage(
        this.img,
        this.x,
        this.y - this.height,
        this.width,
        this.height
      );
    }
  
    update() {
      this.y += this.speed;
      if (this.y > canvas.height) {
        this.y = 0;
      }
    }
  }
  
  class Car {
    constructor() {
      this.x = canvas.width / 2 - 30;
      this.y = canvas.height - 120;
      this.width = 60;
      this.height = 100;
      this.img = new Image();
      this.img.src = "../images/car.png";
      this.img.onload = () => {
        this.draw();
      };
    }
  
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  
    moveLeft() {
      if (this.x > 45) {
        this.x -= 7;
      }
    }
    moveRight() {
      if (this.x < 400) {
        this.x += 7;
      }
    }
  }
  
  class Obstacle {
    constructor(x, width) {
      this.x = x;
      this.y = 0;
      this.width = width;
      this.height = 140;
    }
  
    draw() {
      ctx.fillStyle = "red";
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
      this.y += 4;
    }
  }