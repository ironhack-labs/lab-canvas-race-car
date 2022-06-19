class Car {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = CANVAS_WIDTH / 2.3;
        this.y = CANVAS_HEIGHT / 1.5;
        this.w = 60;
        this.h = 120;
        this.img = new Image();
        this.img.src = "../images/car.png";

        this.vx = 10;
        this.vy = 5;

        this.actions = {
          ArrowUp: false,
          ArrowDown: false,
          ArrowLeft: false,
          ArrowRight: false
        }
    this.setListeners()
}

    move() {
       this.applyActions()
    }

    setListeners() {
        document.onkeydown = e => this.switchAction(e.key, true)
        document.onkeyup = e => this.switchAction(e.key, false)
      }

    applyActions() {
      if(this.x >= CANVAS_WIDTH - this.w) {
        this.x = (CANVAS_WIDTH - this.w) - 60
        } else if (this.x <= 0) {
        this.x = 60
        }

      if(this.actions.ArrowRight) {
        this.x += this.vx 
      } else if (this.actions.ArrowLeft) {
        this.x -= this.vx
      }
    }

    switchAction(key, apply) {
      this.actions[key] = apply
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
}
