const RIGHT = 39;
const LEFT = 37;

class Car {
  constructor(ctx) {
    this.ctx = ctx;
    this.w = 50;
    this.h = 100;
    this.x = this.ctx.canvas.width / 2;
    this.y = this.ctx.canvas.height - this.h;
    this.img = new Image();
    this.img.src = "images/car.png";
    this.vx = 0;
    this._listeners();
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  move() {
    this.borderCollision();
    this.x += this.vx;
  }

  _listeners() {
    document.onkeydown = e => {
      if (e.keyCode === RIGHT) {
        this.vx = 8;
      }

      if (e.keyCode === LEFT) {
        this.vx = -8;
      }
    };
    document.onkeyup = e => {
      if (e.keyCode === RIGHT || e.keyCode === LEFT) {
        this.vx = 0;
      }
    };
  }

  borderCollision() {
    if (this.x >= this.ctx.canvas.width - this.w) {
      this.vx = -1;
    } else if(this.x <= 0){
      this.vx = 1
    }
  }
}
