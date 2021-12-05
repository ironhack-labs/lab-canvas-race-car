//jshint esversion:6
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

class CanvasBoard {

    constructor(){
        this.x = canvas.width;
        this.y = canvas.height;
        this.img = new Image();
        this.img.src = "images/road.png";
        this.speed = -1;
        this.dy = 0;
    }
    drawBoard(){

        context.drawImage(this.img, 0, 0, this.x, this.y);\

        //To make the image loop, but could not fix it
        
        // if(this.speed < 0) {
        //     context.drawImage(this.img, this.y + this.img.height,0);
        // } else {
        //     context.drawImage(this.img, this.dy - this.y,0);
        // }
        
    }
    
    // move(){
    //     this.dy += this.speed;
    //     this.dy %= canvas.height;
    // }
}

const board = new CanvasBoard();