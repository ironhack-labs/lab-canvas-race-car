class Car{
    constructor(ctx){
        this.ctx=ctx;
        this.x= (CANVAS_WIDTH/2) + 30;
        this.y= (CANVAS_HEIGHT/2);
        this.w=60;
        this.h=100;
        this.vx=0;
        this.img= new Image();
        this.img.src= "/lab-canvas-race-car/images/car.png";
        this.actions={
            rigth : false,
            left : false
        }
        this.setListeners()

    }
    draw(){
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h
        )
    }
    move(){
        this.applyActions();
        this.vx += this.ax;
        this.x += this.vx;
        
    }
    applyActions(){
        if(this.actions.rigth){
            this.ax= 0,1
        }else if (this.actions.left){
            this.ax=-0,1;
        }else{
            this.ax = 0;
        }
    }

    setListeners(){
        document.onkeydown = e => this.switchAction(e.keyCode,true);
        document.onkeyup = e => this.switchAction(e.keyCode,false)

    }

    switchAction(key,apply){
        switch (key) {
            case RIGHT:
                this.actions.rigth = apply;
                break;
            case LEFT:
                this.actions.left = apply;
                break;            
        }
    }

}