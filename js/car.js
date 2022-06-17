class Car {
    constructor(ctx) {
        this.ctx = ctx;
        this.arrowkeys = document.querySelector(".arrow-img")
        this.x = (CANVAS_WIDTH / 2) + 30;
        this.y = CANVAS_HEIGHT-150;
        this.w = 60;
        this.h = 100;
        this.vx = 0;
        this.img = new Image();
        this.img.src = "/images/car.png";
        this.actions = {
            right: false,
            left: false
        }
        this.setListeners()

    }

    move() {
        this.applyActions();
        if(this.x <= 0){
            this.x += 30;
        }
        if(this.x >= CANVAS_WIDTH-this.w){
            this.x -= 30;
        }
        this.vx += this.ax;
        this.x += this.vx;

    }

    applyActions() {
        
        if (this.actions.right ) {
            this.ax = 1;
            
        } else if (this.actions.left ) {
            this.ax = -1;
           
            
        } else {
            this.ax = 0;
        }
    }

    setListeners() {
        document.onkeydown = e => this.switchAction(e.code, true);
        document.onkeyup = e => this.switchAction(e.code, false)

    }

    switchAction(key, apply) {
        switch (key) {
            case RIGHT:
                this.actions.right = apply;
                break;
            case LEFT:
                this.actions.left = apply;
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