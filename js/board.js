class Board {
    constructor(ctx) {
      this.ctx = ctx;
  
      this.img = new Image();
      this.img.src = 'images/road.png';

    }
  
    draw() {
      this.ctx.drawImage(
        this.img,
        0,
        0,
        this.ctx.canvas.width,
        this.ctx.canvas.height,
      )
    }
  }