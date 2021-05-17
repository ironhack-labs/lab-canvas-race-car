const KEY_RIGHT = 39;
const KEY_LEFT = 37;

class Car {
  constructor(ctx) {
    this.ctx = ctx;

    this.car = new Image();
    this.car.src = "./images/car.png";

    this.width = 50;
    this.height = 100;

    this.x = 225;
    this.y = 550;

    this.movements = {
      left: false,
      right: false,
    };
  }

  draw() {
    this.ctx.save();
    this.ctx.drawImage(this.car, this.x, this.y, this.width, this.height);
    this.ctx.restore();
  }

  move() {
    if (this.movements.left) {
      this.x += -10;
    } else if (this.movements.right) {
      this.x += 10;
    } else {
      this.x = this.x;
      this.y = this.y;
    }

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
