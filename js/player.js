class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.h = 140;
    this.w = 70;
    this.x = (this.ctx.canvas.width / 2) - (this.w / 2);
    this.y = 500;
    this.img = new Image();
    this.img.src = "/images/car.png"
    this.vx = 0;
    this.actions = {
      left: false,
      right: false
    }

    this._setListeners()
  }

  move() {
    this._applyActions()
    this.x += this.vx
  }

  _setListeners() {
    document.onkeydown = e => this._switchAction(e.keyCode, true)
    document.onkeyup = e => this._switchAction(e.keyCode, false)
  }
  
  _applyActions() {
    
    if (this.actions.right) {
      if (this.x + this.w >= this.ctx.canvas.width - this.w / 2) {
        this.vx = 0
      } else {
      this.vx = 4
      }
    } else if (this.actions.left) {
      if (this.x <= this.w / 2) {
        this.vx = 0
      } else {
        this.vx = -4
      }
    } else {
      this.vx = 0;
    }
  }

  _switchAction(key, apply) {
    switch (key) {
      case LEFT:
        this.actions.left = apply
        break;
      case RIGHT:
        this.actions.right = apply
        break;
    }
  }

  draw(){
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    )
  }
}