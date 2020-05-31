class Car {
  constructor(ctx) {
    this._ctx = ctx
    this.x = ctx.canvas.width / 2
    this.y = ctx.canvas.height * 0.8
    this.w = 50
    this.h = 100
    this.vx = 0
    this.vy = 0
    this.ax = 0
    this.ay = 0


    this._img = new Image()
    this._img.src = '../images/car.png'

    
  }

  draw() {
    // draw image in X
    this._ctx.drawImage(this._img, this.x - this.w / 2, this.y, this.w, this.h)

  }
  move() {
    this.vy += this.ay
    this.vx += this.ax
    this.x += this.vx
    this.y += this.vy

    

      document.addEventListener('keydown', (event) => {
        
        switch (event.key) {
          case 'ArrowRight':
            this.vx += 0.01
            break
          case 'ArrowLeft':
            this.vx -= 0.01
            break
  
        }
      });
  
      document.addEventListener('keyup', (event) => {
       
        this.vx = 0
  
      });
    // if (this.y >= this.h) {
    //   this.y = 0
    // }
  }

  
}