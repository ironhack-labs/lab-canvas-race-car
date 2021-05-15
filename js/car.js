const KEY_RIGHT = 39;
const KEY_LEFT = 37;

class Car {
  constructor(ctx) {
    this.ctx = ctx;

    this.x = 215;
    this.y = 520;

    this.width = 70;
    this.height = 130;

    this.speed = 4;

    this.vx = 0;
    this.vy = 0;

    this.movements = {
      left: false,
      right: false,
    };

    this.img = new Image();
    this.img.src = "./images/car.png";
    this.img.isReady = false;
    this.img.onload = () => {
      this.img.isReady = true;
    };
  }

  isReady() {
    return this.img.isReady;
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }

  move() {
    if (this.movements.left) {
      this.vx = -this.speed;
    } else if (this.movements.right) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
    }

    this.x += this.vx;
    this.y += this.vy;

    if (this.x + this.width >= this.ctx.canvas.width) {
      this.x = this.ctx.canvas.width - this.width;
    } else if (this.x <= 0) {
      this.x = 0;
    }
  }

  onKeyEvent(event) {
    const status = event.type === "keydown";

    switch (event.keyCode) {
      case KEY_RIGHT:
        this.movements.right = status;
        break;
      case KEY_LEFT:
        this.movements.left = status;
        break;
    }
  }

  collidesWith(element) {
    return (
      this.x < element.x + element.width &&
      this.x + this.width > element.x &&
      this.y < element.y + element.height &&
      this.y + this.height > element.y
    );
  }
}
