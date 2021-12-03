class Car {
    constructor(ctx) {

        this.ctx = ctx;
        this.x = 225
        this.y = 530
        this.width = 45;
        this.height = 95;

        this.speed = 3

        this.vx = 0


        this.movements = {
    
            left : false,
            right : false
    
        }

        this.img = new Image()
        this.img.src = './images/car.png'
        this.img.onload = () => {
            this.draw()
        }

    

        

    }

    draw() {

        this.ctx.save()
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height,
        )
        this.ctx.restore()
    }

    setUpListeners(event) {
         const status = event.type === 'keydown';

       switch(event.keyCode) {
           case KEY_RIGHT:
               this.movements.right = status;
               break;

            case KEY_LEFT:
                this.movements.left = status;
                break;

            default:
                break;
       }
      }

    move() {

        if(!this.movements.right && !this.movements.left) {
            this.vx = 0;
        }

        if (this.movements.right) {
          this.vx = this.speed;
        }
        if (this.movements.left) {
          this.vx = -this.speed;
        }

        this.x += this.vx;

        if (this.x <= 50) {
          this.x = 50
        }

        if (this.x >= 410) {
            this.x = 410
          }
    }

      collidesWith(obstacle) {
        if (
          this.x < obstacle.x + obstacle.width &&
          this.x + this.width > obstacle.x &&
          this.y < obstacle.y + obstacle.height &&
          this.y + this.height > obstacle.y
        ) {
          return true
        }
    
        return false
      }
}