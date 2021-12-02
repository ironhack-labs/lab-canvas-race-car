class Car {
    constructor(ctx) {
      this.ctx = ctx;


      
      this.width = 45;
      this.height = 95;
      
      this.x = this.ctx.canvas.width/2 - this.width/2
      this.y = this.ctx.canvas.height - this.height -10,
      
      


      this.img = new Image();
      this.img.src = '/images/car.png'
      this.img.onload = () => {
        this.draw()
      }

      this.speed = 3

      this.vx = 0
      this.vy = 0

      this.movements = {
      
       left : false,
       right : false

      }
    }
  
    draw() {
      this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.width,
        this.height,
      )
    }


    setupListeners(event) {
      const status = event.type === 'keydown'
  
      switch(event.keyCode) {
        case KEY_RIGHT:
          this.movements.right = status
          break
        case KEY_LEFT:
          this.movements.left = status
          break
        default:
          break
      }
    }




    move() {

      if (!this.movements.right && !this.movements.left) {
        this.vx = 0
      }
      
  
      if (this.movements.right) {
        this.vx = this.speed
      }
      if (this.movements.left) {
        this.vx = -this.speed
      }
  
      
  
      this.x += this.vx
      this.y += this.vy
  
      if (this.x <= 0) {
        this.x = 0
      }
      if (this.x + this.size >= this.ctx.canvas.width) {
        this.x = this.ctx.canvas.width - this.size
      }
      
      if (this.y <= 0) {
        this.y = 0
      }
      if (this.y + this.size >= this.ctx.canvas.height) {
        this.y = this.ctx.canvas.height - this.size
      }
    }

  }
  
  


  
    
  