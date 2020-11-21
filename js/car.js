class Car {
    constructor(lives){
        this.context = document.getElementById('canvas').getContext('2d');
        this.img='/images/car.png';
        this.x = 225;
        this.y = 300;
        this.width = 50;
        this.height=100;
        this.lives = lives;
    }

    createSelf() {
        let carImg = new Image();
        carImg.src = this.img;
         carImg.addEventListener('load', ()=>{
            this.context.drawImage(carImg,this.x,this.y, this.width,this.height);
        })
        this.drawLives();
    }

    moveLeft(){
    if (this.x<=25){
        this.x=10
    } else{
        this.x-=30;
    }
    }

    moveRight() {
    if (this.x>=425){
        this.x=450
    } else{
        this.x+=30
    }
        
    }2

    updateSelf(){
        this.x=this.x;
    }

    top() {
        return this.y;
    }

    left() {
        return this.x;
    }

    right(){
        return this.x+this.width;
    }


    checkCrash(obs) {
        const crashTop= (this.y) < (obs.y + 10);
        const crashBot= (this.y+this.height) > (obs.y+10);
        const crashLeft= (this.x) < (obs.x+obs.width);
        const crashRight= (this.x+this.width) > (obs.x);

        if(crashTop && crashLeft && crashBot && crashRight){
            return true;
        } else{
            return false;
        }

    }

    drawLives() {
        this.context.font = "20px Georgia";
        if(this.lives ==5 || this.lives==4){
            this.context.fillStyle='green';
        } else if (this.lives==2 || this.lives==3){
            this.context.fillStyle='blue';
        } else{
            this.context.fillStyle='red';
        }
        this.context.fillText(`Lives: ${this.lives}`,350,20)
    }
}