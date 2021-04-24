class Car{

    constructor(ctx) {
        this.ctx = ctx
           
        this.h = 250
        this.w = 124
        this.x = this.ctx.canvas.width / 2 - this.w / 2
        this.y = this.ctx.canvas.height - this.h
      
        this.vy = 0
        this.img = new Image()
        this.img.src = './images/car.png'
      }

      onKeyEvent(event) {
        if (event.type === 'keydown'){
            switch (event.keyCode) {
              case 37: // left arrow
                if(this.x <= this.w - this.w){
                this.x -= 0
                }
                else {
                  this.x -= 20;
                }
                break;
              case 39: // right arrow
              if(this.x >= this.ctx.canvas.width - this.w ){
                this.x += 0
              } else {
              this.x += 20;
              }
              
                break;
            }
        }   
    }
  
    draw() {
      this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
      )}
}