class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.counter = 0;

        this.w = 400;
        this.h = 600;

        this.w2 = this.w/2;
        this.h2 = this.h/2;

        this.carinX = 180;
        this.carinY = 520;

        this.intervalID = undefined;

        this.keyState = {
            keyLeft : false,
            keyRight : false
        };

    }

    starGame() {
        this.canvas.setAttribute("height", this.h);
        this.canvas.setAttribute("width", this.w);
        this.intervalID = setInterval(() => {

            this.clearCanvas();
            this.drawBackground();
            this.drawCar();
            this.moveCar();
            this.generateObstacle();

            document.addEventListener('keydown', (e) => {
                e.preventDefault();
                if (e.keyCode === 37) {
                    this.keyState.keyLeft = true;
                }
                if (e.keyCode === 39) {
                    this.keyState.keyRight = true;
                }
              })
              document.addEventListener('keyup', (e) => {
                e.preventDefault();
                if (e.keyCode === 37) {
                    this.keyState.keyLeft = false;
                }
                if (e.keyCode === 39) {
                    this.keyState.keyRight = false;
                }
              })
          
            this.counter++;
        }, 1000 / 60);
    }

    drawBackground() {
      
        //green
        this.ctx.beginPath()
        this.ctx.fillStyle = "#008100";
        this.ctx.fillRect(0, 0, this.w, this.h);
        this.ctx.closePath()

        //grey
        this.ctx.beginPath()
        this.ctx.fillStyle = "#808080";
        this.ctx.fillRect(50, 0, 300, this.h);
        this.ctx.closePath()

        //white line
        this.ctx.beginPath()
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(60, 0, 10, this.h);
        this.ctx.closePath();

        //white dashed
        this.ctx.beginPath()
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(330, 0, 10, this.h);
        this.ctx.closePath()


        this.ctx.beginPath();
        this.ctx.lineWidth = 8;
        this.ctx.setLineDash([30, 15]);
        this.ctx.moveTo(this.w2, 0);
        this.ctx.lineTo(this.w2, this.h);
        this.ctx.strokeStyle = "white";
        this.ctx.stroke();
    }

    drawCar() {

        let image = new Image();
        image.src = "images/car.png"
        this.ctx.drawImage(image, this.carinX,this.carinY, 40,70);
    }



    clearCanvas() {
        this.ctx.clearRect(0, 0, this.h, this.w);
    }


    generateObstacle() {
        this.y = (0, 600)
        Math.random(0, 400)

         this.ctx.beginPath()
         this.ctx.fillStyle = "pink";
         this.ctx.fillRect(0, 0, Math.random(100, 100), Math.random(50, 50));
         this.ctx.closePath()
    }

    moveCar(){
        if(this.keyState.keyLeft && this.carinX>30){
          this.carinX -=1
        }
        if(this.keyState.keyRight && this.carinX<300){
          this.carinX +=1
        }
      }

    }

















