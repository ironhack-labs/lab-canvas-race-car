class Player {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.img = new Image();
        this.width = 90;
        this.height = 180;

        this.speed = 3
        
        this.size = 25;

        this.vx = 0;

        this.x = this.ctx.canvas.width /2 - this.width/2;
        this.y = this.ctx.canvas.height - this.height;

        this.movements = {
            left: false,
            right: false
        }

        this.score = 0;


        this.img.src = "./images/car.png";
        this.img.isReady = false;

        this.img.onload = () => {
            this.img.isReady = true;
        }
    }

    draw() {
        this.ctx.save()

        if (this.img.isReady) { 
            this.ctx.drawImage(
             this.img,
             this.x,
             this.y,
             this.width,
             this.height,
           )
        }

        this.ctx.restore()
    }
        setUpListeners(event){
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
       
        move(){
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
              this.y < obstacle.y + obstacle.height &&
              this.y + this.size > obstacle.y &&
              this.x < obstacle.x + obstacle.width &&
              this.x + this.size > obstacle.x
            ) {

              return true;
            }
            return false;
          }


    }
