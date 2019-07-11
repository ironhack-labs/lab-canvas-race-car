class Background {
  //Esta clase instanciara al player y a los obstaculos.
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  draw() {
    let ctx = Game.ctx;

    ctx.fillStyle = "gray";

    ctx.fillRect(0, 0, this.width, this.height);
    ctx.fillStyle = "green";

    ctx.fillRect(0, 0, this.width / 10, this.height);

    ctx.fillStyle = "green";

    ctx.fillRect(this.width - this.width / 10, 0, this.width, this.height);

    ctx.fillStyle = "white";

    ctx.fillRect(this.width / 8, 0, this.width / 50, this.height);

    ctx.fillStyle = "white";

    ctx.fillRect(this.width - this.width / 7, 0, this.width / 50, this.height);
  }
}
