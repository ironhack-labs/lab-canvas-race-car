// class to create de board
class Board {
    constructor(ctx,){
        this.ctx = ctx;
        this.img =new Image();
        this.img.src ="./images/road.png";
        this.width= this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;
        this.x= 0;
        this.y=0;
        this.speed = 1;


    }
    clear(){
        this.ctx.clearRect(0, 0, this.width, this.height)
    }
    draw (){
    
        this.ctx.drawImage(this.img,0, this.y, this.width, this.height);
        this.ctx.drawImage(this.img,0, this.y - this.height, this.width, this.height);

        
    }
    move (){
        this.y+=this.speed;
        
        if (this.y - this.height >= 0){
            this.y = 0;

        }


    }
    
}