class Start{
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.car;
        this.obstacles = [];
    }

    randomLoop(){
        this.car = new Car(this.canvas); 
        this.road = new Road(this.canvas);
let i=0;
        const loop = () => {
          i +=1 
          console.log (i)
            this.updateCanvas();
            this.clearCanvas();
            this.drawCanvas();
        };
        requestAnimationFrame(loop);
    }

    updateCanvas(){
        
      document.addEventListener('keydown', e => {
        switch (e.keyCode) {
          case 37: this.car.moveLeft();  break;
          case 39: this.car.moveRight(); break;
        }
        
        this.clearCanvas();
        this.drawCanvas();
      });

        this.obstacles.forEach((obstacle)=> {
            obstacle.update();
        })  
    }

    clearCanvas(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    }

    drawCanvas(){
        this.road.draw()
        this.car.draw();
        this.obstacles.forEach((obstacle)=>{
            obstacle.draw();
        });
    }


} 