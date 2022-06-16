class Player {

    constructor(ctx){
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = '/images/car.png';
        this.x = this.ctx.canvas.width / 2 - 25;
        this.y = this.ctx.canvas.height - 120;
        this.w = 50;
        this.h = 100;

        this.vx = 2;

        this.actions = {
            left: false,
            right: false,
        };

        this.setListeners()
    }
    
    setListeners() {
        document.onkeydown = e => this.switchAction(e.key, true);
        document.onkeyup = e => this.switchAction(e.key, false);
     }

    switchAction(key, apply) {
        switch (key) {
        case LEFT:
            this.actions.left = apply
            break;
        case RIGHT:
            this.actions.right = apply
            break;
        }
    }

    move() {
        if (this.actions.right && this.x + this.w <= this.ctx.canvas.width - 60) {
        this.x += this.vx
        }
        
        if (this.actions.left && this.x >= 60) {
        this.x -= this.vx
        }    
     }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
}
 
