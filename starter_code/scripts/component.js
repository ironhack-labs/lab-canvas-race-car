class MyCar {
  constructor(game, x, y, w, h) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.img = new Image();
    this.coll = undefined;
    this.coll2 = undefined;
    this.move = new Audio();
    this.move.src = './audio/move.mp3';
  }

  carImg(source) {
    this.img.src = source;
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  drive() {
    document.addEventListener('keydown', event => {
      const key = event.keyCode;
      if (key === 37 && !this.coll) {
        this.move.play();
        this.x -= 20;
      } else if (key === 39 && !this.coll) {
        this.move.play();
        this.x += 20;
      }
    });
  }
  collision(otherVehicle) {
    this.coll =
      otherVehicle.y + otherVehicle.height >= this.y + 15 &&
      otherVehicle.x <= this.x + this.width - 12 &&
      this.x < otherVehicle.x + otherVehicle.width - 10;

    if (this.coll) {
      return true;
    }
    return false;
  }
}
