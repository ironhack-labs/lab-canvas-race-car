const $canvas = document.querySelector('canvas');
console.dir($canvas);
const context = $canvas.getContext('2d');



class Obstacle {
    constructor(){
        this.col = 100;
        this.row = 100;
        this.vx = 5;
        this.vy = 2;
        this.radius =30;
    }

    setRandomPosition(){
        this.row = Math.floor(Math.random() * 10)
    }

    drawObstacle(){
        context.beginPath();
        context.arc(this.col, this.row, this.radius , 0, Math.PI * 2, true);
        context.closePath();
        context.fillStyle = "red";
        context.fill();
      }

    update(){
        this.row += 10;
        clearCanvas();
        context.fillRect( 50,y1,50,50);
        context.fillRect(150,y2,50,50);
        context.fillRect(250,y3,50,50);  
        window.requestAnimationFrame(updateCanvas);
}
}



