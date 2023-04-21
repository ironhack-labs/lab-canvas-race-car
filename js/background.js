class BackgroundImage{
    constructor(){
        this.img = img;
        this.y = 0;
        this.speed = -1;
    }



    move(){
        this.y +=this.speed;
        this.y %= canvas.height; 
    }



    draw(){
        ctx.drawImage(this.img, this.y, 0);
        if(this.speed < 0){
            ctx.drawImage(this.img, this.y + canvas.height, 0);
        } else{
            ctx.drawImage(this.img, this.y - this.img.height, 0);
        }
    }
}

const backgroundImage = new BackgroundImage();