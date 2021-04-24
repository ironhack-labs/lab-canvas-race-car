class Car {

    constructor (ctx) {
        this.ctx = ctx;

        this.x = 300; 
        this.y = 600;

        this.vx = 0;
        this.vy = 0;

        this.w = 50;
        this.h = 75;

        this.g = 0.4;

        this.img = new Image()
        this.img.src = './images/car.png';

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

    onKeyEvent(event) {
      if (event.type === 'keydown') {
          switch(event.keyCode) {
              case KEY_RIGHT:
                this.vx = 2
                break;
              case KEY_LEFT:
                this.vx = -2
                break;
        } 
      } else { 
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

    this.x += this.vx;
        if (this.x >=400) {
            this.vx *= -1
        }
        if (this.x <= 60) {
        this.vx *= -1
        } 
        
    }


}