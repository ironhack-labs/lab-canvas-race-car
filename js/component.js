/** @type {HTMLCanvasElement} */


class Component{
    constructor(x, y, w, h, ctx){
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.ctx = ctx;
      this.image = new Image();
      this.speedX = 0;
      this.speedY = 0;
    }

    draw(){
      this.image.src = '/images/car.png';
      ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    }
    
    newPos() {
        this.x += this.speedX;  
    }

    top (){
        return this.y;
    }
    bottom (){
        return this.y + this.h;
    }
    left(){
        return this.x;
    }
    right(){
        return this.x + this.w;
    }
    

    boundaries() {
    const rightBorder = canvas.width - this.w * 2;
    if (this.x < this.w) {
        this.x = this.w;
    }

    if (this.x > rightBorder) {
        this.x = rightBorder;
    }
    }
    crashWith (enemy){
        return !(this.bottom() < enemy.top() || this.top() > enemy.bottom() || this.right() < enemy.left() || this.left() > enemy.right())

    }
}