class Player{
    constructor(ctx){
        this.ctx = ctx;
        this.x = CANVAS_WIDTH / 2;
        this.y = CANVAS_HEIGHT -100;
        this.w = 40;
        this.h = 60;
        this.img = new Image();
        this.img.src = "../images/car.png"
        this.vx = 0;
        this.vy = 0;

        this.actions = {
            // ArrowUp: false,
            // ArrowDown: false,
            ArrowLeft: false,
            ArrowRight: false,
        }
        
        this._setListeners()

    }


    switchAction(key, value) {
        this.actions[key] = value
        this.actions[key] = value
    }

    _setListeners() {
        document.onkeydown = e => this.switchAction(e.key, true)
        document.onkeyup = e => this.switchAction(e.key, false)
      }

    move() {
        if (this.actions.ArrowLeft) {
            this.x -= 7
        } else if (this.actions.ArrowRight) {
            this.x += 7
        }

        // if (this.actions.ArrowUp) {
        //     this.y -= 7
        // } else if (this.actions.ArrowDown) {
        //     this.y += 7 
        // }
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