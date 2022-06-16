class Car {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 70;
    this.height = 140;
    this.x = this.ctx.canvas.width / 2 - this.width / 2;
    this.y = 500;
    this.vx = 0;
    this.img = new Image();
    this.img.src = "./images/car.png";

    this.actions = {
      left: false,
      right: false,
    };

    this._setListeners();
  }

  move() {
    this._applyActions();
    this.x += this.vx;
  }

  _setListeners() {
    document.onkeydown = (e) => this._switchAction(e.keyCode, true);
    document.onkeyup = (e) => this._switchAction(e.keyCode, false);
  }

  _applyActions() {
    if (this.actions.right && this.x <= this.ctx.canvas.width - this.width) {
      this.vx = 4;
    } else if (this.actions.left && this.x >= 0) {
      this.vx = -4;
    } else {
      this.vx = 0;
    }
  }

  _switchAction(key, apply) {
    switch (key) {
      case LEFT:
        this.actions.left = apply;
        break;
      case RIGHT:
        this.actions.right = apply;
        break;
    }
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
