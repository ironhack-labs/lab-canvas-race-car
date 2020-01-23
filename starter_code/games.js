/** @type HTMLCanvasElement */
/** @type CanvasRenderingContext2D */

class Game {
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext("2d");
        this.setInterval;
        this.offset = 0;
        this.array=[]
        this.counter= 0;

        // Car
        this.carX = 245;
        this.carY = 480;

        //road
        this.width = 490;
        this.height = 600;
        this.limitRight = 440;
        this.limitLeft = 50;

    }

    star() {
        this.canvas.setAttribute("height", this.height);
        this.canvas.setAttribute("width", this.width);

        this.setInterval = setInterval(() => {
            //this.ctx.clearRect(0, 0, this.width,this.height);
           // this.clearDraw();
           this.road();
           this.car();
           this.move();
            
            console.log(this.array);

            // this.array();
            this.offset -= 4;
            
            if(this.counter % 100 === 0){
                this.obstaclesCrea()
            }
            this.obstaclesCrea();
            this.drawObstacles();

            this.counter ++
        }, 1000 / 60);



    }

    clearDraw() {

    }

    road() {
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineWidth = 1000;
        this.ctx.lineTo(0, 600);
        this.ctx.strokeStyle = "green";
        this.ctx.stroke();
        this.ctx.closePath();
        //Linea izquierda
        this.ctx.beginPath();
        this.ctx.moveTo(245, 0);
        this.ctx.lineWidth = 430;
        this.ctx.lineTo(245, 600);
        this.ctx.strokeStyle = "grey";
        this.ctx.stroke();
        this.ctx.closePath();
        // //Linea izquierda blanca
        this.ctx.beginPath();
        this.ctx.moveTo(55, 0);
        this.ctx.lineWidth = 15;
        this.ctx.lineTo(55, 600);
        this.ctx.strokeStyle = "white";
        this.ctx.stroke();
        this.ctx.closePath();
        // //linea derecha blanca
        this.ctx.beginPath();
        this.ctx.moveTo(435, 0);
        this.ctx.lineWidth = 15;
        this.ctx.lineTo(435, 600);
        this.ctx.strokeStyle = "white";
        this.ctx.stroke();
        this.ctx.closePath();
        // // discontinua
        this.ctx.beginPath();
        this.ctx.strokeStyle = "white";
        this.ctx.setLineDash([20, 5]);
        this.ctx.moveTo(245, 0);
        this.ctx.lineTo(245, 600);
        this.ctx.lineWidth = 1;
        this.ctx.lineDashOffset=this.offset;
        this.ctx.stroke();
        this.ctx.closePath();
    }

    car() {
        let cars = new Image();
        cars.src = "./images/car.png"
        this.ctx.drawImage(cars, this.carX, this.carY, 50, 100);
        
       
    
    }

    move(){
        window.onkeydown =  (e) =>{
            if (e.keyCode === 39 ) {
            this.carX += 5;
            }
            if (e.keyCode === 37) {
               this.carX -= 5;
            }
        };
    }

    obstaclesCrea() {
        class Obstacles  {
            constructor (x,y,w,h) {
                this.x = x,
                this.y = y,
                this.w = w,
                this.h = h
            }
        
        }
        
        this.array.push(new Obstacles(Math.floor(Math.random() * (400 - 0 + 1) + 0), -50, Math.floor(Math.random() * (400 - 200 + 1) + 200), 40)

        )
        
    }
    drawObstacles() {
        this.array.forEach((obstacles) => {
            obstacles.y++
            this.ctx.fillStyle = 'brown';
            this.ctx.fillRect(obstacles.x, obstacles.y, obstacles.width, obstacles.height)
        }); 
    }

    

}