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
            this.draw()
        });

        imgCar.src="../images/tanks-green.png"
    }
    //moveUp(){this.y -=25;}
    //moveDown(){this.y +=25;}
    moveLeft(){ 
        if(this.x<0){
            this.x=0
        }
        this.x -=25}
    moveRight(){ 
        if(this.x  > 460){
            this.x=460
        }
        this.x +=25}
    
    draw() {
        ctx.drawImage(this.imgCar,this.x, this.y, 40, 80);
    }
}
let car = new Car(230,600,40,80);

class Background{
    constructor(){
        this.x=0
        this.y=0
    
        const imgBackg = new Image()
        imgBackg.addEventListener('load', ()=>{
            this.imgBackg = imgBackg;
            this.draw()
        });

        imgBackg.src="../images/road.png"
    }
    draw() {
        ctx.drawImage(this.imgBackg,this.x, this.y, 500, 700);
    }
}
backg = new Background();

class Score {
    constructor(points){
        this.x=0
        this.y=0
        this.points = points
    }
    getPoints(){
        this.points
    }
}