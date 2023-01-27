/**  @type {HTMLCanvasElement} */ 

class Car{
    constructor(x, y, w, h, ctx){
    this.x= x
    this.y= y   
    this.w= w
    this.h= h
    this.ctx= ctx
    this.speedX = 0
    this.image = new Image
    this.image.src = "/images/car.png"
    }

    draw(){
        this.ctx.fillRect(this.x , this.y , this.w, this.h)
        // this.ctx.createPattern(this.image, "no-repeat")
        }
    
        newPos(){
            this.x += this.speedX;
        }
    
            left(){
                return this.x
            }
            right(){
                return this.x + this.w
            }

}