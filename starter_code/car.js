class Car {
  constructor(ctx) {
    this.ctx = ctx;
    this.w = 20;
    this.h = 30;
    this.x = this.ctx.canvas.width / 2 - this.w / 2;
    this.y = this.ctx.canvas.height - this.h;
    this.vx = 0;
    this.vy = 0;
    this.img = new Image()
    this.img.src = "./images/car.png"

    this.actions = {
      right: false,
      left: false,
      up: false,
      down: false
    }

    this._setListeners()
  }

  _setListeners() {
    document.onkeydown = e => this._switchAction(e.keyCode, true)
    document.onkeyup = e => this._switchAction(e.keyCode, false)
  }

  _switchAction(key, value) {
    switch (key) {
      case UP:
        this.actions.up = value
        break;
      case DOWN:
        this.actions.down = value
        break;
      case LEFT:
        this.actions.left = value
        break;
      case RIGHT:
        this.actions.right = value
        break;
    }
  }

  _applyActions() {
    
    // Arriba - abajo
    if (this.actions.up) {
      if (this.y <= 0) {
        this.vy = 0
      } else {
        this.vy = -1
      }

    } else if (this.actions.down) {
      if (this.y + this.h >= this.ctx.canvas.height) {
        this.vy = 0
      } else {
        this.vy = 1, 5
      }
    } else {
      this.vy = 0
    }

    // Derecha - izquierda
    if (this.actions.right) {
      if (this.x + this.w >= this.ctx.canvas.width * 0.9) {
        this.vx = 0
      } else {
        this.vx = 2
      }

    } else if (this.actions.left) {
      if (this.x <= this.ctx.canvas.width * 0.1) {
        this.vx = 0
      } else {
        this.vx = -2
      }
    } else {
      this.vx = 0
    }

  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    )
  }

  move() {
    this._applyActions()
    this.x += this.vx;
    this.y += this.vy;
  }

}