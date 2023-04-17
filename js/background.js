class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.pos = { x: 0, y: 0 };
    this.bgSize = { w: 500, h: 700 };
    this.imageInstance = undefined;

    this.init();
  }

  init() {
    this.imageInstance = new Image();
    this.imageInstance.src = "images/road.png";
  }

  draw() {
    this.ctx.drawImage(
      this.imageInstance,
      this.pos.x,
      this.pos.y,
      this.bgSize.w,
      this.bgSize.h
    );
    this.ctx.drawImage(
      this.imageInstance,
      this.pos.x,
      this.pos.y - this.bgSize.h,
      this.bgSize.w,
      this.bgSize.h
    );

    this.move();
  }

  move() {
    this.pos.y += 5;

    if (this.pos.y >= this.bgSize.h) {
      this.pos.y = 0;
    }
  }
}
