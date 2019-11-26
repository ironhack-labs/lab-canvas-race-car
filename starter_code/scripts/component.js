class MyCar {
  constructor(game, x, y) {
    this.game = game;
    this.img = new Image();
    this.x = x;
    this.y = y;
  }

  carImg(source) {
    this.img.src = source;
    this.game.ctx.drawImage(this.img, this.x, this.y, 100, 150);
  }
  drive() {
    document.addEventListener('keydown', event => {
      const key = event.keyCode;
      if (key === 37) this.x -= 20;
      else if (key === 39) this.x += 20;
    });
  }
}
