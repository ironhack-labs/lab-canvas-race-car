class Obstacles {
    constructor(canvas,speed){
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.x = Math.random()*400;
        this.y = 0;
        this.speed=speed;
        this.width= Math.random()*200+100;
    }

    update(){
        this.y+=0.5*this.speed;
    }


    drawObs() {
        this.context.fillStyle ='red';
        this.context.fillRect(this.x, this.y, this.width,20)
        this.update();
    }

    
    
}