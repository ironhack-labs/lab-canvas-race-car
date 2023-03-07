class Obstacles {
    constructor() {
        this.x = Math.random() * (350 - 65) + 65;
        this.y = 0;
        this.w = Math.random() * (180 - 65) + 65;
        this.h = 55;
    }
    
    draw(){
        fill('#990000')
        rect(this.x, this.y, this.w, this.h)
        this.y ++;
 }

}





