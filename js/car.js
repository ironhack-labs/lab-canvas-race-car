class Car {
    constructor(ctx) {
        this.ctx = ctx

        this.x = 230
        this.y = 350
        

        this.w = 40
        this.h = 60

        this.vx = 0
        this.vy = 0

        this.img = new Image()
        this.img.src = "./images/car.png"
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
    
    onKeyEvent(event) {
        if (event.type === 'keydown') {
            switch(event.keyCode) {
              case KEY_RIGHT:
                this.vx = 5
                break;
              case KEY_LEFT:
                this.vx = -5
                break;
            }
        }  else {
            switch(event.keyCode) {
                case KEY_RIGHT:
                  this.vx = 0
                  break;
                case KEY_LEFT:
                  this.vx = 0
                  break;
              }
        }
    }          



    move() {
        this.x += this.vx
        this.y += this.vy
    }
}