function Obstaculo(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.w = 200;
    this.h = 40;
    this.x = 0;
    this.y = 0;

  }
Obstaculo.prototype.draw = function (canvas, ctx) {
    this.ctx.fillStyle = "#330000";
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
    console.log(this.y);
  };
 