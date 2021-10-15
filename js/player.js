class Player {
    constructor(canvas, lives) {
       this.canvas = canvas;
       this.ctx = canvas.getContext('2d');
       this.x = 250;
       this.y = 650;
       this.width = 70;
       this.speed = 15;
       this.lives = lives;

    }
     drawCar() {
            const carImg = new Image();
            carImg.src ='../images/car.png';
            this.ctx.carImg(mg, this.x, this.y, this.width, this.height);
          }
          checkCollision(obstacle)

     }
