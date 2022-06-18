class Car {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = canvas.width / 2.3;
        this.y = canvas.height / 1.4;
        this.w = 60;
        this.h = 120;
        this.img = new Image();
        this.img.src = "../images/car.png";

        this.vx = 0;
        this.vy = 0;
    
        this.actions = {
          up: false,
          down: false,
          ArrowLeft: false,
          ArrowRight: false
        }

    this.setListeners()
}
    move() {
        if (this.actions.ArrowLeft) {
            this.x -= 7
        } else if (this.actions.ArrowRight) {
            this.x += 7
            }
    }

    setListeners() {
        document.onkeydown = e => this.switchAction(e.key, true)
        document.onkeyup = e => this.switchAction(e.key, false)
      }

    switchAction(key, apply) {
        switch (key) {
          case LEFT:
            this.actions.ArrowLeft = apply
            break;
          case RIGHT:
            this.actions.ArrowRight = apply
            break;
          case UP:
            this.actions.up = apply
            break;
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
}
