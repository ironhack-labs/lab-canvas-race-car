class Obstacle {
  constructor(ctx) {
    this.ctx = ctx;
    this.specs = {
      position: {
        x: undefined,
        y: undefined,
      },
      size: {
        h: undefined,
        w: undefined,
      },
    };
    this.generateObtacle();
  }
  generateObtacle() {
    this.specs.size.w = Math.floor(Math.random() * (410 - 80 - 45) + 45);
    this.specs.size.h = Math.floor(Math.random() * (40 - 15) + 15);
    this.specs.position.x = Math.floor(
      Math.random() * (455 - this.specs.size.w)
    );
    this.specs.position.y = 10;
    this.ctx.fillStyle = "SaddleBrown";
    this.ctx.fillRect(
      this.specs.position.x,
      this.specs.position.y,
      this.specs.w,
      this.specs.h
    );
  }
  drawObtacle() {
    this.ctx.fillStyle = "chocolate";
    this.ctx.fillRect(
      this.specs.position.x,
      this.specs.position.y,
      this.specs.size.w,
      this.specs.size.h
    );
  }
  moveObtacle() {
    this.specs.position.y += 1;

    this.drawObtacle();
  }
}
