class Car {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 80;
    this.y = 600;
    this.car = new Image();
    this.car.src = "./images/car.png";
    this.movements = {
      right: false,
      left: false
    };
  }

  draw() {
    this.ctx.drawImage(this.car, this.x, this.y);
  }

  move(key) {
    switch (key) {
      case 37: // Left
        this.movements.left = true
        break;
      case 39: // Right
        this.movements.right = true
        break;
    }
  }
}
