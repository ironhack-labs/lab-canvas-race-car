console.log('components rules')

class Car{
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
            
        const imgCar = new Image()
        imgCar.addEventListener('load', ()=>{
            this.imgCar = imgCar;
            this.drawC()
        });

        imgCar.src="../images/tanks-green.png"
    }

    moveLeft(){ 
        if(this.x<0){
            this.x=0
        }
        this.x -=20}
    moveRight(){ 
        if(this.x  > 460){
            this.x=460
        }
        this.x +=20}
    
    drawC() {
        ctx.drawImage(this.imgCar,this.x, this.y, 40, 80);
    }
/*
    crashWith(enemy){
        return  (this.bottom() > enemy.top() &&
                this.top() < enemy.bottom() &&
                this.right() > enemy.left() &&
                this.left() < enemy.right());
    }*/
}
let car = new Car(230,600,40,80);


class Background{
    constructor(){
        this.x=0
        this.y=0
    
        const imgBackg = new Image()
        imgBackg.addEventListener('load', ()=>{
            this.imgBackg = imgBackg;
            this.drawB()
        });

        imgBackg.src="../images/road.png"
    }
    drawB() {
        ctx.drawImage(this.imgBackg,this.x, this.y, 500, 700);
    }
}
let backg = new Background();



class Enemy{
    constructor(x,y,w,h,color){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h = h;
        this.color = color;
    }
    drawE(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y, this.w, this.h)
    }
    
}
let enemies = new Enemy;

