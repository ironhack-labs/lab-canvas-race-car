function Obstaculo(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.w = 400;
    this.h = 500;
    this.obstaculo = 80;
  }
function Obstaculo(canvas, ctx) {
    Obstaculo.prototype.drawRect = function(x, y, width, height) {
    this.ctx.fillRect(x, y, width, height);
  };
  Obstaculo.prototype.marronObstaculo = function() {
    this.ctx.fillStyle = "#8f4646";
    this.ctx.strokeStyle = this.ctx.fillStyle;
  };
  Obstaculo.prototype.caca = function () {
    if (this.obstaculo > 130) {
      this.obstaculo = 0;
    }
      this.marronObstaculo();
      this.drawRect(200, 20 - this.obstaculo, 50, 5);
      this.drawRect(200, 80 - this.obstaculo, 50, 5);
      this.drawRect(200, 160 - this.obstaculo, 50, 5);
      this.drawRect(200, 240 - this.obstaculo, 50, 5);
      this.drawRect(200, 320 - this.obstaculo, 50, 5);
      this.drawRect(200, 400 - this.obstaculo, 50, 5);
      this.drawRect(200, 480 - this.obstaculo, 50, 5);
      this.drawRect(200, 560 - this.obstaculo, 50, 5);
     
      this.obstaculo++;
    }
}