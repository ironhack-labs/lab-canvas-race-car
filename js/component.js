const img = new Image;
img.src = '/images/road.png';

class Road{
    constructor(x ,y, w, h, img){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        
    }
    drawRoad(){
        ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
    }
}