class Car {
    constructor(ctx) {
        this.ctx = ctx; 

        this.h = 100; 
        this.w = 50; 

        this.x = (this.ctx.canvas.width - this.w) / 2; 
        this.y = 2*this.ctx.canvas.height/3; 

        this.vx = 0; 

        this.actions = {
            right: false,
            left: false
        }

        this.img = new Image(); 
        this.img.src = "./images/car.png"; 

        this.setListeners()
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
        this.applyActions()
        

    }

    onKeyEvent(keyCode,action) {
        switch (keyCode) {
            case LEFT:
              this.actions.left = action
              break;
                
            case RIGHT:
              this.actions.right = action
              break;
        }
    }

    setListeners() {
        document.onkeydown = e => this.onKeyEvent(e.keyCode,true)
        document.onkeyup = e => this.onKeyEvent(e.keyCode,false)
    }

    applyActions() {
        if (this.actions.right) {
            this.x += 5
            
        }

        if (this.actions.left) {
            this.x -= 5
        }
    }
}
